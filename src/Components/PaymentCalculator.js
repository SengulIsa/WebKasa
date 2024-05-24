import React,{useState} from 'react';
import { Button,Container, Typography,Input,InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Box from '@mui/material/Box';
import { useProductCode } from '../Context/ProductContext';



const PaymentClaculator = () => {
  const [value1, setValue1] = useState('');
  const [change, setChange] = useState(0.00);
  const {totalValue} = useProductCode();
  return (
    <div className='PaymentCmpnts'>
       <Container sx={{marginTop:'10px'}}>
        <Button sx={{border:'1px solid red', borderRadius:'20px',backgroundColor:'red',color:'white',width:'45%',height:'60px',marginRight:'5px',fontFamily:'inherit',fontSize:'15px'}} >BELGE İPTAL</Button>
        <Button sx={{border:'1px solid orange', borderRadius:'20px',backgroundColor:'orange',color:'white',width:'45%',height:'60px',marginRight:'5px',fontFamily:'inherit',fontSize:'15px'}}  >BELGE BİTİR</Button>
      </Container >
      <Container sx={{marginTop:'5px'}}>
        <Button sx={{border:'1px solid red', borderRadius:'20px',backgroundColor:'red',color:'white',width:'45%',height:'60px',marginRight:'5px',fontFamily:'inherit',fontSize:'15px'}} >SİL</Button>
      </Container >
      <Container sx={{marginTop:'5px'}}>
        <Input disableUnderline='true' placeholder='0' value={value1} onChange={(e)=>{setValue1(e.target.value)}} sx={{width:'100%',height:'60px',border:'1px solid gray',borderRadius:'15px',backgroundColor:'white',padding:'10px'}}
            endAdornment=
            {
              <InputAdornment position="end">
               <Button onClick={()=>setValue1('')}><ClearIcon sx={{marginRight:'20px',color:'black', fontSize:'40px'}}/></Button>
              </InputAdornment>
            }
        ></Input>
      </Container>
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'30%',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'00'} >00</Button>
      <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'30%',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'000'} >000</Button>
        <Button onClick={e=> setValue1(value1.slice(0,-1))} sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'35%',height:'50px',fontFamily:'inherit',fontSize:'25px'}}  ><BackspaceIcon fontSize='large'/></Button>
      </Container >
      <Container sx={{marginTop:'5px',display:'flex',flexDirection:'row'}} >
      <div>
        <div>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'7'} >7</Button>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'8'} >8</Button>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'95px',height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'9'} >9</Button>
        </div>
        <div style={{marginTop:'5px'}}>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'4'} >4</Button>
        <Button onClick={e=> setValue1( value1+ e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'5'} >5</Button>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'95px',height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'6'} >6</Button>
        </div>
      </div>
      <div>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:'160px',height:'105px',marginLeft:'10px',fontFamily:'inherit',fontSize:'15px'}} onClick={()=>{setValue1((totalValue.toFixed(2))); setChange(0.00)}} >KREDİ KARTI</Button>
      </div> 
      </Container>
      <Container sx={{marginTop:'5px',display:'flex',flexDirection:'row'}} >
      <div>
        <div>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'1'} >1</Button>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'2'} >2</Button>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'95px',height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'3'} >3</Button>
        </div>
        <div style={{marginTop:'5px'}}>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'185px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'0'} >0</Button>
        <Button onClick={e=> setValue1( value1 + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'95px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'.'}  >.</Button>
        </div>
      </div>
      <div>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:'160px',height:'105px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} onClick={()=>{setChange((value1)-totalValue)}} >NAKİT</Button>
      </div> 
      </Container>
      <Container sx={{marginTop:'15px'}}>
      <Box  component="section" sx={{ p: 2, border: '1px dashed grey', backgroundColor:'yellow',color:'black' }}>
       PARA ÜSTÜ :{change} TL
    </Box>
      </Container>
    </div>
  )
}

export default PaymentClaculator