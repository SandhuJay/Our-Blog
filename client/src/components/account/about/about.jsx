
import { Box, styled, Typography,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;
const Textt = styled(Typography)`
    color: #000000;
`;

const ContactButton=styled(Button)`
text-transform:none;
background:#454545;
heigt:50px;
width:100%;
border-radius:3px

`
const CButton=styled(Button)`
text-transform:none;
background:#252525;
heigt:10px;
border-radius:3px
margin-top:10px
  
`
const About = () => {
   const navigate = useNavigate();
    const contact =()=>{
        navigate('/contact')
    }
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
  
    return (
 <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3"></Typography>
                <div className="about-page">
      <h1>About Us</h1>
  <Text variant='h2'>Welcome to our blog, where we share insights, tips, and stories about our favorite topics.</Text>
  <Box>
    
      <Textt variant='h5'>Our journey began with a simple idea: to create a space where brief explanation of your blog's mission.</Textt>
     <CButton onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </CButton>
      {showDetails && (
        <div>
         <ul>
          <li> 
      As passionate enthusiasts/niche experts, we aim to purpose of your blog through engaging, informative, and thought-provoking content.</li>
     <li> From comprehensive guides that break down complex concepts to types of content you offer,
         we strive to be your go-to resource for all things/topic. Our team of brings a diverse range of experiences and expertise to the table,
        ensuring that you receive well-researched and relevant content.</li>
     <li> But our blog is more than just a blog; it's a community. We encourage you to join the conversation, share your insights, and learn from fellow many enthusiasts.</li>
     <li> Our team is passionate about exploring and sharing the latest trends in our field.</li>
     <p>Feel free to browse through our articles and join the conversation!</p>
      <p>Thank you for being a part of our journey.</p>
      <p>Stay curious and keep exploring!</p>
      <p>Sincerely,</p>
      <p>###</p>
      <p>Founder,Our Blog</p>
      </ul> 

   
        </div>
      )}
    
     </Box>


     <Textt variant='h3'>For any Query? 
                    Reach out to me :</Textt>
            </div>
                  
        
               <ContactButton  onClick ={()=>contact()}>Contact</ContactButton>
</Wrapper>
        </Box>
    )

   
}

export default About;
