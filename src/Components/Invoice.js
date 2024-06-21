// import React, {  useState } from 'react';
// import { Box, Button, Container, Typography, TextField,Grid } from '@mui/material';
// import { usePaymentInfo } from '../Context/PaymentContext';
// import { useProductCode } from '../Context/ProductContext';
// import '../Styles/PaymentPage.css';
// import {useTranslation} from 'react-i18next'

// const Invoice = ({ setOpenInvoice }) => {
//   const { paymentCount, receivedMoney, change, paymentType } = usePaymentInfo();
//   const{ProductName,ProductPrice,Amounts}= useProductCode();
//   const [email, setEmail] = useState('');
//   const [isEmailValid, setIsEmailValid] = useState(false);
//   const currentDate = new Date();
//   const formattedDate = currentDate.toLocaleDateString();
//   const formattedTime = currentDate.toLocaleTimeString();
//   const formattedPaymentType = paymentType.join(' - ');
//   const cashier = localStorage.getItem('Username');
//   const {t}=useTranslation();

//   const handleEmailChange = (e) => {
//     const emailValue = e.target.value;
//     setEmail(emailValue);
//     setIsEmailValid(validateEmail(emailValue));
//   };

//   const validateEmail = (email) => {
//     // Basit bir email doğrulama regex'i
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleSendEmail = () => {
//     if (isEmailValid) {
//       alert(t('Order.sentSuccess'));
//       setOpenInvoice(false);
//     } else {
//       alert(t('Order.wrongMail'));
//     }
//   };

//   return (
//     <div >
//       <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 700, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//     <Container className='slip-products'>
//     <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
//           <TextField 
//             label={t('Order.eMailAddress')}
//             variant="outlined" 
//             value={email}
//             onChange={handleEmailChange}
//             sx={{ marginBottom: '20px', width: '100%' }}
//             error={!isEmailValid && email !== ''}
//             helperText={!isEmailValid && email !== '' ? t('Order.wrongMail') : ''}
//           />
//           <Container className="no-print" sx={{ display: 'flex', justifyContent: 'center' }}>
//           <Button
//             onClick={() => { setOpenInvoice(false) }}
//             sx={{
//               backgroundColor: 'gray',
//               color: 'white',
//               '&:hover': {
//                 backgroundColor: 'darkgray'
//               },
//               marginRight: '10px',
//               padding: '10px 20px',
//               borderRadius: '10px'
//             }}
//           >
//             {t('Order.close')}
//           </Button>
//             <Button
//               onClick={handleSendEmail}
//               disabled={!isEmailValid}
//               sx={{
//                 backgroundColor: isEmailValid ? 'green' : 'lightgray',
//                 color: 'white',
//                 '&:hover': {
//                   backgroundColor: isEmailValid ? 'darkgreen' : 'gray'
//                 },
//                 marginLeft: '10px',
//                 padding: '10px 20px',
//                 borderRadius: '10px'
//               }}
//             >
//               {t('Order.send')}
//             </Button>
//           </Container>
//         </Container>
//         <hr/>
//       <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <Typography sx={{ marginBottom: '5px' }}>{t('Order.examplebusiness')}</Typography>
//           <Typography>DEMİRCİKARA {t('Order.neighbourhood')} 1431. {t('Order.street')} NO:12</Typography>
//           <Typography>0242 311 41 21</Typography>
//           <Typography>ANTALYA</Typography>
//         </Container>
//         <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '40px' }}>
//           <Container>
//           <Typography>{t('Order.gate')}:{formattedDate}</Typography>
//             <Typography>{t('Order.salesNo')}:{paymentCount}</Typography>
//             <Typography>{t('Order.cashier')}:{cashier}</Typography>
//           </Container>
//           <Container>
//           <Typography>{t('Order.clock')}:{formattedTime}</Typography>
//           <Typography sx={{fontSize:'15px'}}>{t('Home.order')}:{formattedPaymentType}</Typography>
//           </Container>
//         </Container>
//         <hr style={{border: 'none',height: '1px',backgroundColor: 'black'}}/>
//         <Container>
//         {ProductPrice.map((price, index) => (
//         <Grid key={index} >
//           <Container
//             sx={{
//               backgroundColor:  'white',
//               marginBottom: '5px',
//               marginTop: '5px',
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}
//           >
//             <Typography>
//             <Typography>{ProductName[index]}<Typography>KDV %1</Typography></Typography>
//             </Typography>
//             <Typography>
//               <Typography>{Amounts[index]} {t('Order.piece')}</Typography>
//               <Typography>*{(price * Amounts[index]).toFixed(2)} {t('Order.lira')}</Typography>
//             </Typography>
//           </Container>
//           <hr />
//         </Grid>
//       ))}
//         </Container>
//         <hr style={{border: 'none',height: '1px',backgroundColor: 'black'}}/>
//         <Container>
//         <Typography>
//             <span>{t('Order.receivedMoney')}:</span>
//             <span style={{ float: 'right' }}>*{parseFloat(receivedMoney).toFixed(2)} {t('Order.lira')}</span>
//           </Typography>
//           <Typography>
//             <span>{t('Order.change')}:</span>
//             <span style={{ float: 'right' }}>*{parseFloat(change).toFixed(2)} {t('Order.lira')}</span>
//             <hr style={{border: 'none',height: '1px',backgroundColor: 'black'}}/>
//             <span>{t('Order.generalTotal')}:</span>
//             <span style={{ float: 'right' }}>*{(receivedMoney - change).toFixed(2)} {t('Order.lira')}</span>
//           </Typography>
//         </Container>
//         <Typography sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>{t('Order.noKDVSlip')}</Typography>
       
