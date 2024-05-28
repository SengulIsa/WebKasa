import React, { useState } from 'react';
import '../Styles/PaymentPage.css';
import { Button, Container, Typography, Modal } from '@mui/material';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import Invoice from './Invoice'; 
import { useProductCode } from '../Context/ProductContext';

const PaymentOperations = () => {
 const [openInvoice, setOpenInvoice] = useState(false);
 const {IsEmpty}=useProductCode();

  const handleOpenInvoice = () => {
      if(IsEmpty)
        alert('Sepette ürün olmadığı için fatura gönderimi yapılamaz.Lütfen ürün ekleyin');
      else
      setOpenInvoice(true);
  };

  const handleCloseInvoice = () => {
    setOpenInvoice(false);
  };

  return (
    <div className='PaymentCmpnts'>
      <Container>
        <Button 
          sx={{
            border:'1px solid blue',
            borderRadius:'20px',
            width:'100%',height:'60px',
            marginBottom:'5px',marginTop:'10px',
            backgroundColor:'blue', color:'white',fontSize:'17px',fontFamily:'fantasy'
          }}>
            <Typography>HADİ CÜZDAN</Typography>
        </Button>
        <Button
          sx={{
            border:'1px solid blue',
            borderRadius:'20px',
            width:'100%',height:'60px',
            marginBottom:'5px',
            backgroundColor:'blue', color:'white',fontSize:'17px',fontFamily:'fantasy'
          }}>
            <Typography>TOMBANK CÜZDAN</Typography>
        </Button>
        <Button
          onClick={handleOpenInvoice}
          sx={{
            border:'1px solid brown',
            borderRadius:'20px',
            width:'100%',height:'60px',
            marginBottom:'5px',
            backgroundColor:'brown', color:'white',fontSize:'17px',fontFamily:'fantasy'
          }}>
            <Typography>E-FATURA</Typography>
        </Button>
        <Button
          sx={{
            border:'1px solid green',
            borderRadius:'20px',
            width:'60%',height:'60px',
            marginBottom:'5px',
            backgroundColor:'green', color:'white',fontSize:'17px',fontFamily:'fantasy'
          }}>
            <Typography>HEDİYE ÇEKİ(KIRMIZI KART)</Typography>
        </Button>
      </Container>
      <Container sx={{marginTop:'90px'}}>
        <Button
          sx={{
            border:'1px solid blue',
            borderRadius:'20px',
            width:'100%',height:'60px',
            color:'blue'
          }}>
          <CropSquareIcon fontSize='small'/> 
          <Typography>E-ARŞİV FATURA KAREKOD</Typography>
        </Button>
      </Container>

      <Modal open={openInvoice} onClose={handleCloseInvoice}>
        <Invoice setOpenInvoice={setOpenInvoice} />
      </Modal>
    </div>
  );
}

export default PaymentOperations;
