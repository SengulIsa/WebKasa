import { Container, Typography } from '@mui/material'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import React,{useState,useEffect} from 'react';
import {useUser} from '../Context/UsersContext'
import Logo from '../Images/32-bit.png';
import '../Styles/HomePage.css';
import axios from 'axios';

const HomeTop = () => {
  const { usercode, fetchCaseInfo,caseIp,setCaseIp,caseNumber,setCaseNumber,version,setVersion,} = useUser();
  const [username, setUsername] = useState('');
  const response = axios.get('http://localhost:3001/users');
  
  fetchCaseInfo();
  
  
  const takeIdByUserCode= async ()=>{
    await  response
    .then(result=>{
      result.data.map(user =>{
         if(user.userCode=== usercode)
         {
          setUsername(user.name);
          
        }
  })
    })

  }

    const handleClick =()=>{
        console.log('clicked');
    }

   takeIdByUserCode();
  return (
    <div className='homeTop'>
    <Container
      sx={{
        backgroundColor: 'white',
        width: '50%',
        maxWidth: '500px', // Set a maximum width for smaller screens
        height: '120px',
        borderRadius: '20px',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto', // Center the container
        wordWrap: 'break-word', // Wrap long words
        overflowWrap: 'break-word', // Wrap at the end of the word
      }}
    >
      <Typography>Mağaza No:1057(Mobile Demo)</Typography>
      <Typography>Kasa No:Kasa {caseNumber}</Typography>
      <Typography>Personel Adı:{username}</Typography>
      <Typography>Kasa İp No:{caseIp}</Typography>
      <Typography>Versiyon:{version}</Typography>
    </Container>
    <Container
      sx={{
        width: '30%',
        maxWidth: '500px',
        height: '150px',
        marginTop: '100px', // Add more space between the containers
        marginLeft: '300px',
        marginRight: 'auto',
        textAlign: 'center', // Center the logo
      }}
    >
      <img src={Logo} alt='#' className='logoImage' style={{ maxWidth: '100%', height: 'auto' }} />
    </Container>
    <Container
      sx={{
        textAlign: 'center', // Center the button
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: 'white',
          border: '1px solid white',
          borderRadius: '100px',
          marginTop: '20px', // Add more space between the button and the logo
          marginLeft:'400px'
        }}
      >
        <SettingsRoundedIcon sx={{ padding: '5px', fontSize: '30px' }} />
      </button>
    </Container>
  </div>
  //  <div className='homeTop' style={{maxWidth:'100%'}}>
  //  <Container sx={{backgroundColor:'white',width:'90vh',height:'120px', borderRadius:'20px',float:'left',marginTop:'10px',marginLeft:'10px'}}>
  //       <Typography>Mağaza No:1057(Mobile Demo)</Typography> 
  //       <Typography>Kasa No:{casenumber}</Typography> 
  //       <Typography>Personel Adı:{username}</Typography>
  //       <Typography>Kasa İp No:10.0.2.16</Typography> 
  //       <Typography>Versiyon:v1.3.78.146</Typography> 
  //   </Container>
  //   <Container sx={{ width:'500px',height:'100px',marginTop:'100px',marginLeft:'300px'}}>
  //   <img src={Logo} alt='#' className='logoImage'/>
  //   </Container>
  //   <Container sx={{}}>
  //   <button onClick={handleClick} style={{backgroundColor:'white', border:'1px solid white', borderRadius:'100px',float:'right',marginTop:'10px'}}>
  //   <SettingsRoundedIcon sx={{padding:'5px',fontSize:'30px'}}/>
  //   </button>
  //   </Container>
  //  </div>

  )
}

export default HomeTop