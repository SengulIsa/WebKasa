import React, { useState } from 'react';
import {Input,InputAdornment,Button,Container} from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Styles/OrderPage.css';
import Category from './Category';
import HomeKitchen from '../Images/evMutfak.jpeg';
import HomeLife from '../Images/evYaşam.jpeg';
import Clothes from '../Images/Giyim.jpeg';
import BookLibrary from '../Images/KitapKırtasiye.jpeg';
import Market from '../Images/Market.jpeg';
import Clean from '../Images/Temizlik.jpeg'; 

const SelectProduct = () => {
  const [showCategories, setshowCategories] = useState(false);
  const ShowCategories =()=>{
    setshowCategories(true);
    
  }
  return (
    <div style={{backgroundColor : 'rgb(218, 236, 237)'}} className='orderComponent '>
        <Input className='barcodeInput' sx={{border:'1px solid black', borderRadius:'20px',backgroundColor:'white',color:'black',width:'90%',height:'50px',marginLeft:'10px',marginTop:'10px',fontSize:'20px',paddingLeft:'15px'}} disableUnderline='true' placeholder='Klavyeden Barkod Girişi'
         endAdornment=
         {
           <InputAdornment position="start">
            <CheckCircleIcon sx={{color:'black', fontSize:'50px'}}/>
           </InputAdornment>
         }></Input>
        <Button sx={{border:'1px solid gray',borderRadius:'20px',width:'30%', backgroundColor:'white',color:'black',marginTop:'10px',marginRight:'5px',marginLeft:'3px'}} onClick={ShowCategories}>Kategoriler</Button> 
        <Button sx={{border:'1px solid gray',borderRadius:'20px',width:'30%', backgroundColor:'white',color:'black',marginTop:'10px',marginRight:'5px'}}>Alt Kategoriler</Button> 
        <Button sx={{border:'1px solid gray',borderRadius:'20px',width:'30%', backgroundColor:'white',color:'black',marginTop:'10px',}}>Ürünler</Button> 
        {showCategories ? (
            <Container maxWidth='lg' sx={{marginTop:'10px'}}>
              <Grid container spacing={2} >
          <Grid item xs={12} md={6} lg={4}>
            <Category
              image={Market}
              tittle ="MARKET"
            />
          </Grid>
          <Grid item  xs={12} md={6} lg={4}>
          <Category
            image={Clean}
            tittle ="EV&TEMİZLİK"
          />
          </Grid>
          <Grid item  xs={12} md={6} lg={4}>
          <Category
          image={HomeKitchen}
          tittle ="EV&MUTFAK GEREÇLERİ"
          />
          </Grid>
          <Grid item  xs={12} md={6} lg={4}>
          <Category
          image={Clothes}
          tittle ="GİYİM&AKSESUAR"
          />
          </Grid>
          <Grid item  xs={12} md={6} lg={4}>
          <Category
          image={HomeLife}
          tittle ="EV&YAŞAM"
          />
          </Grid>
          <Grid item  xs={12} md={6} lg={4}>
          <Category
          image={BookLibrary}
          tittle ="KİTAP&KIRTASİYE"
          />
          </Grid>
        </Grid>
            </Container>
          
        ) :(
            <p></p>
        )}
    </div>
  )
}

export default SelectProduct