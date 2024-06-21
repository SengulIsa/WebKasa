import React from 'react';
import '../Styles/VirtualKeybord.css'; // Klavye stillerini buraya ekleyebilirsiniz
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const keyboardLayouts = {
  tr: {
    keys0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    keys1: ['temizle', 'Sil', 'Vazgeç', 'Giriş', 'EN'],
  },
  en: {
    keys0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    keys1: ['clear', 'Del', 'Cancel', 'Enter', 'TR'],
  },
};

const ProductsVirtualKeyboard = ({ onKeyPress }) => {
  const { i18n } = useTranslation();
  const language = i18n.language === 'tr' ? 'tr' : 'en';

  const toggleLanguage = () => {
    const newLanguage = language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  };

  const { keys0, keys1 } = keyboardLayouts[language];

  return (
    <div className="product-virtual-keyboard">
      <div>
        {keys0.map((key) => (
          <Button key={key} onClick={() => onKeyPress(key)}>
            {key}
          </Button>
        ))}
      </div>
      <div>
        {keys1.map((key) =>
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
    </div>
  );
};

export default ProductsVirtualKeyboard;
