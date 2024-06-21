import React from 'react';
import '../Styles/OrderPage.css';
import { Container, Button, Input,InputAdornment,Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useState } from 'react';
import { useProductCode } from '../Context/ProductContext';
import CampaignModal from './Campaign';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UsersContext';
import {useTranslation} from 'react-i18next'


const Calculator = () => {
   const [value, setValue] = useState('');
   const [carBagAmount, setCarBagAmount] = useState(0);
   const [isCampaignModalOpen, setCampaignModalOpen] = useState(false);
  const navigate = useNavigate();
   const { setAmounts,setIsEmpty,setTotalValue,totalValue,setProductPrice,setProductName,setIsEntryClicked,ProductName,selectedProductIndex,setSelectedProductIndex,IsSelected,setIsSelected} = useProductCode();
  const {theme}=useUser();
  const {t}=useTranslation();
   const handleGirisClick = () => {
    if (value === '0') {
      alert(t('Order.amountAlert'));
      setValue('');
    } else {
      setIsEntryClicked(true);
      setAmounts(prevAmounts => [...prevAmounts, value]);
      setValue('');
    }
  };
  
   const DocumentCancel =()=>{
      setIsEmpty(true);
      setProductName([]);
      setProductPrice([]);
      setAmounts([]);
      setTotalValue(0); 
   }
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
        alert(t('Order.chooseRow'));
    }
};
const applyCampaign = async (campaign) => {
  if (!IsSelected || selectedProductIndex === null || selectedProductIndex >= ProductName.length) {
    alert(t('Order.chooseCampaignProduct'));
    return;
  }

  if (campaign === '20off') {
    try {
      const response = await axios.get('http://localhost:3003/home&clean');
      const cleanProductNames = response.data.map(product => product.name);

      if (!cleanProductNames.includes(ProductName[selectedProductIndex])) {
        alert(t('Order.notCleanProduct'));
        return;
      }

      setProductPrice(prevPrices =>
        prevPrices.map((price, index) =>
          index === selectedProductIndex ? price * 0.8 : price
        )
      );
    } catch (error) {
      console.error('Temizlik ürünleri indirimi uygulanırken hata oluştu:', error);
    }
  } else if (campaign === '10off') {
    try {
      const response = await axios.get('http://localhost:3003/clothing&accessory');
      const clothingProductNames = response.data.map(product => product.name);

      if (!clothingProductNames.includes(ProductName[selectedProductIndex])) {
        alert(t('Order.notClothesProduct'));
        return;
      }

      setProductPrice(prevPrices =>
        prevPrices.map((price, index) =>
          index === selectedProductIndex ? price * 0.9 : price
        )
      );
    } catch (error) {
      console.error('Giyim Aksesuar ürünleri indirimi uygulanırken hata oluştu:', error);
    }
  }

  setCampaignModalOpen(false);
};
const AddCarrierBag=()=>{
  setTotalValue(totalValue+ 0.25);
  setCarBagAmount(carBagAmount+1);
}
const DeleteCarrierBag=()=>{
  setTotalValue(totalValue- 0.25);
  setCarBagAmount(carBagAmount-1);
}



  return (
    <div className='orderComponent' style={{backgroundColor:theme==='dark'?'black':'rgb(218, 236, 237)'}}>
      <Container sx={{marginTop:'10px'}}>
        <Button sx={{border:'1px solid blue', borderRadius:'20px',backgroundColor:'blue',color:'white',width:{ xs: '100%', sm: '35%' },height:'40px',marginRight:'10px',fontFamily:'inherit',fontSize:'15px'}} >{t('Order.searchByName')}</Button>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:{ xs: '100%', sm: '30%' },height:'40px',marginRight:'10px',fontFamily:'inherit',fontSize:'15px'}}  >{t('Order.dealer')}</Button>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:{ xs: '100%', sm: '30%' },height:'40px',fontFamily:'inherit',fontSize:'15px'}}  >{t('Order.a101lets')}</Button>
      </Container >
      <Container sx={{marginTop:'5px'}}>
      <Button sx={{border:'1px solid blue', borderRadius:'20px',backgroundColor:'blue',color:'white',width:{ xs: '100%', sm: '50%' },height:'40px',fontFamily:'inherit',fontSize:'15px'}}  >{t('Order.installment')}</Button>
      </Container>
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={()=>{DocumentCancel()}} sx={{border:'1px solid red', borderRadius:'20px',backgroundColor:'red',color:'white',width:{ xs: '100%', sm: '30%' },height:'40px',marginRight:'10px',fontFamily:'inherit',fontSize:'15px'}}  >{t('Order.documentCancel')}</Button>
        <Button onClick={()=>{removeSelectedProduct();}} sx={{border:'1px solid red', borderRadius:'20px',backgroundColor:'red',color:'white',width:{ xs: '100%', sm: '30%' },height:'40px',fontFamily:'inherit',fontSize:'15px'}}  >{t('Order.rowCancel')}</Button>
        <Button sx={{border:'1px solid blue', borderRadius:'20px',backgroundColor:'blue',color:'white',width:{ xs: '100%', sm: '35%' },height:'40px',marginLeft:'10px',fontFamily:'inherit',fontSize:'15px'}} >{t('Order.installment')}</Button>
      </Container >
      <Container sx={{marginTop:'5px'}}>
        <Input disableUnderline='true' placeholder='0' value={value} onChange={(e)=>{setValue(e.target.value)}} sx={{width:{ xs: '100%', sm: '80%' },height:'50px',border:'1px solid gray',borderRadius:'15px',backgroundColor:'white',padding:'10px'}}
            endAdornment=
            {
              <InputAdornment position="end">
                <Button onClick={()=>setValue('')}><ClearIcon sx={{marginRight:'20px',color:'black', fontSize:'40px'}}/></Button>
              </InputAdornment>
            }
        ></Input>
        <Button onClick={e=> setValue(value.slice(0,-1))} sx={{width:{ xs: '100%', sm: '18%' },height:'50px',border:'1px solid gray',borderRadius:'15px',backgroundColor:'white',marginLeft:'3px'}}><RemoveIcon sx={{color:'black',fontSize:'50px'}}/></Button>
      </Container>
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:{ xs: '100%', sm: '30%' },height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'00'} >00</Button>
        <Button onClick={e=> setValue(value.slice(0,-1))} sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:{ xs: '100%', sm: '30%' },height:'50px',fontFamily:'inherit',fontSize:'25px'}}  ><BackspaceIcon fontSize='large'/></Button>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:{ xs: '100%', sm: '35%' },height:'50px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} onClick={() => setCampaignModalOpen(true)} >{t('Order.campaignList')}</Button>
      </Container >
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:{ xs: '100%', sm: '20%' },height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'7'}>7</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:{ xs: '100%', sm: '20%' },height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'8'}  >8</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:{ xs: '100%', sm: '20%' },height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'9'} >9</Button>
        <Button sx={{border:'1px solid red', borderRadius:'20px',backgroundColor:'red',color:'white',width:{ xs: '100%', sm: '35%' },height:'50px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} >{t('Order.amount')}</Button>
      </Container >
      <Container sx={{marginTop:'5px',display:'flex',flexDirection:'row'}} >
      <div>
        <div>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'4'} >4</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'5'} >5</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'95px',height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'6'} >6</Button>
        </div>
        <div style={{marginTop:'5px'}}>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px'}} value={'1'} >1</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'90px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'2'} >2</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'95px',height:'50px',fontFamily:'inherit',fontSize:'25px'}} value={'3'} >3</Button>
        </div>
      </div>
      <div>
        <Button sx={{border:'1px solid green', borderRadius:'20px',backgroundColor:'green',color:'white',width:'160px',height:'105px',marginLeft:'10px',fontFamily:'inherit',fontSize:'15px'}} onClick={()=> navigate('/AraToplam')} >{t('Order.subTotal')}</Button>
      </div> 
      </Container>
      <Container sx={{marginTop:'5px'}}>
      <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'135px',height:'50px',marginRight:'5px',fontFamily:'inherit',fontSize:'25px',}} value={'0'} >0</Button>
        <Button onClick={e=> setValue( value + e.target.value) } sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'150px',height:'50px',fontFamily:'inherit',fontSize:'25px',marginRight:'5px'}} value={'.'}  >.</Button>
        <Button onClick={handleGirisClick} sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'30%',height:'50px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} >{t('Order.login')}</Button>
      </Container>
      <Container sx={{marginTop:'5px'}}>
        <Button onClick={AddCarrierBag} sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'30%',height:'50px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} >{t('Order.addBag')}</Button>
        <Button onClick={DeleteCarrierBag} sx={{border:'1px solid darkblue', borderRadius:'20px',backgroundColor:'darkblue',color:'white',width:'30%',height:'50px',marginLeft:'5px',fontFamily:'inherit',fontSize:'15px'}} >{t('Order.deleteBag')}</Button>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', backgroundColor: 'yellow', color: 'black',marginTop:'5px' }}>
          {t('Order.bagAmount')}:{carBagAmount}
        </Box>
      </Container>
      <CampaignModal open={isCampaignModalOpen} handleClose={() => setCampaignModalOpen(false)} applyCampaign={applyCampaign} />
    </div>
  )
}
export default Calculator