import React  from 'react';
import '../Styles/SettingsPage.css';
import { Button, Container,InputLabel, Link, Typography,} from '@mui/material';
import {  useNavigate} from 'react-router-dom';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Settings = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className='settings-up'>
      <Button onClick={()=>navigate('/Home')}>
      <ArrowBackIosIcon  className='back-icon'/>
      </Button>
    <Typography sx=
    {{ 
      margin: '0 auto',
      order:2,
      fontWeight: 'bold',
    fontSize: '24px'
    }}>AYARLAR</Typography>
    </div>
    <div className='settings'>      
    <Container>
        <Container 
        sx=
        {{
          paddingLeft:'60px',
          display:'flex', justifyContent:'space-between'
        }}>
        <InputLabel 
           sx=
          {{
            border:'1px solid white',
            borderRadius:'20px',
            backgroundColor:'darkblue',
             color:'white',width:'40%',
             height:'20px',padding:'15px 30px',
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
          }}>
                <TurnLeftIcon 
                sx=
                {{
                  border:'1px solid darkblue',
                   backgroundColor:'darkblue',
                   borderRadius:'10px', 
                   fontSize:'40px',
                   color:'white'
                }}/>
                   <Link onClick={()=>navigate("/Satış")} 
                   sx=
                   {{
                    marginLeft:'20px',
                    fontSize:'20px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    textDecoration:'none',
                    color:'white'
                    }}>INGENCIO AYARLARI</Link>
          </InputLabel>
          <InputLabel 
            sx={{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'green',
              color:'white',
              width:'40%',
              height:'20px',
              padding:'15px 30px',
                marginBottom:'40px',
                display:'flex',
                alignItems:'center'
                }}>
                  <TurnRightIcon 
                  sx=
                  {{
                    border:'1px solid green',
                    backgroundColor:'green',
                    borderRadius:'10px',
                      fontSize:'40px',
                      color:'white'
                      }}/>
                      <Link onClick={()=>navigate("/Satış")} 
                      sx=
                      {{
                        marginLeft:'20px',
                        fontSize:'20px',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        textDecoration:'none',
                        color:'white'
                        }}>DİĞER AYARLAR</Link>
          </InputLabel>
        </Container>
        <Container 
        sx={{
          paddingLeft:'60px',
          display:'flex',
           justifyContent:'space-between'
           }}>
          <InputLabel 
            sx={{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'green',
              color:'white',
              width:'40%',
              height:'20px',
              padding:'15px 30px',
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
              }}>
                <SaveAltIcon sx={{border:'1px solid green', backgroundColor:'green',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
                <Link 
                sx=
                {{
                  marginLeft:'20px',
                  fontSize:'20px',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  textDecoration:'none',
                  color:'white'
                  }}>TÜM SATIŞLARI AKTAR</Link>
          </InputLabel>
          <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'orange',
              color:'white',
              width:'40%',
              height:'20px',
              padding:'15px 30px',
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
              }}>
              <MonitorHeartIcon sx={{border:'1px solid orange', backgroundColor:'orange',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
                <Link  
                sx=
                {{
                  marginLeft:'20px',
                  fontSize:'20px',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  textDecoration:'none',
                  color:'white'
                  }}>YAZICI TESTİ</Link>
           </InputLabel>
        </Container>
        <Container sx={{paddingLeft:'60px',display:'flex', justifyContent:'space-between'}}>
          <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'green',
              color:'white',
              width:'40%',
              height:'20px',
              padding:'15px 30px',
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
              }}>
            <SaveAltIcon sx={{border:'1px solid green', backgroundColor:'green',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
            <Link  sx={{marginLeft:'20px',fontSize:'20px',display:'flex',flexDirection:'column',justifyContent:'center',textDecoration:'none',color:'white'}}>KONFİGÜRASYONU YENİDEN YÜKLE</Link>
          </InputLabel>
        </Container>
        <Container sx={{paddingLeft:'60px',display:'flex', justifyContent:'space-between'}}>
          <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'darkblue', 
              color:'white',
              width:'40%',
              height:'20px',
              padding:'15px 30px', 
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
            }}>
            <SaveAltIcon sx={{border:'1px solid darkblue', backgroundColor:'darkblue',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
            <Link  
            sx=
            {{
              marginLeft:'20px',
              fontSize:'20px',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              textDecoration:'none',
              color:'white'
            }}>TERAZİ AYARLARI</Link>
          </InputLabel>
          <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'darkblue', 
              color:'white',
              width:'40%',
              height:'20px',
              padding:'15px 30px', 
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
            }}>
              <SettingsIcon sx={{border:'1px solid darkblue', backgroundColor:'darkblue',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
              <Link  
              sx=
              {{
                marginLeft:'20px',
                fontSize:'20px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textDecoration:'none',
                color:'white'
              }}>OPERASYONLAR</Link>
          </InputLabel>
        </Container>
      </Container>
    </div>
    </>
  )
}

export default Settings