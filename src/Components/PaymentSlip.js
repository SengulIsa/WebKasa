import React, { useRef} from 'react';
import { Box, Button, Container, Typography,Grid } from '@mui/material';
import { usePaymentInfo } from '../Context/PaymentContext';
import { useProductCode } from '../Context/ProductContext';
import { useReactToPrint } from 'react-to-print';
import '../Styles/PaymentPage.css';

const PaymentSlip = () => {
  const { setIsPaymentSlipOpen, paymentCount, receivedMoney, change, paymentType } = usePaymentInfo();
  const{ProductName,ProductPrice,Amounts}= useProductCode();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'pymnt-data'+{paymentCount},
    onAfterPrint: () => alert('Başarıyla Yazdırıldı.')
  });
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  const formattedPaymentType = paymentType.join(' - '); // PaymentType değerlerini birleştir
  const cashier = localStorage.getItem('Username');

  return (
    <>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 650, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
      <Container  className='slip-products'>
      <div ref={componentRef}>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ marginBottom: '5px' }}>ÖRNEK İŞLETME</Typography>
          <Typography>DEMİRCİKARA MAH. 1431. SOK. NO:12</Typography>
          <Typography>0242 311 41 21</Typography>
          <Typography>ANTALYA</Typography>
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '40px' }}>
          <Container>
            <Typography>TARİH:{formattedDate}</Typography>
            <Typography>SATIŞ NO:{paymentCount}</Typography>
            <Typography>KASİYER:{cashier}</Typography>
          </Container>
          <Container>
            <Typography>SAAT:{formattedTime}</Typography>
            <Typography>SATIŞ:{formattedPaymentType}</Typography>
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
        <Typography sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>KDV FİŞİ DEĞİLDİR</Typography>
     </div>  
        <Container className="no-print" sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => { setIsPaymentSlipOpen(false) }}
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
            onClick={handlePrint}
            sx={{
              backgroundColor: 'green',
              color: 'white',
              '&:hover': {
                backgroundColor: 'darkgreen'
              },
              marginLeft: '10px',
              padding: '10px 20px',
              borderRadius: '10px'
            }}
          >
            Yazdır
          </Button>
        </Container>
        </Container>
      </Box>
     
      </>
  );
};
export default PaymentSlip;
