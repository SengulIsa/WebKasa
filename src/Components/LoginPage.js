import React,{useState} from 'react';
import Container from '@mui/material/Container';
import Logo from '../Images/32-bit.png';
import '../Styles/LoginPage.css';
import { Input, Typography,InputAdornment} from '@mui/material';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LockIcon from '@mui/icons-material/Lock';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () => {
  const [usercode, setUserCode] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [valid, setValid] = useState(true);
  const [showContainer, setShowContainer] = useState(true);
 

  const navigate = useNavigate();
  const response = axios.get('http://localhost:3001/users')

  const  HandleSubmit= async (e)=>{
   e.preventDefault();
   let isValid = true;
  
     await  response
      .then(result=>{
        result.data.map(user =>{
           if(user.userCode=== usercode && user.password=== password ) navigate('/Home');
           else{
            isValid= false;
            setShowContainer(true);
            setErrMsg("Kullanıcı kodu veya şifre yanlış !");
            setTimeout(function () {
              setShowContainer(false);
              setErrMsg('');
              
          }, 2000);
           }
        })
        
        setValid(isValid);
        
      })

  }
 
  return (
    <>
       
      <div >
      
            <Container  sx={
              {display:'flex', 
              flexDirection:'row',
              justifyContent:'space-between',
              width:'40%',
              height:'100vh',
              backgroundColor:'rgb(218, 236, 237)',
              float:'left',
              textAlign:'center',
              borderStyle:'none',
              
              }}>
                <div className='logoDiv'>
                <img src={Logo} alt='#' className='logoImage'/>
                <Typography>v.13.78.146</Typography>
              
                </div>
                
                
            </Container>
            <Container sx={{
              width:'60%',
              height:'100vh',
              backgroundColor:'rgb(218, 236, 237)',
              float:'left',
              borderStyle:'none',
              }}>
                  
                <form onSubmit={HandleSubmit}>
                  <Container>
                  <Typography variant='h5' sx={{color:'midnightblue'}}>Hoşgeldiniz!</Typography>
                  <Typography variant='h6' sx={{marginTop:'20px',color:'midnightblue'}}>Lütfen kullanıcı kodu ve şifrenizi giriniz.</Typography>
                  </Container>
                 
                  {valid ? (<></>):(
                    
                    <Container style={{ display: showContainer ? 'block' : 'none' }}
                        sx=
                        {{
                          width:'100vh',
                          height:'40px',
                          marginLeft:'0px',
                          backgroundColor:'#fcd5d5',
                          color:'black',
                          border:'1px #b67575 solid',
                          borderRadius:'30px'
                        }} >  <span style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3px',fontSize:'20px'}}>{errMsg} </span>  
                    </Container>
                   
                  )}
                    <Input  disableUnderline='true'  placeholder='Kullanıcı Kodu' autoComplete='off' onChange={(e)=>setUserCode(e.target.value)} value={usercode} required
                              endAdornment=
                              {
                                <InputAdornment position="start">
                                  <PersonSharpIcon color='primary' sx={{backgroundColor:'white',position:'absolute',left:'5px'}}/>
                                </InputAdornment>
                              }
                          sx={{height: '50px',
                          border: '2px solid midnightblue',
                          borderRadius: '10px',
                          backgroundColor: 'white',
                          marginTop: '10px',
                          width: '100%',
                          fontSize: 'medium',
                          textDecoration:'none',
                        paddingLeft:'35px'}}
                    />
                    <Input disableUnderline='true' placeholder='Şifre' type='password'  onChange={(e)=>setPassword(e.target.value)} value={password} required
                            endAdornment=
                            {
                                  <InputAdornment position="start">
                                    <LockIcon color='primary' sx={{backgroundColor:'white',position:'absolute',left:'5px'}}/>
                                  </InputAdornment>
                              }
                        sx={{height: '50px',
                        border: '2px solid midnightblue',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        marginTop: '10px',
                        width: '100%',
                        fontSize: 'medium',
                        textDecoration:'none',
                        paddingLeft:'35px'}}
                      />
                      
                      <button className='logInButton' >Giriş</button>
                      
                      {/* <button onClick={handleNewUSer} className='newUser' >Yeni Kasiyer</button> diğer işlemler kısmına yeni kasiyer kısmı eklenecek */}
                      
                </form> 
            </Container>    
      </div>
    
    </>
   
  )
}

export default LoginPage;
