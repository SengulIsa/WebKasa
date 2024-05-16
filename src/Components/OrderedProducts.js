
import React, {useEffect } from 'react';
import { useProductCode } from '../Context/ProductContext';
import { Container, Typography } from '@mui/material';

const OrderedProducts = ({ names, prices }) => {
  const { Amounts,setTotalValue } = useProductCode();
  

  useEffect(() => {
    // Her bir ürünün fiyatı ve miktarını çarparak toplam değeri hesapla
    let sum = 0;
    prices.forEach((price, index) => {
      sum += price * Amounts[index];
    });
    setTotalValue(sum);
  }, [prices, Amounts]);

  return (
    <div>
      {prices.map((price, index) => (
  <div key={index}>
     <Container sx={{backgroundColor:'yellow',border:'1px solid gray', borderRadius:'10px',marginBottom:'5px',marginTop:'5px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Typography>
          <Typography>KDV %1</Typography> 
          <Typography>{names[index]}</Typography>
        </Typography>
        <Typography>
           {/* Amounts.length > index && */}
        {<Typography>{Amounts[index]} ADET</Typography>}
         <Typography>{(price * Amounts[index]).toFixed(2)} TL</Typography>
         
        </Typography>
          </Container>
          
        </div>
      ))}
    </div>
  );
};

export default OrderedProducts;
