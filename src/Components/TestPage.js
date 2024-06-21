import React, { useRef, useState } from 'react';
import { Button, Container, Box, Typography, Backdrop, CircularProgress } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import { useTranslation } from 'react-i18next';

const TestPage = ({ setIsPrinterTestActive }) => {
  const componentRef = useRef();
  const { t } = useTranslation();
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'TestPage',
    onBeforeGetContent: () => setIsPrinting(true),
    onAfterPrint: () => {
      setIsPrinting(false);
    },
    onPrintError: () => {
      setIsPrinting(false);
      alert('Yazdırma işlemi sırasında bir hata oluştu.');
    }
  });

  return (
    <>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 650, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Container>
          <div ref={componentRef}>
            <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
              {t('Settings.testPage')}
            </Typography>
          </div>
          <Container sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={() => { setIsPrinterTestActive(false) }}
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
          {t('Order.processing')}
        </Typography>
      </Backdrop>
    </>
  );
};

export default TestPage;
