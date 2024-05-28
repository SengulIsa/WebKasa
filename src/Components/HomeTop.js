import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useUser } from '../Context/UsersContext';
import Logo from '../Images/32-bit.png';
import '../Styles/HomePage.css';
import axios from 'axios';

const HomeTop = () => {
  const { usercode, fetchCaseInfo, caseIp, caseNumber, version, username, setUsername } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        const user = response.data.find(user => user.userCode === usercode);
        if (user) {
          setUsername(user.name);
          localStorage.setItem('Username', user.name); // Kullanıcı adını localStorage'a kaydet
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
    fetchCaseInfo();
  }, [usercode, setUsername, fetchCaseInfo]);

  useEffect(() => {
    const storedUsername = localStorage.getItem('Username');
    if (storedUsername) {
      setUsername(storedUsername); // localStorage'dan kullanıcı adını yükle
    }
  }, [setUsername]);

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className='homeTop'>
      <Container
        sx={{
          backgroundColor: 'white',
          width: '50%',
          maxWidth: '500px',
          height: '120px',
          borderRadius: '20px',
          marginTop: '10px',
          marginLeft: 'auto',
          marginRight: 'auto',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        <Typography>Mağaza No:1057(Mobile Demo)</Typography>
        <Typography>Kasa No:Kasa {caseNumber}</Typography>
        <Typography>Personel Adı:{username}</Typography>
        <Typography>Kasa İp No:{caseIp}</Typography>
        <Typography>Versiyon:{version}</Typography>
      </Container>
      <Container
        sx={{
          width: '30%',
          maxWidth: '500px',
          height: '150px',
          marginTop: '100px',
          marginLeft: '300px',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        <img src={Logo} alt='#' className='logoImage' style={{ maxWidth: '100%', height: 'auto' }} />
      </Container>
      <Container
        sx={{
          textAlign: 'center',
        }}
      >
        <button
          onClick={handleClick}
          style={{
            backgroundColor: 'white',
            border: '1px solid white',
            borderRadius: '100px',
            marginTop: '20px',
            marginLeft: '400px',
          }}
        >
          <SettingsRoundedIcon sx={{ padding: '5px', fontSize: '30px' }} />
        </button>
      </Container>
    </div>
  );
};

export default HomeTop;
