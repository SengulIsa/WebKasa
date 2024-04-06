import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import '../Styles/OrderPage.css';
import {  useNavigate} from 'react-router-dom';
import SelectProduct from './SelectProduct';
import Cartcontent from './Cartcontent';
import Calculator from './Calculator';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OrderPage = () => {
 const navigate = useNavigate();
  function IconClick(){
      navigate('/Home');
  }
  return (
    <div>
      <AppBar sx={{border:'1px solid gray', backgroundColor:'rgb(218, 236, 237)',boxShadow:'none',}} position='static'>
        <Toolbar>
        <IconButton onClick={IconClick}>
          <ArrowBackIosIcon  sx={{color:'gray'}} fontSize='small'/>
        </IconButton>
        <Box sx={{flexGrow:1}}/>
        <Typography sx={{color:'green'}}>Satış Belgesi</Typography>
        <Box sx={{flexGrow:1}}/>
        <Button
      variant="contained"
      color="primary"
      startIcon={<QueryStatsIcon fontSize='small' />}
      sx={{ borderRadius: '20px' }}
    >
      Fiyat Gör
    </Button>
        </Toolbar>
      </AppBar>
      <div className='container'>
        <SelectProduct/>
        <Cartcontent/>
        <Calculator/>
      </div>

      <footer style={{display:'flex',flexDirection:'row', justifyContent:'space-between', backgroundColor: 'rgb(218, 236, 237)', color: 'black', padding: '20px 0',height:'25px' }}>
     
        <Typography>SATICI/MÜŞTERİ <Typography sx={{color:'green'}}>Merkeze Gönderilecek:0</Typography> </Typography>
        <Typography sx={{color:'green'}}>SATIŞ BELGESİ <Typography sx={{color:'black'}}>1057/1/10.0.2.16</Typography> </Typography>
        <Typography>Ingenico <FiberManualRecordIcon sx={{color:'red',fontSize:'small'}}/><Typography>Mağaza Çevrimiçi <FiberManualRecordIcon sx={{color:'green',fontSize:'small'}}/></Typography></Typography>
      
    </footer>
    
    </div>
  )
}

export default OrderPage