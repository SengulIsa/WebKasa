import React from 'react';
import '../Styles/VirtualKeybord.css'; // Klavye stillerini buraya ekleyebilirsiniz
import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const keyboardLayouts = {
  tr: {
    keys0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '?', '*', '-'],
    keys1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü'],
    keys2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ', ';', ','],
    keys3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç', '_', '.', ':'],
    keys4: ['BOŞLUK', '@', '/'],
    keys5: ['<', '>', 'Geri', 'Sil', 'Vazgeç', 'Giriş', 'EN'],
  },
  en: {
    keys0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '?', '*', '-'],
    keys1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
    keys2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '\\'],
    keys3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '`'],
    keys4: ['SPACE', '@', '/'],
    keys5: ['<', '>', 'Back', 'Del', 'Cancel', 'Enter', 'TR'],
  },
};

const MailVirtualKeybord = ({ onKeyPress }) => {
  const { i18n } = useTranslation();
  const language = i18n.language === 'tr' ? 'tr' : 'en';

  const toggleLanguage = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  };

  const { keys0, keys1, keys2, keys3, keys4, keys5 } = keyboardLayouts[language];

  return (
    <Box className="virtual-keyboard" sx={{width:'1200px'}}>
      <div>
        {keys0.map((key) => (
          <Button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </Button>
        ))}
      </div>
      <div>
        {keys1.map((key) => (
          <Button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </Button>
        ))}
      </div>
      <div>
        {keys2.map((key) => (
          <Button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </Button>
        ))}
      </div>
      <div>
        {keys3.map((key) => (
          <Button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </Button>
        ))}
      </div>
      <div>
        {keys4.map((key) => (
          <Button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </Button>
        ))}
      </div>
      <div>
        {keys5.map((key) =>
          key === 'EN' || key === 'TR' ? (
            <Button key={key} onClick={toggleLanguage}>
              {key}
            </Button>
          ) : (
            <Button key={key} onClick={() => onKeyPress(key)}>
              {key}
            </Button>
          )
        )}
      </div>
    </Box>
  );
};

export default MailVirtualKeybord;
