import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography, Grid, Backdrop, CircularProgress } from '@mui/material';
import { usePaymentInfo } from '../Context/PaymentContext';
import { useProductCode } from '../Context/ProductContext';
import { useReactToPrint } from 'react-to-print';
import '../Styles/PaymentPage.css';
import { useTranslation } from 'react-i18next';

const PaymentSlip = () => {
  const { setIsPaymentSlipOpen, paymentCount, receivedMoney, change, paymentType } = usePaymentInfo();
  const { ProductName, ProductPrice, Amounts } = useProductCode();
  const { t } = useTranslation();
  const [isPrinting, setIsPrinting] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'pymnt-data' + { paymentCount },
    onBeforeGetContent: () => setIsPrinting(true),
    onAfterPrint: () => {
      setIsPrinting(false);
      setIsPaymentSlipOpen(false);
    },
    onPrintError: () => {
      setIsPrinting(false);
      alert(t('Order.printError'));
    }
  });

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  const formattedPaymentType = paymentType.join(' - '); // PaymentType değerlerini birleştir
  const cashier = localStorage.getItem('Username');

  return (
    <>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 650, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Container className='slip-products'>
          <div ref={componentRef}>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ marginBottom: '5px' }}>{t('Order.examplebusiness')}</Typography>
              <Typography>DEMİRCİKARA {t('Order.neighbourhood')} 1431. {t('Order.street')} NO:12</Typography>
              <Typography>0242 311 41 21</Typography>
              <Typography>ANTALYA</Typography>
            </Container>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '40px' }}>
              <Container>
                <Typography>{t('Order.gate')}:{formattedDate}</Typography>
                <Typography>{t('Order.salesNo')}:{paymentCount}</Typography>
                <Typography>{t('Order.cashier')}:{cashier}</Typography>
              </Container>
              <Container>
                <Typography>{t('Order.clock')}:{formattedTime}</Typography>
                <Typography sx={{ fontSize: '15px' }}>{t('Home.order')}:{formattedPaymentType}</Typography>
              </Container>
            </Container>
            <hr style={{ border: 'none', height: '1px', backgroundColor: 'black' }} />
            <Container>
              {ProductPrice.map((price, index) => (
                <Grid key={index} >
                  <Container
                    sx={{
                      backgroundColor: 'white',
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
                      <Typography>{Amounts[index]} {t('Order.piece')}</Typography>
                      <Typography>*{(price * Amounts[index]).toFixed(2)} {t('Order.lira')}</Typography>
                    </Typography>
                  </Container>
                  <hr />
                </Grid>
              ))}
            </Container>
            <hr style={{ border: 'none', height: '1px', backgroundColor: 'black' }} />
            <Container>
              <Typography>
                <span>{t('Order.receivedMoney')}:</span>
                <span style={{ float: 'right' }}>*{parseFloat(receivedMoney).toFixed(2)} {t('Order.lira')}</span>
              </Typography>
              <Typography>
                <span>{t('Order.change')}:</span>
                <span style={{ float: 'right' }}>*{parseFloat(change).toFixed(2)} {t('Order.lira')}</span>
                <hr style={{ border: 'none', height: '1px', backgroundColor: 'black' }} />
                <span>{t('Order.generalTotal')}:</span>
                <span style={{ float: 'right' }}>*{(receivedMoney - change).toFixed(2)} {t('Order.lira')}</span>
              </Typography>
            </Container>
            <Typography sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>{t('Order.noKDVSlip')}</Typography>
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
              {t('Order.close')}
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
              {t('Order.print')}
            </Button>
          </Container>
        </Container>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isPrinting}
      >
        <CircularProgress color="inherit" />
        <Typography variant="h6" sx={{ ml: 2 }}>
          {t('Order.processing')}...
        </Typography>
      </Backdrop>
    </>
  );
};

export default PaymentSlip;
