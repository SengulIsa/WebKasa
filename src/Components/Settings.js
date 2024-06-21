import React, { useState } from 'react';
import '../Styles/SettingsPage.css';
import { Button, Container, InputLabel, Link, Typography, FormControl, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LanguageIcon from '@mui/icons-material/Language';
import { useUser } from '../Context/UsersContext';
import TestPage from './TestPage';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useUser();
  const [isPrinterTestActive, setIsPrinterTestActive] = useState(false);
  const { t,i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.resolvedLanguage);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages = [
    { short: "tr", name: "Türkçe" },
    { short: "en", name: "English" },
  ];

  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    setLanguageDropdownOpen(false); // Close dropdown after selection
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      alert(t('Settings.themeDarkAlert'));
    } else {
      setTheme('light');
      alert(t('Settings.themeLightAlert'));
      
    }
  };

  const handlePrinterButton = () => {
    setIsPrinterTestActive(true);
  };

  return (
    <div style={{minHeight:'100vh',minWidth:'100vh'}}>
      <div className='settings-up' style={{ backgroundColor: theme === 'dark' ? 'black' : 'rgb(218, 236, 237)', color: theme === 'dark' ? 'white' : 'darkblue' }}>
        <Button onClick={() => navigate('/Home')}>
          <ArrowBackIosIcon className='back-icon' />
        </Button>
        <Typography sx={{ margin: '0 auto', order: 2, fontWeight: 'bold', fontSize: '24px' }}>
          {t('Settings.settings')}
        </Typography>
        <Button sx={{ order: 3, color: 'green' }} onClick={toggleLanguageDropdown}>
          <LanguageIcon fontSize='large' />
        </Button>
        {languageDropdownOpen && (
          <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "secondary.main", borderRadius: "3px", position: 'absolute', top: '50px', right: '10px' }} size="small">
            <Select
              value={language}
              onChange={handleChange}
              sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: "0" }, color: "white" }}
            >
              {languages.map((language, index) => (
                <MenuItem key={index} value={language.short} sx={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
                  <Typography>
                    {language.name}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </div>
      <div className='settings' style={{ backgroundColor: theme === 'dark' ? 'black' : 'rgb(218, 236, 237)' }}>
        <Container>
          <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <InputLabel
              sx={{
                border: '1px solid white',
                borderRadius: '20px',
                backgroundColor: 'darkblue',
                color: 'white', width: '40%',
                height: '20px', padding: '15px 30px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <TurnLeftIcon
                sx={{
                  border: '1px solid darkblue',
                  backgroundColor: 'darkblue',
                  borderRadius: '10px',
                  fontSize: '40px',
                  color: 'white'
                }} />
              <Link 
                sx={{
                  marginLeft: '20px',
                  fontSize: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white'
                }}>{t('Settings.ıngencioSet')}</Link>
            </InputLabel>
            <InputLabel
              sx={{
                border: '1px solid white',
                borderRadius: '20px',
                backgroundColor: 'green',
                color: 'white',
                width: '40%',
                height: '20px',
                padding: '15px 30px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <TurnRightIcon
                sx={{
                  border: '1px solid green',
                  backgroundColor: 'green',
                  borderRadius: '10px',
                  fontSize: '40px',
                  color: 'white'
                }} />
              <Link
                sx={{
                  marginLeft: '20px',
                  fontSize: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white'
                }}>{t('Settings.otherSet')}</Link>
            </InputLabel>
          </Container>
          <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <InputLabel
              sx={{
                border: '1px solid white',
                borderRadius: '20px',
                backgroundColor: 'green',
                color: 'white',
                width: '40%',
                height: '20px',
                padding: '15px 30px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <SaveAltIcon sx={{ border: '1px solid green', backgroundColor: 'green', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link
                sx={{
                  marginLeft: '20px',
                  fontSize: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white'
                }}>{t('Settings.transferAllSales')}</Link>
            </InputLabel>
            <InputLabel
              sx={{
                border: '1px solid white',
                borderRadius: '20px',
                backgroundColor: 'orange',
                color: 'white',
                width: '40%',
                height: '20px',
                padding: '15px 30px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <MonitorHeartIcon sx={{ border: '1px solid orange', backgroundColor: 'orange', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link onClick={handlePrinterButton}
                sx={{
                  marginLeft: '20px',
                  fontSize: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white'
                }}>{t('Settings.printerTest')}</Link>
            </InputLabel>
          </Container>
          <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <InputLabel
              sx={{
                border: '1px solid white',
                borderRadius: '20px',
                backgroundColor: 'green',
                color: 'white',
                width: '40%',
                height: '20px',
                padding: '15px 30px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <SaveAltIcon sx={{ border: '1px solid green', backgroundColor: 'green', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'white' }}>{t('Settings.reloadConf')}</Link>
            </InputLabel>
            <InputLabel
              sx={{
                border: '1px solid white',
                borderRadius: '20px',
                backgroundColor: 'darkblue',
                color: 'white',
                width: '40%',
                height: '20px',
                padding: '15px 30px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <MonitorHeartIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link onClick={changeTheme}
                sx={{
                  marginLeft: '20px',
                  fontSize: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white'
                }}>{t('Settings.changeTheme')}</Link>
            </InputLabel>
          </Container>
          <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <InputLabel
              sx={{
                border: '1px solid white',
                borderRadius: '20px',
                backgroundColor: 'darkblue',
                color: 'white',
                width: '40%',
                height: '20px',
                padding: '15px 30px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <SaveAltIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link
                sx={{
                  marginLeft: '20px',
                  fontSize: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white'
                }}>{t('Settings.scalesSet')}</Link>
            </InputLabel>
            <InputLabel
              sx={{
                border: '1px solid white',
                borderRadius: '20px',
                backgroundColor: 'darkblue',
                color: 'white',
                width: '40%',
                height: '20px',
                padding: '15px 30px',
                marginBottom: '40px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <SettingsIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link
                sx={{
                  marginLeft: '20px',
                  fontSize: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  color: 'white'
                }}>{t('Settings.operations')}</Link>
            </InputLabel>
          </Container>
        </Container>
        {isPrinterTestActive ? (
          <TestPage setIsPrinterTestActive={setIsPrinterTestActive} />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Settings;
