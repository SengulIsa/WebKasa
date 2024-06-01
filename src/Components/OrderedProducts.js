
import React, {useEffect,useState } from 'react';
import { useProductCode } from '../Context/ProductContext';
import { Container, Grid, Typography } from '@mui/material';

const OrderedProducts = ({ names, prices }) => {
  const { Amounts,setTotalValue,selectedProductIndex,setSelectedProductIndex,setIsSelected } = useProductCode();
  
  

  useEffect(() => {
    // Her bir ürünün fiyatı ve miktarını çarparak toplam değeri hesapla
    let sum = 0;
    prices.forEach((price, index) => {
      sum += price * Amounts[index];
    });
    setTotalValue(sum);
  }, [prices, Amounts]);
  const handleProductSelect = (index) => {
    setIsSelected(true);
    setSelectedProductIndex(index);
  };

  return (
    <div>
      {prices.map((price, index) => (
        <Grid key={index} onClick={() => handleProductSelect(index)}>
          <Container
            sx={{
              backgroundColor: selectedProductIndex === index ? 'lightblue' : 'yellow',
              border: '1px solid gray',
              borderRadius: '10px',
              marginBottom: '5px',
              marginTop: '5px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography>
              <Typography>KDV %1</Typography>
              <Typography>{names[index]}</Typography>
            </Typography>
            <Typography>
              <Typography>{Amounts[index]} ADET</Typography>
              <Typography>{(price * Amounts[index]).toFixed(2)} TL</Typography>
            </Typography>
          </Container>
        </Grid>
      ))}
    </div>
  );
};

export default OrderedProducts;
