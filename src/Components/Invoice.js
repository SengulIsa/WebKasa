import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography, TextField,Grid } from '@mui/material';
import { usePaymentInfo } from '../Context/PaymentContext';
import { useProductCode } from '../Context/ProductContext';
import '../Styles/PaymentPage.css';

const Invoice = ({ setOpenInvoice }) => {
  const { paymentCount, receivedMoney, change, paymentType } = usePaymentInfo();
  const{ProductName,ProductPrice,Amounts}= useProductCode();
  const componentRef = useRef();
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  const formattedPaymentType = paymentType.join(' - ');
  const cashier = localStorage.getItem('Username');

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  const validateEmail = (email) => {
    // Basit bir email doğrulama regex'i
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSendEmail = () => {
    if (isEmailValid) {
      alert(`Email sent to ${email}`);
      setOpenInvoice(false);
    } else {
      alert('Lütfen geçerli bir email adresi girin.');
    }
  };

  return (
    <div ref={componentRef}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 700, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
    <Container className='slip-products'>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ marginBottom: '5px' }}>ÖRNEK İŞLETME</Typography>
          <Typography>DEMİRCİKARA MAH. 1431. SOK. NO:12</Typography>
          <Typography>0242 311 41 21</Typography>
          <Typography>ANTALYA</Typography>
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '40px' }}>
          <Container>
            <Typography>TARİH: {formattedDate}</Typography>
            <Typography>SATIŞ NO: {paymentCount}</Typography>
            <Typography>KASİYER: {cashier}</Typography>
          </Container>
          <Container>
            <Typography>SAAT: {formattedTime}</Typography>
            <Typography>SATIŞ: {formattedPaymentType}</Typography>
          </Container>
        </Container>
        <hr style={{border: 'none',height: '1px',backgroundColor: 'black'}}/>
        <Container>
        {ProductPrice.map((price, index) => (
        <Grid key={index} >
          <Container
            sx={{
              backgroundColor:  'white',
              marginBottom: '5px',
              marginTop: '5px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography>
              <Typography>{ProductName[index]}<Typography>KDV %1</Typography></Typography>
            </Typography>
            <Typography>
              <Typography>{Amounts[index]} ADET</Typography>
              <Typography>*{(price * Amounts[index]).toFixed(2)} TL</Typography>
            </Typography>
          </Container>
          <hr />
        </Grid>
      ))}
        </Container>
        <hr style={{border: 'none',height: '1px',backgroundColor: 'black'}}/>
        <Container>
          <Typography>
            <span>ALINAN PARA:</span>
            <span style={{ float: 'right' }}>*{parseFloat(receivedMoney).toFixed(2)} TL</span>
          </Typography>
          <Typography>
            <span>PARA ÜSTÜ:</span>
            <span style={{ float: 'right' }}>*{parseFloat(change).toFixed(2)} TL</span>
            <hr style={{border: 'none',height: '1px',backgroundColor: 'black'}}/>
            <span>GENEL TOPLAM:</span>
            <span style={{ float: 'right' }}>*{(receivedMoney - change).toFixed(2)} TL</span>
          </Typography>
        </Container>
        <Typography sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>E-FATURA</Typography>
      </Container>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <TextField 
            label="Email Address" 
            variant="outlined" 
            value={email}
            onChange={handleEmailChange}
            sx={{ marginBottom: '20px', width: '100%' }}
            error={!isEmailValid && email !== ''}
            helperText={!isEmailValid && email !== '' ? 'Geçerli bir email adresi girin.' : ''}
          />
          <Container className="no-print" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={() => { setOpenInvoice(false) }}
              sx={{
                backgroundColor: 'gray',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'darkgray'
                },
                marginRight: '10px',
                padding: '10px 20px',
                borderRadius: '10px'
              }}
            >
              Kapat
            </Button>
            <Button
              onClick={handleSendEmail}
              disabled={!isEmailValid}
              sx={{
                backgroundColor: isEmailValid ? 'green' : 'lightgray',
                color: 'white',
                '&:hover': {
                  backgroundColor: isEmailValid ? 'darkgreen' : 'gray'
                },
                marginLeft: '10px',
                padding: '10px 20px',
                borderRadius: '10px'
              }}
            >
              Gönder
            </Button>
          </Container>
        </Container>
      </Box>
    </div>
  );
};

export default Invoice;

