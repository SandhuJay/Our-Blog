
import {useState,useEffect, useContext } from 'react';
import{Box,TextField,Button,styled,Typography} from '@mui/material';
import { API } from '../../../service/api';
import { DataContext } from '../../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
const Component =styled(Box)`
width :400px;
margin:auto;
box-shadow:5px 2px 5px 2px rgb(0 0 0/ 0.6)`
const Image =styled('img')({
width:100,margin:'auto',
display:'flex',
padding:'50px 0 0'

})
const Wrapper=styled(Box)`
padding:25px 35px;
display:flex;
flex:1;
flex-direction:column;
&>div,&>button,&>p {
    margin-top:20px
}`
const LoginButton=styled(Button)`
text-transform:none;
background:#454545;
heigt:50px;
border-radius:3px

`
const SignupButton=styled(Button)`
text-transform:none;
background:#FFF;
heigt:50px;
border-radius:3px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`
const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600
`
const Text=styled(Typography)`
color:878787;
font size:15px
`
const loginInitialValues={
  username:'',
  password:''
}
const signupIntialValues={
   name:'',
   username:'',
   password:''

}
const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupIntialValues);
  const [error, showError] = useState('');
  const [account, toggleAccount] = useState('login');

  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

  useEffect(() => {
      showError(false);
  }, [login])

  

  const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
        showError('');

        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
        setAccount({ name: response.data.name, username: response.data.username });
        
        isUserAuthenticated(true)
        setLogin(loginInitialValues);
        navigate('/');
    } else {
        showError('Something went wrong! please try again later');
    }
}

  const signupUser = async () => {
   let response = await API.userSignup(signup);
   if (response.isSuccess) {
       showError('');
       setSignup(signupIntialValues);
       toggleAccount('login');
   } else {
       showError('Something went wrong! please try again later');
   }
}
  const toggleSignup=()=>{
   account === 'signup'? toggleAccount("login") :toggleAccount("signup")
}
const onValueChange=(e)=>{
  setLogin({...login,[e.target.name]:e.target.value})
}
    return(
    <Component>
    <Box>
     <Image src ={imageURL} alt ="login"/>
     {
        account === 'login'?
     
     <Wrapper>
       <TextField id="standard-basic"  variant="standard" value={login.username} onChange={(e)=>onValueChange(e)} name ="username" label="Enter Username" />
       <TextField id="standard-basic"  variant="standard"value={login.password} onChange={(e)=>onValueChange(e)} name='password' label="Enter Password"/>
       {error && <Error>{error}</Error>}
       <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
       <Text  style ={{textAlign:'center'}}>
             OR
          </Text>
       <SignupButton onClick ={()=>toggleSignup()}>Create Account</SignupButton>
     </Wrapper>
     :
     <Wrapper>
       <TextField id="standard-basic"  variant="standard" onChange={(e)=>onInputChange(e)}name ='name' label="Enter Name" />
       <TextField id="standard-basic"  variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter Username"/>
       <TextField id="standard-basic"  variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter Password"/>
               {error && <Error>{error}</Error>}
       <SignupButton onClick ={() => signupUser()} >Signup</SignupButton>
       <Text  style ={{textAlign:'center'}}>
             OR
          </Text>
       <LoginButton variant="contained" onClick ={()=>toggleSignup()}>Already have an Account</LoginButton>
     </Wrapper>
}
     </Box>
     </Component>
    )
}
export default Login;

