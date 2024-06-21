import React, { useState, useEffect} from 'react';
import { useProductCode } from '../Context/ProductContext';
import { useUser } from '../Context/UsersContext';
import { Input, InputAdornment, Button, Container, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../Styles/OrderPage.css';
import Category from './Category';
import Products from './Products';
import HomeKitchen from '../Images/Products/Kitchen/evMutfak.jpeg';
import HomeLife from '../Images/Products/Home&Life/evYaşam.jpeg';
import Clothes from '../Images/Products/Clothing&Accessory/Giyim.jpeg';
import BookLibrary from '../Images/Products/Book&Stationary/KitapKırtasiye.jpeg';
import Market from '../Images/Products/Market/Market.jpeg';
import Clean from '../Images/Products/Home&Clean/Temizlik.jpeg';
import barkodsuz from '../Images/Products/WithoutBarcode/Barkodsuz.jpeg';
import axios from 'axios';
import ProoductsVirtualKeybord from './ProductsVirtualKeybord';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const SelectProduct = () => {
 const navigate = useNavigate();
  const {ProductCode,setProductCode,setProductName,setProductPrice,setIsEmpty,Amounts,setAmounts,IsEntryClicked,setIsEntryClicked,showProductKeybrd,setShowProductKeybrd}= useProductCode();
  const {activeInput, setActiveInput,theme}= useUser()
  // Kategorileri ve ürünleri kontrol etmek için state'ler tanımla
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productData, setProductData] = useState({
    names: [],
    prices: [],
    codes: [],
  });
  const {t}= useTranslation();


  // Kullanıcı kategori seçtiğinde, ilgili ürünleri almak için etkileşimli olarak useEffect kullan
  useEffect(() => {
    // Seçilen kategoriye göre ürünleri getir
    if (selectedCategory === "Market") {
      // Axios ile sunucudan ürünleri getir
      axios.get('http://localhost:3003/Market')
        .then(result => {
          // Gelen verileri işle ve uygun şekilde state'e yerleştir
          const products = result.data;
          const names = products.map(product => product.name);
          const prices = products.map(product => product.price);
          const codes = products.map(product => product.code);

          // Ürün verilerini güncelle
          setProductData({ names, prices,codes });
        })
        .catch(error => {
          console.error('Ürünler getirilirken hata oluştu:', error);
        });
    }
  }, [selectedCategory]); // selectedCategory değiştiğinde useEffect yeniden çalışır

  useEffect(() => {
    if (selectedCategory === "home&life") {
      axios.get('http://localhost:3003/home&life')
        .then(result => {
          const products = result.data;
          const names = products.map(product => product.name);
          const prices = products.map(product => product.price);
          const codes = products.map(product => product.code);

          setProductData({ names, prices,codes });
        })
        .catch(error => {
          console.error('Ürünler getirilirken hata oluştu:', error);
        });
    }
  }, [selectedCategory]);
 
  useEffect(() => {
    if (selectedCategory === "Kitchen") {
      axios.get('http://localhost:3003/Kitchen')
        .then(result => {
          const products = result.data;
          const names = products.map(product => product.name);
          const prices = products.map(product => product.price);
          const codes = products.map(product => product.code);

          setProductData({ names, prices,codes });
        })
        .catch(error => {
          console.error('Ürünler getirilirken hata oluştu:', error);
        });
    }
  }, [selectedCategory]);
  useEffect(() => {
    if (selectedCategory === "clothing&accessory") {
      axios.get('http://localhost:3003/clothing&accessory')
        .then(result => {
          const products = result.data;
          const names = products.map(product => product.name);
          const prices = products.map(product => product.price);
          const codes = products.map(product => product.code);

          setProductData({ names, prices,codes });
        })
        .catch(error => {
          console.error('Ürünler getirilirken hata oluştu:', error);
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory === "book&stationary") {
      axios.get('http://localhost:3003/book&stationary')
        .then(result => {
          const products = result.data;
          const names = products.map(product => product.name);
          const prices = products.map(product => product.price);
          const codes = products.map(product => product.code);

          setProductData({ names, prices,codes });
        })
        .catch(error => {
          console.error('Ürünler getirilirken hata oluştu:', error);
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory === "home&clean") {
      axios.get('http://localhost:3003/home&clean')
        .then(result => {
          const products = result.data;
          const names = products.map(product => product.name);
          const prices = products.map(product => product.price);
          const codes = products.map(product => product.code);

          setProductData({ names, prices,codes });
        })
        .catch(error => {
          console.error('Ürünler getirilirken hata oluştu:', error);
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory === "withoutBarcode") {
      axios.get('http://localhost:3003/withoutBarcode')
        .then(result => {
          const products = result.data;
          const names = products.map(product => product.name);
          const prices = products.map(product => product.price);
          const codes = products.map(product => product.code);

          setProductData({ names, prices,codes });
        })
        .catch(error => {
          console.error('Ürünler getirilirken hata oluştu:', error);
        });
    }
  }, [selectedCategory]);

  // Kullanıcının kategori seçimini işle
  function showProducts(category) {
    // Seçilen kategoriyi güncelle
    setSelectedCategory(category);
    // Kategorileri gizle, ürünleri göster
    setShowCategories(false);
  };
  const fetchProduct = async () => {
    if(IsEntryClicked){
      setIsEntryClicked(false)
    const urls = [
      'http://localhost:3003/home&clean',
      'http://localhost:3003/Market',
      'http://localhost:3003/Kitchen',
      'http://localhost:3003/clothing&accessory',
      'http://localhost:3003/home&life',
      'http://localhost:3003/book&stationary',
      'http://localhost:3003/withoutBarcode'
    ];
  
    try {
      for (const url of urls) {
        const response = await axios.get(url);
        const products = response.data;
        for (const product of products) {
          const numProductCode = Number(ProductCode);
          if (product.code === numProductCode) {
            setIsEmpty(false);
            setProductName(prevNames => [...prevNames, product.name]);
             setProductPrice(prevPrices => [...prevPrices, product.price]);
              setAmounts([...Amounts]);
            return;
          }
        }
      
    }
      // Eğer hiçbir ürün koduyla eşleşme bulunamazsa uyarı göster
      alert(t('Order.productNotFound'));
      removeLastAmount();
      
    } catch (error) 
    {
      console.error('Ürünler getirilirken hata oluştu:', error);
    }
    }
    else
    alert(t('Order.enterAmount'));
  };
  // "Ürün bulunamadı" uyarısı aldığımızda çalışacak fonksiyon
const removeLastAmount = () => {
  setAmounts(prevAmounts => {
    // Eğer Amounts dizisi boşsa, herhangi bir işlem yapmadan geri dön
    if (prevAmounts.length === 0) return prevAmounts;
    // Son elemanı silip yeni diziyi döndür
    return prevAmounts.slice(0, -1);
  });
};
const handleKeyPress = (key) => {
  if (key === 'Sil' || key==='Del') {
    // Geri tuşuna basıldıysa
    if (activeInput === 'product') {
      setProductCode(ProductCode.slice(0, -1));
    } 
  } else if (key === 'Giriş' || key==='Enter') {
    setShowProductKeybrd(false); // Giriş tuşuna basıldığında klavyeyi kapat
  }
  else if(key ==='Vazgeç' || key==='Cancel'){
    setShowProductKeybrd(false);
  }
  else if(key ==='temizle'|| key==='clear'){
    setProductCode('');
  }
  else {
    if (activeInput === 'product') {
      setProductCode(ProductCode + key);
    } 
  }
};
  
  return (
    <div className='orderComponent ' style={{  backgroundColor:theme==='dark'?'black': 'rgb(218, 236, 237)'}}>
      {/* Barkod girişi ve kategori butonları */}
      <Input className='barcodeInput' 
      onChange={(e)=>{setProductCode(String(e.target.value))}} 
      onFocus={() => { setActiveInput('product'); setShowProductKeybrd(true); }}
      sx={{ 
        border: '1px solid black',
         borderRadius: '20px',
          backgroundColor: 'white',
           color: 'black', width: '90%',
            height: '50px', marginLeft: '10px', marginTop: '10px',
             fontSize: '20px', paddingLeft: '15px'
             }}
              disableUnderline='true' 
              placeholder={t('Order.barcodeEntryFromKeybord')}
              value={ProductCode}
        endAdornment={
          <InputAdornment position="start">
             <IconButton onClick={()=>{fetchProduct()}}>
            <CheckCircleIcon  sx={{ color: 'black', fontSize: '50px' }} />
            </IconButton>
          </InputAdornment>
        }></Input>
      <Button sx={{ border: '1px solid gray', borderRadius: '20px', width: '30%', backgroundColor: 'white', color: 'black', marginTop: '10px', marginRight: '5px', marginLeft: '3px' }} onClick={() => { setShowCategories(true) }}>{t('Order.categories')}</Button>
      <Button sx={{ border: '1px solid gray', borderRadius: '20px', width: '30%', backgroundColor: 'white', color: 'black', marginTop: '10px', marginRight: '5px' }}>{t('Order.subCategories')}</Button>
      <Button onClick={()=> navigate('/Ürünler')} sx={{ border: '1px solid gray', borderRadius: '20px', width: '30%', backgroundColor: 'white', color: 'black', marginTop: '10px', }}>{t('Order.products')}</Button>
      <div className="productListContainer">
      {/* Kategoriler veya ürünler */}
      {showCategories ? (
        // Kategorileri göster
        <Container maxWidth='lg' sx={{ marginTop: '10px' }}>
          <Grid container spacing={2} >
            <Grid onClick={() => showProducts("Market")} item xs={12} md={6} lg={4}>
              <Category
                image={Market}
                tittle={t('Order.market')}
              />
            </Grid>
            <Grid onClick={()=>showProducts("home&clean")} item  xs={12} md={6} lg={4}>
          <Category
            image={Clean}
            tittle ={t('Order.home&clean')}
          />
          </Grid>
          <Grid onClick={()=>showProducts("Kitchen")} item  xs={12} md={6} lg={4}>
          <Category
          image={HomeKitchen}
          tittle ={t('Order.home&kitchen')}
          />
          </Grid>
          <Grid onClick={()=>showProducts("clothing&accessory")} item  xs={12} md={6} lg={4}>
          <Category
          image={Clothes}
          tittle ={t('Order.clothing&accessory')}
          />
          </Grid>
          <Grid onClick={()=>showProducts("home&life")} item  xs={12} md={6} lg={4}>
          <Category
          image={HomeLife}
          tittle ={t('Order.home&life')}
          />
          </Grid>
          <Grid onClick={()=>showProducts("book&stationary")} item  xs={12} md={6} lg={4}>
          <Category
          image={BookLibrary}
          tittle ={t('Order.book&stationary')}
          />
          </Grid>
          <Grid onClick={()=>showProducts("withoutBarcode")} item  xs={12} md={6} lg={4}>
          <Category
          image={barkodsuz}
          tittle ={t('Order.noBarcode')}
          />
          </Grid>
          </Grid>
        </Container>
      ) : (
        // Ürünleri göster
        <Products 
          names={productData.names}
          prices={productData.prices}
          codes={productData.codes}
          ctgry ={selectedCategory}
        />
      )}
      </div>
      {showProductKeybrd && <ProoductsVirtualKeybord onKeyPress={handleKeyPress} />}
    </div>
  )
}

export default SelectProduct;
