import { AppBar, Box, Button,IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import '../Styles/OrderPage.css';
import {  useNavigate} from 'react-router-dom';
import SelectProduct from './SelectProduct';
import Cartcontent from './Cartcontent';
import Calculator from './Calculator';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useUser } from '../Context/UsersContext';
import {useTranslation} from 'react-i18next'


const OrderPage = () => {
  const{theme}=useUser();
 const navigate = useNavigate();
 const {t}= useTranslation();
  function IconClick(){
      navigate('/Home');
  }
  return (
    <div>
      <AppBar sx={{border:'1px solid gray', backgroundColor:theme==='dark'?'black':'rgb(218, 236, 237)',boxShadow:'none',}} position='static'>
        <Toolbar>
        <IconButton onClick={IconClick}>
          <ArrowBackIosIcon  sx={{color:theme==='dark'?'white':'gray'}} fontSize='small'/>
        </IconButton>
        <Box sx={{flexGrow:1}}/>
        <Typography sx={{color:'green'}}>{t('Order.orderDocument')}</Typography>
        <Box sx={{flexGrow:1}}/>
        <Button onClick={()=>{navigate('/Ürünler')}}
      variant="contained"
      color="primary"
      startIcon={<QueryStatsIcon fontSize='small' />}
      sx={{ borderRadius: '20px' }}
    >
      {t('Home.seePrice')}
    </Button>
        </Toolbar>
      </AppBar>
      <div className='container'>
        <SelectProduct/>
        <Cartcontent/>
        <Calculator/>
      </div>

      <footer style={{display:'flex',flexDirection:'row', justifyContent:'space-between', backgroundColor:theme==='dark'?'black': 'rgb(218, 236, 237)', color:theme==='dark'?'white': 'black', padding: '20px 0',height:'30px' }}>
     
        <Typography>{t('Order.dealerCustomer')}<Typography sx={{color:'green'}}>{t('Order.sendCenter')}:0</Typography> </Typography>
        <Typography sx={{color:'green'}}>{t('Order.orderDocument')} <Typography sx={{color:'black'}}>1057/1/10.0.2.16</Typography> </Typography>
        <Typography>Ingenico <FiberManualRecordIcon sx={{color:'red',fontSize:'small'}}/><Typography>{t('Home.marketOn')}<FiberManualRecordIcon sx={{color:'green',fontSize:'small'}}/></Typography></Typography>
      
    </footer>
    
    </div>
  )
}

export default OrderPage