//         </Container>
//       </Box>
//     </div>
//   );
// };

// export default Invoice;
import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField, Grid } from '@mui/material';
import { usePaymentInfo } from '../Context/PaymentContext';
import { useProductCode } from '../Context/ProductContext';
import '../Styles/PaymentPage.css';
import { useTranslation } from 'react-i18next';
import MailVirtualKeybord from './MailVirtualKeybord'; // Sanal klavye bileşenini içe aktar
import { useUser } from '../Context/UsersContext';


const Invoice = ({ setOpenInvoice }) => {
  const { paymentCount, receivedMoney, change, paymentType } = usePaymentInfo();
  const { ProductName, ProductPrice, Amounts } = useProductCode();
  const {activeInput,setActiveInput,setShowKeyboard,showKeyboard}=useUser();
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false); 
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();
  const formattedPaymentType = paymentType.join(' - ');
  const cashier = localStorage.getItem('Username');
  const { t } = useTranslation();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSendEmail = () => {
    if (isEmailValid) {
      alert(t('Order.sentSuccess'));
      setOpenInvoice(false);
    } else {
      alert(t('Order.wrongMail'));
    }
  };

  const handleKeyPress = (key) => {
    if (key === 'Sil' || key==='Del') {
      // Geri tuşuna basıldıysa
     setEmail(email.slice(0,-1));
    } else if (key === 'Giriş' || key==='Enter') {
      setShowKeyboard(false); // Giriş tuşuna basıldığında klavyeyi kapat
    }
    else if(key ==='Vazgeç'|| key==='Cancel'){
      setShowKeyboard(false);
    }
    else {
     setEmail(email+ key);
    }
  };
  return (
    <div>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 700, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <Container className='slip-products'>
          <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
           <Typography sx={{marginBottom:'5px'}}>E-POSTA GİRİNİZ</Typography>
            <TextField
              label={t('Order.eMailAddress')}
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              onClick={() => setShowKeyboard(true)} // Tıklanınca klavye açılır
              sx={{ marginBottom: '20px', width: '100%' }}
              error={!isEmailValid && email !== ''}
              helperText={!isEmailValid && email !== '' ? t('Order.wrongMail') : ''}
              onFocus={() => { setActiveInput('mail'); setShowKeyboard(true); }}
            />
            {showKeyboard && (
              <MailVirtualKeybord  onKeyPress={handleKeyPress} />
            )}
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
                {t('Order.close')}
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
                {t('Order.send')}
              </Button>
            </Container>
          </Container>
          <hr style={{ border: 'none', height: '1px', backgroundColor: 'black' }} />
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
        </Container>
      </Box>
    </div>
  );
};

export default Invoice;

