import React  from 'react'
import '../Styles/HomePage.css';
import { Button, Container,Typography, InputLabel, Link, Switch } from '@mui/material';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import ReplayIcon from '@mui/icons-material/Replay';
import CalculateIcon from '@mui/icons-material/Calculate';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LayersIcon from '@mui/icons-material/Layers';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LinkIcon from '@mui/icons-material/Link';


const Menu = () => {
  const [showmenuheader,setShowmenuheader] = useState(true);
  const navigate = useNavigate();

 
  const hideMenuContent=()=>{
    setShowmenuheader(false);  
  }

  return (
    <div className='menuPage'>
      {showmenuheader?(
      <Container className='menuheader' sx={{display:'flex', flexDirection:'column',alignItems:'center'}}>
        <Typography  variant='h4'>Menüyü Görmek için lütfen ikona tıklayın...</Typography>
        <Button onClick={hideMenuContent} sx={{backgroundColor:'black', border:'1px solid black', borderRadius:'50px'}}>
        <ListOutlinedIcon sx={{fontSize:'50px'}} ></ListOutlinedIcon>
        </Button>
      </Container>
      )
      :(
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
            backgroundColor:'white',
             color:'black',width:'40%',
             height:'20px',padding:'15px 30px',
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
          }}>
                <ShoppingCartIcon 
                sx=
                {{
                  border:'1px solid red',
                   backgroundColor:'red',
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
                    color:'black'
                    }}>SATIŞ</Link>
          </InputLabel>
          <InputLabel 
            sx={{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'white',
              color:'black',
              width:'40%',
              height:'20px',
              padding:'15px 30px',
                marginBottom:'40px',
                display:'flex',
                alignItems:'center'
                }}>
                  <SellIcon 
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
                        color:'black'
                        }}>FİYAT GÖR</Link>
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
              backgroundColor:'white',
              color:'black',
              width:'40%',
              height:'20px',
              padding:'15px 30px',
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
              }}>
                <ReplayIcon sx={{border:'1px solid red', backgroundColor:'red',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
                <Link 
                sx=
                {{
                  marginLeft:'20px',
                  fontSize:'20px',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  textDecoration:'none',
                  color:'black'
                  }}>İADE İŞLEMİ</Link>
          </InputLabel>
          <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'white',
              color:'black',
              width:'40%',
              height:'20px',
              padding:'15px 30px',
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
              }}>
              <CalculateIcon sx={{border:'1px solid red', backgroundColor:'red',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
                <Link  
                sx=
                {{
                  marginLeft:'20px',
                  fontSize:'20px',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  textDecoration:'none',
                  color:'black'
                  }}>TAHSİLATLAR</Link>
           </InputLabel>
        </Container>
        <Container sx={{paddingLeft:'60px',display:'flex', justifyContent:'space-between'}}>
          <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'white',
              color:'black',
              width:'40%',
              height:'20px',
              padding:'15px 30px',
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
              }}>
            <ReceiptLongIcon sx={{border:'1px solid darkorange', backgroundColor:'darkorange',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
            <Link sx={{marginLeft:'20px',fontSize:'20px',display:'flex',flexDirection:'column',justifyContent:'center',textDecoration:'none',color:'black'}}>RAPORLAR</Link>
          </InputLabel>
         <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'white', 
              color:'black',
              width:'40%',
              height:'20px',
              padding:'15px 30px', 
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
            }}>
              <LayersIcon sx={{border:'1px solid blue', backgroundColor:'blue',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
              <Link onClick={()=>navigate("/Satış")} 
              sx=
              {{
                marginLeft:'20px',
                fontSize:'20px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textDecoration:'none',
                color:'black'
              }}>DİĞER İŞLEMLER</Link>
          </InputLabel>
        </Container>
        <Container sx={{paddingLeft:'60px',display:'flex', justifyContent:'space-between'}}>
          <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'white', 
              color:'black',
              width:'40%',
              height:'20px',
              padding:'15px 30px', 
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
            }}>
            <WarehouseIcon sx={{border:'1px solid purple', backgroundColor:'purple',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
            <Link  
            sx=
            {{
              marginLeft:'20px',
              fontSize:'20px',
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              textDecoration:'none',
              color:'black'
            }}>DİREKT ÜRÜN GİRİŞİ</Link>
          </InputLabel>
          <InputLabel 
            sx=
            {{
              border:'1px solid white',
              borderRadius:'20px',
              backgroundColor:'white', 
              color:'black',
              width:'40%',
              height:'20px',
              padding:'15px 30px', 
              marginBottom:'40px',
              display:'flex',
              alignItems:'center'
            }}>
              <LinkIcon sx={{border:'1px solid aqua', backgroundColor:'aqua',borderRadius:'10px', fontSize:'40px',color:'white'}}/>
              <Link  
              sx=
              {{
                marginLeft:'20px',
                fontSize:'20px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textDecoration:'none',
                color:'black'
              }}>WWW</Link>
          </InputLabel>
        </Container>
      </Container>
      )} 
    </div>
  )
}

export default Menu