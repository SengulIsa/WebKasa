import React,{useState} from 'react';
import '../Styles/OrderPage.css';
import { Container,Typography } from '@mui/material';
import { useProductCode } from '../Context/ProductContext';
import OrderedProducts from './OrderedProducts';


const Cartcontent = () => {
  const{ProductName,ProductPrice,IsEmpty}= useProductCode();
  const [subtotal, setSubtotal] = useState('0,00');
  return (
    <div className='orderComponent'>
      
  <Container sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'95%',height:'95%',backgroundColor:'white',marginTop:'10px',border:'1px solid gray',borderRadius:'10px'}}>
   {IsEmpty ?(
        <Container>
        <Typography sx={{margin:'60% 25%',fontSize:'18px'}}>Sepetinizde Ürün Yok</Typography>
      </Container>
   ) :(
    <OrderedProducts
    prices={ProductPrice}
    names={ProductName}
  />
   )}
    <Container sx={{marginBottom:'5px',border:'1px solid gray',borderRadius:'10px',backgroundColor:'darkblue',color:'white',width:'100%'}}>
      <Typography sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>Ara Toplam <Typography>{subtotal} TL</Typography></Typography>
      <hr/>
      <Typography sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>Toplam Tutar <Typography>0,00TL</Typography></Typography>
    </Container>
  </Container>

    </div>
  )
}

export default Cartcontent