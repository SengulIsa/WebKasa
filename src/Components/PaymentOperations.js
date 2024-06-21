import React, { useState } from 'react';
import '../Styles/PaymentPage.css';
import { Button, Container, Typography, Modal } from '@mui/material';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import Invoice from './Invoice'; 
import { usePaymentInfo } from '../Context/PaymentContext';
import { useUser } from '../Context/UsersContext';
import {useTranslation} from 'react-i18next'

const PaymentOperations = () => {
 const [openInvoice, setOpenInvoice] = useState(false);
 const {isDocumentFinishDisabled}=usePaymentInfo();
 const {theme}=useUser();
 const {t}= useTranslation();

  const handleOpenInvoice = () => {
    
      setOpenInvoice(true);
  };

  const handleCloseInvoice = () => {
    setOpenInvoice(false);
  };

  return (
    <div className='PaymentCmpnts' style={{backgroundColor:theme==='dark'?'black':'rgb(218, 236, 237)'}}>
      <Container>
        <Button 
          sx={{
            border:'1px solid blue',
            borderRadius:'20px',
            width:'100%',height:'60px',
            marginBottom:'5px',marginTop:'10px',
            backgroundColor:'blue', color:'white',fontSize:'17px',fontFamily:'fantasy'
          }}>
            <Typography>{t('Order.letsWallet')}</Typography>
        </Button>
        <Button
          sx={{
            border:'1px solid blue',
            borderRadius:'20px',
            width:'100%',height:'60px',
            marginBottom:'5px',
            backgroundColor:'blue', color:'white',fontSize:'17px',fontFamily:'fantasy'
          }}>
            <Typography>{t('Order.tombankWallet')}</Typography>
        </Button>
        <Button
          onClick={handleOpenInvoice}
          sx={{
            border:'1px solid brown',
            borderRadius:'20px',
            width:'100%',height:'60px',
            marginBottom:'5px',
            backgroundColor:'brown', color:'white',fontSize:'17px',fontFamily:'fantasy'
          }}
          disabled={isDocumentFinishDisabled}
          >
            <Typography>{t('Order.eInvoice')}</Typography>
        </Button>
        <Button
          sx={{
            border:'1px solid green',
            borderRadius:'20px',
            width:'60%',height:'60px',
            marginBottom:'5px',
            backgroundColor:'green', color:'white',fontSize:'17px',fontFamily:'fantasy'
          }}>
            <Typography>{t('Order.giftCertificate')}</Typography>
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
          <Typography>{t('Order.eArchive')}</Typography>
        </Button>
      </Container>

      <Modal open={openInvoice} onClose={handleCloseInvoice}>
        <Invoice setOpenInvoice={setOpenInvoice} />
      </Modal>
    </div>
  );
}

export default PaymentOperations;
