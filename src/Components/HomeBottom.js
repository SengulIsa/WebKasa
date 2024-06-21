// import React from 'react';
// import '../Styles/HomePage.css';
// import { Container, Typography, Button } from '@mui/material';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../Context/UsersContext';
// import { useTranslation } from "react-i18next";



// const HomeBottom = () => {
//   const navigate = useNavigate();
//   const{theme}= useUser();
//   const {t}= useTranslation();


//   const logout = () => {
//     // Oturum verilerini temizle
//     localStorage.removeItem('Username');
//     // Giriş ekranına yönlendir
//     navigate('/');
//   };

//   return (
//     <div className='homeBottom' style={{backgroundColor:theme==='dark'? 'black':'rgb(218, 236, 237)'}}>
//       <Container maxWidth={false} sx={{display:'flex',flexDirection:'row',justifyContent:'space-between', width:'100%'}}>
//         <Typography sx={{paddingTop:'75px',color:theme==='dark'?'white': 'black'}}><FiberManualRecordIcon sx={{color:'green',fontSize:'small'}}/>{t('Home.marketOn')}</Typography>
//         <Button
//           variant="contained"
//           style={{ margin: '8px',backgroundColor:'red',border:'1px solid red',borderRadius:'10px',height:'50px',marginTop:'60px' }}
//           startIcon={<ExitToAppIcon />}
//           onClick={logout}
//         >
//           {t('Home.logout')}
//         </Button>
//       </Container>
//     </div>
//   );
// };

// export default HomeBottom;
import React from 'react';
import '../Styles/HomePage.css';
import { Container, Typography, Button, Modal, Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UsersContext';
import { useTranslation } from "react-i18next";

const HomeBottom = () => {
  const navigate = useNavigate();
  const { theme, isMarketOnline } = useUser();
  const { t } = useTranslation();

  const logout = () => {
    // Oturum verilerini temizle
    localStorage.removeItem('Username');
    // Giriş ekranına yönlendir
    navigate('/');
  };

  return (
    <div className='homeBottom' style={{ backgroundColor: theme === 'dark' ? 'black' : 'rgb(218, 236, 237)' }}>
      <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Typography sx={{ paddingTop: '75px', color: theme === 'dark' ? 'white' : 'black' }}>
          <FiberManualRecordIcon sx={{ color: isMarketOnline ? 'green' : 'red', fontSize: 'small' }} />
          {isMarketOnline ? t('Home.marketOn') : t('Home.marketOff')}
        </Typography>
        <Button
          variant="contained"
          style={{ margin: '8px', backgroundColor: 'red', border: '1px solid red', borderRadius: '10px', height: '50px', marginTop: '60px' }}
          startIcon={<ExitToAppIcon />}
          onClick={logout}
        >
          {t('Home.logout')}
        </Button>
      </Container>

      <Modal
        open={!isMarketOnline}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          textAlign: 'center'
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t('Home.marketOffTitle')}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t('Home.marketOffMessage')}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default HomeBottom;

