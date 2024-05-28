import React, { useState } from 'react';
import { Button, Container, Input, InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Box from '@mui/material/Box';
import { useProductCode } from '../Context/ProductContext';
import { usePaymentInfo } from '../Context/PaymentContext';
import PaymentSlip from './PaymentSlip';

const PaymentCalculator = () => {
  const [value1, setValue1] = useState('');
  const [IsCardClicked, setIsCardClicked] = useState(false);
  const [totalCashPayment, setTotalCashPayment] = useState(0.00);
  const { totalValue, setIsEmpty,IsEmpty, setProductName, setProductPrice, setAmounts, setTotalValue,ProductName,selectedProductIndex,setSelectedProductIndex,IsSelected,setIsSelected } = useProductCode();
  const { isPaymentSlipOpen, setIsPaymentSlipOpen, paymentCount, setPaymentCount, setReceivedMoney, change, setChange, setPaymentType,paymentType} = usePaymentInfo();

  const handleCashPayment = () => {
    if(IsEmpty){
      alert('Sepetinizde Ürün Yok Lütfen Ürün Ekleyin');
    }
    else{
      const cashPayment = parseFloat(value1) || 0;
    const newTotalCashPayment = totalCashPayment + cashPayment;
    const remainingPayment = totalValue - newTotalCashPayment;
    const calculatedChange = remainingPayment < 0 ? Math.abs(remainingPayment) : 0;
    setTotalCashPayment(newTotalCashPayment);
    setChange(calculatedChange);
    setValue1('');
    setReceivedMoney(value1);
    setPaymentType([...paymentType,'NAKİT']); // Set payment type to 'nakit'

    }
    
  };

  const handleCardPayment = () => {
    if(IsEmpty){
      alert('Sepetinizde Ürün Yok Lütfen Ürün Ekleyin');
    }
    else{
      const remainingPayment = totalValue - totalCashPayment;
      setValue1(remainingPayment.toFixed(2));
      setChange(0.00);
      setIsCardClicked(true);
      setTotalCashPayment(totalValue);
      setReceivedMoney(totalValue);
      setPaymentType([...paymentType,'KREDİ KARTI']); // Set payment type to 'kredi kartı'
    }
   
  };

  const remainingPayment = totalValue - totalCashPayment;
  var displayRemainingPayment = remainingPayment > 0 ? remainingPayment : 0;

  const handleClearIconClick = () => {
    setValue1('');
    setChange(0.00);
    setTotalCashPayment(0.00);
    setIsCardClicked(false);
    setPaymentType([]); 
  };

  const openPaymentSlip = () => {
     setIsPaymentSlipOpen(true);
    setPaymentCount(paymentCount + 1);
   
  };

  const DocumentCancel = () => {
    setIsEmpty(true);
    setProductName([]);
    setProductPrice([]);
    setAmounts([]);
    setTotalValue(0);
    setPaymentType([]); // Clear payment type array
    setReceivedMoney(0.00);
  };
  const removeSelectedProduct = () => {
    if (IsSelected) {
        if (selectedProductIndex !== null && selectedProductIndex < ProductName.length) {
            setProductName(prevNames => prevNames.filter((_, index) => index !== selectedProductIndex));
            setProductPrice(prevPrices => prevPrices.filter((_, index) => index !== selectedProductIndex));
            setAmounts(prevAmounts => prevAmounts.filter((_, index) => index !== selectedProductIndex));
            setSelectedProductIndex(null);
            setIsSelected(false);

            // Eğer tüm ürünler silindiyse, DocumentCancel fonksiyonunu çağır
            if (ProductName.length === 1) {
                DocumentCancel();
            }
        } else if (selectedProductIndex === 0 && ProductName.length === 1) {
            DocumentCancel();
        }
    } else {
        alert("Lütfen İptal edilecek satırı seçiniz");
    }
};

  return (
    <div className='PaymentCmpnts'>
      <Container sx={{ marginTop: '10px' }}>
        <Button
          onClick={() => DocumentCancel()}
          sx={{ border: '1px solid red', borderRadius: '20px', backgroundColor: 'red', color: 'white', width: '45%', height: '60px', marginRight: '5px', fontFamily: 'inherit', fontSize: '15px' }}>
          BELGE İPTAL
        </Button>
        <Button
          disabled={displayRemainingPayment !== 0 || IsEmpty}
          onClick={openPaymentSlip}
          sx={{
            border: displayRemainingPayment === 0 && !IsEmpty ? '1px solid green' : '1px solid orange',
            borderRadius: '20px',
            backgroundColor: displayRemainingPayment === 0 && !IsEmpty ? 'green' : 'orange',
            color: 'white',
            width: '45%',
            height: '60px',
            marginRight: '5px',
            fontFamily: 'inherit',
            fontSize: '15px'
          }}
        >
          BELGE BİTİR
        </Button>
      </Container>
      <Container sx={{ marginTop: '5px' }}>
        <Button onClick={removeSelectedProduct}
          sx={{ border: '1px solid red', borderRadius: '20px', backgroundColor: 'red', color: 'white', width: '45%', height: '60px', marginRight: '5px', fontFamily: 'inherit', fontSize: '15px' }}>
          SİL
        </Button>
      </Container>
      <Container sx={{ marginTop: '5px' }}>
        <Input
          disableUnderline
          placeholder='0'
          value={value1}
          onChange={(e) => { setValue1(e.target.value) }}
          sx={{ width: '100%', height: '60px', border: '1px solid gray', borderRadius: '15px', backgroundColor: 'white', padding: '10px' }}
          endAdornment={
            <InputAdornment position="end">
              <Button onClick={handleClearIconClick}><ClearIcon sx={{ marginRight: '20px', color: 'black', fontSize: '40px' }} /></Button>
            </InputAdornment>
          }
        ></Input>
      </Container>
      <Container sx={{ marginTop: '5px' }}>
        <Button
          onClick={e => setValue1(value1 + e.target.value)}
          sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '30%', height: '50px', marginRight: '5px', fontFamily: 'inherit', fontSize: '25px' }}
          value={'00'}>00</Button>
        <Button
          onClick={e => setValue1(value1 + e.target.value)}
          sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '30%', height: '50px', marginRight: '5px', fontFamily: 'inherit', fontSize: '25px' }}
          value={'000'}>000</Button>
        <Button
          onClick={e => setValue1(value1.slice(0, -1))}
          sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '35%', height: '50px', fontFamily: 'inherit', fontSize: '25px' }}>
          <BackspaceIcon fontSize='large' />
        </Button>
      </Container>
      <Container sx={{ marginTop: '5px', display: 'flex', flexDirection: 'row' }}>
        <div>
          <div>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '90px', height: '50px', marginRight: '5px', fontFamily: 'inherit', fontSize: '25px' }}
              value={'7'}>7</Button>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '90px', height: '50px', fontFamily: 'inherit', fontSize: '25px', marginRight: '5px' }}
              value={'8'}>8</Button>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '95px', height: '50px', fontFamily: 'inherit', fontSize: '25px' }}
              value={'9'}>9</Button>
          </div>
          <div style={{ marginTop: '5px' }}>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '90px', height: '50px', marginRight: '5px', fontFamily: 'inherit', fontSize: '25px' }}
              value={'4'}>4</Button>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '90px', height: '50px', fontFamily: 'inherit', fontSize: '25px', marginRight: '5px' }}
              value={'5'}>5</Button>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '95px', height: '50px', fontFamily: 'inherit', fontSize: '25px' }}
              value={'6'}>6</Button>
          </div>
        </div>
        <div>
          <Button
            sx={{ border: '1px solid green', borderRadius: '20px', backgroundColor: 'green', color: 'white', width: '160px', height: '105px', marginLeft: '10px', fontFamily: 'inherit', fontSize: '15px' }}
            onClick={handleCardPayment}>KREDİ KARTI</Button>
        </div>
      </Container>
      <Container sx={{ marginTop: '5px', display: 'flex', flexDirection: 'row' }}>
        <div>
          <div>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '90px', height: '50px', marginRight: '5px', fontFamily: 'inherit', fontSize: '25px' }}
              value={'1'}>1</Button>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '90px', height: '50px', fontFamily: 'inherit', fontSize: '25px', marginRight: '5px' }}
              value={'2'}>2</Button>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '95px', height: '50px', fontFamily: 'inherit', fontSize: '25px' }}
              value={'3'}>3</Button>
          </div>
          <div style={{ marginTop: '5px' }}>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '185px', height: '50px', marginRight: '5px', fontFamily: 'inherit', fontSize: '25px' }}
              value={'0'}>0</Button>
            <Button
              onClick={e => setValue1(value1 + e.target.value)}
              sx={{ border: '1px solid darkblue', borderRadius: '20px', backgroundColor: 'darkblue', color: 'white', width: '95px', height: '50px', fontFamily: 'inherit', fontSize: '25px', marginRight: '5px' }}
              value={'.'}>.</Button>
          </div>
        </div>
        <div>
          <Button
            sx={{ border: '1px solid green', borderRadius: '20px', backgroundColor: 'green', color: 'white', width: '160px', height: '105px', marginLeft: '5px', fontFamily: 'inherit', fontSize: '15px' }}
            onClick={handleCashPayment}>NAKİT</Button>
        </div>
      </Container>
      <Container sx={{ marginTop: '10px' }}>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', backgroundColor: 'yellow', color: 'black' }}>
          PARA ÜSTÜ :{change.toFixed(2)} TL
        </Box>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', backgroundColor: 'yellow', color: 'black' }}>
          KALAN ÖDEME :{IsCardClicked ? '0.00' : displayRemainingPayment.toFixed(2)} TL
        </Box>
      </Container>
      {isPaymentSlipOpen ? (
        <PaymentSlip />
      ) : (
        <></>
      )}
    </div>
  )
}

export default PaymentCalculator;
