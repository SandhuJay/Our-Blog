
import { Box, styled, Typography, Link } from '@mui/material';
import { Instagram, Email,LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 25px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;
const Textt = styled(Typography)`
    color: 	#0e76a8;

`;
const Tex = styled(Typography)`
    color: #E4405F;

`;
const Te = styled(Typography)`
    color: #f2a60c;

`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Need something built or simply want to have chat? 
                    Reach out to me on:
                   
                    
                </Text>
                
                <Textt variant="h5"> LinkedIn:
                    <Box component="span" style={{ marginLeft: 5 }}>
                    <Link href="https://www.linkedin.com/jaysandhu2763/" color="inherit" target="_blank">
                            <LinkedIn/>
                        </Link>
                    </Box>
                    </Textt>
                
                <Tex variant="h5">
                    Instagram:
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/jaysandhu7774/" color="inherit" target="_blank">
                            <Instagram/>
                        </Link>
                    </Box> 
                </Tex>
                <Te variant="h5">
                Send me an Email...
                  <Box component="span" style={{ marginLeft: 5 }}>
                    
                        <Link href="mailto:jai.sandhu2002@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email/>
                        </Link>
                    </Box> 
                    </Te>
            </Wrapper>
        </Box>
    );
}

export default Contact;
