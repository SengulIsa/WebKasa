import React from 'react';
import '../Styles/VirtualKeybord.css'; // Klavye stillerini buraya ekleyebilirsiniz
import { Button } from '@mui/material';

const keys0 = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];
const keys1 = [
   'temizle','Sil','Vazgeç','Giriş',
]



const ProductsVirtualKeybord = ({ onKeyPress }) => {
  return (
    <div className="product-virtual-keyboard">
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
     
    </div>
  );
};

export default ProductsVirtualKeybord;
