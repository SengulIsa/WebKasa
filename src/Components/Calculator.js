import React from 'react';
import '../Styles/OrderPage.css';
import { Container, Button, Input,InputAdornment } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useState } from 'react';
import { useProductCode } from '../Context/ProductContext';

const Calculator = () => {
   const [value, setValue] = useState('');
   const { setAmounts,setIsEmpty,setTotalValue,setProductPrice,setProductName } = useProductCode();

   const handleGirisClick = () => {
     setAmounts(prevAmounts => [...prevAmounts, value]);
     setValue('');
   };
   const DocumentCancel =()=>{
      setIsEmpty(true);
      setProductName([]);
      setProductPrice([]);
      setTotalValue(0);
      

   }
  return (
    <div className='orderComponent'>
      <Container sx={{marginTop:'10px'}}>
        <Button sx={{border:'1px solid blue', borderRadius:'20px',backgroundColor:'blue',color:'white',width:'35%',height:'40px',marginRight:'10px',fontFamily:'inherit',fontSize:'15px'}} >ISIMDEN ARA</Button>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:'30%',height:'40px',marginRight:'10px',fontFamily:'inherit',fontSize:'15px'}}  >SATICI</Button>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:'30%',height:'40px',fontFamily:'inherit',fontSize:'15px'}}  >A101 HADI</Button>
      </Container >
      <Container sx={{marginTop:'5px'}}>
      <Button sx={{border:'1px solid blue', borderRadius:'20px',backgroundColor:'blue',color:'white',width:'50%',height:'40px',fontFamily:'inherit',fontSize:'15px'}}  >TAKSITLI</Button>
      </Container>
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={()=>{DocumentCancel()}} sx={{border:'1px solid red', borderRadius:'20px',backgroundColor:'red',color:'white',width:'30%',height:'40px',marginRight:'10px',fontFamily:'inherit',fontSize:'15px'}}  >BELGE IPTAL</Button>
        <Button sx={{border:'1px solid red', borderRadius:'20px',backgroundColor:'red',color:'white',width:'30%',height:'40px',fontFamily:'inherit',fontSize:'15px'}}  >SATIR IPTAL</Button>
        <Button sx={{border:'1px solid blue', borderRadius:'20px',backgroundColor:'blue',color:'white',width:'35%',height:'40px',marginLeft:'10px',fontFamily:'inherit',fontSize:'15px'}} >TAKSITLI</Button>
      </Container >
      <Container sx={{marginTop:'5px'}}>
        <Input disableUnderline='true' placeholder='0' value={value} onChange={(e)=>{setValue(e.target.value)}} sx={{width:'80%',height:'50px',border:'1px solid gray',borderRadius:'15px',backgroundColor:'white',padding:'10px'}}
            endAdornment=
            {
              <InputAdornment position="end">
                <Button onClick={()=>setValue('')}><ClearIcon sx={{marginRight:'20px',color:'black', fontSize:'40px'}}/></Button>
              </InputAdornment>
            }
        ></Input>
        <Button onClick={e=> setValue(value.slice(0,-1))} sx={{width:'18%',height:'50px',border:'1px solid gray',borderRadius:'15px',backgroundColor:'white',marginLeft:'3px'}}><RemoveIcon sx={{color:'black',fontSize:'50px'}}/></Button>
      </Container>
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'30%',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'00'} >00</Button>
        <Button onClick={e=> setValue(value.slice(0,-1))} sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'30%',height:'50px',fontFamily:'inherit',fontSize:'25px'}}  ><BackspaceIcon fontSize='large'/></Button>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:'35%',height:'50px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} >KAMPANYA LISTESI</Button>
      </Container >
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'20%',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'7'}>7</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'20%',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'8'}  >8</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'20%',height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'9'} >9</Button>
        <Button sx={{border:'1px solid red', borderRadius:'20px',backgroundColor:'red',color:'white',width:'35%',height:'50px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} >MIKTAR</Button>
      </Container >
      <Container sx={{marginTop:'5px',display:'flex',flexDirection:'row'}} >
      <div>
        <div>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'4'} >4</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'5'} >5</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'95px',height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'6'} >6</Button>
        </div>
        <div style={{marginTop:'5px'}}>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'1'} >1</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'2'} >2</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'95px',height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'3'} >3</Button>
        </div>
      </div>
      <div>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:'160px',height:'105px',marginLeft:'10px',fontFamily:'inherit',fontSize:'15px'}} >ARA TOPLAM</Button>
      </div> 
      </Container>
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'135px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px',}} value={'0'} >0</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'150px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'.'}  >.</Button>
        <Button onClick={handleGirisClick} sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'30%',height:'50px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} >GIRIS</Button>
      </Container>
    </div>
  )
}

export default Calculator