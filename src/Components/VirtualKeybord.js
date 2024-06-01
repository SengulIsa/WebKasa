import React from 'react';
import '../Styles/VirtualKeybord.css'; // Klavye stillerini buraya ekleyebilirsiniz
import { Button } from '@mui/material';

const keys0 = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0','?','*','-'
]
const keys1 = [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P','Ğ','Ü',
]
const keys2 = [
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L','Ş','İ',';',',',
]
const keys3 = [
  'Z', 'X', 'C', 'V', 'B', 'N', 'M','Ö','Ç','_','.',':',
]
const keys4 = [
  ' ','@','/',
]
const keys5 = [
  '<','>', 'Geri','Sil','Vazgeç','Giriş',
]


const VirtualKeyboard = ({ onKeyPress }) => {
  return (
    <div className="virtual-keyboard">
     <div>
     {keys0.map(key => (
        <Button  key={key} onClick={() => onKeyPress(key)}>
          {key}
        </Button>
      ))}
     </div>
      
     <div>
     {keys1.map(key => (
        <Button  key={key} onClick={() => onKeyPress(key)}>
          {key}
        </Button>
      ))}
     </div>
     <div>
     {keys2.map(key => (
        <Button key={key} onClick={() => onKeyPress(key)}>
          {key}
        </Button>
      ))}
     </div>
     <div>
     {keys3.map(key => (
        <Button key={key} onClick={() => onKeyPress(key)}>
          {key}
        </Button>
      ))}
     </div>
     <div>
     {keys4.map(key => (
        <Button  key={key} onClick={() => onKeyPress(key)}>
          {key}
        </Button>
      ))}
     </div>
     <div>
     {keys5.map(key => (
        <Button  key={key} onClick={() => onKeyPress(key)}>
          {key}
        </Button>
      ))}
     </div>
    </div>
  );
};

export default VirtualKeyboard;
