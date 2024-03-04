import { Container, Typography } from '@mui/material'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import React from 'react'
import Logo from '../Images/32-bit.png';
import '../Styles/HomePage.css';

const HomeTop = () => {
    const handleClick =()=>{
        console.log('clicked');
    }
  return (
   <div className='homeTop'>
   <Container sx={{backgroundColor:'white',width:'90vh',height:'100px', borderRadius:'20px',float:'left',marginTop:'10px',marginLeft:'10px'}}>
        <Typography>Mağaza No:1057(Mobile Demo)</Typography> 
        <Typography>Kasa No: 1 (Kasa 1)</Typography> 
        <Typography>Kasa İp No:10.0.2.16</Typography> 
        <Typography>Versiyon:v1.3.78.146</Typography> 
    </Container>
    <Container sx={{ width:'500px',height:'100px',marginTop:'100px',marginLeft:'300px'}}>
    <img src={Logo} alt='#' className='logoImage'/>
    </Container>
    <Container sx={{}}>
    <button onClick={handleClick} style={{backgroundColor:'white', border:'1px solid white', borderRadius:'100px',float:'right',marginTop:'10px'}}>
    <SettingsRoundedIcon sx={{padding:'5px',fontSize:'30px'}}/>
    </button>
    </Container>
   </div>

  )
}

export default HomeTop