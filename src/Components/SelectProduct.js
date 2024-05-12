import React, { useState, useEffect} from 'react';
import { useProductCode } from '../Context/ProductContext';
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

const SelectProduct = () => {
  const {ProductCode,setProductCode,setProductName,setProductPrice,setIsEmpty}= useProductCode();
  // Kategorileri ve ürünleri kontrol etmek için state'ler tanımla
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productData, setProductData] = useState({
    names: [],
    prices: [],
    codes: [],
  });

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
    setIsEmpty(false);
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
            setProductName(prevNames => [...prevNames, product.name]);
             setProductPrice(prevPrices => [...prevPrices, product.price]);
            return;
          }
        }
      }
  
      // Eğer hiçbir ürün koduyla eşleşme bulunamazsa uyarı göster
      console.log("Ürün bulunamadı.");
    } catch (error) {
      console.error('Ürünler getirilirken hata oluştu:', error);
    }
  
  };
  
  return (
    <div className='orderComponent '>
      {/* Barkod girişi ve kategori butonları */}
      <Input className='barcodeInput' onChange={(e)=>{setProductCode(e.target.value)}} sx={{ border: '1px solid black', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '90%', height: '50px', marginLeft: '10px', marginTop: '10px', fontSize: '20px', paddingLeft: '15px' }} disableUnderline='true' placeholder='Klavyeden Barkod Girişi' value={ProductCode}
        endAdornment={
          <InputAdornment position="start">
             <IconButton onClick={()=>{fetchProduct()}}>
            <CheckCircleIcon  sx={{ color: 'black', fontSize: '50px' }} />
            </IconButton>
          </InputAdornment>
        }></Input>
      <Button sx={{ border: '1px solid gray', borderRadius: '20px', width: '30%', backgroundColor: 'white', color: 'black', marginTop: '10px', marginRight: '5px', marginLeft: '3px' }} onClick={() => { setShowCategories(true) }}>Kategoriler</Button>
      <Button sx={{ border: '1px solid gray', borderRadius: '20px', width: '30%', backgroundColor: 'white', color: 'black', marginTop: '10px', marginRight: '5px' }}>Alt Kategoriler</Button>
      <Button sx={{ border: '1px solid gray', borderRadius: '20px', width: '30%', backgroundColor: 'white', color: 'black', marginTop: '10px', }}>Ürünler</Button>
      <div className="productListContainer">
      {/* Kategoriler veya ürünler */}
      {showCategories ? (
        // Kategorileri göster
        <Container maxWidth='lg' sx={{ marginTop: '10px' }}>
          <Grid container spacing={2} >
            <Grid onClick={() => showProducts("Market")} item xs={12} md={6} lg={4}>
              <Category
                image={Market}
                tittle="MARKET"
              />
            </Grid>
            <Grid onClick={()=>showProducts("home&clean")} item  xs={12} md={6} lg={4}>
          <Category
            image={Clean}
            tittle ="EV&TEMİZLİK"
          />
          </Grid>
          <Grid onClick={()=>showProducts("Kitchen")} item  xs={12} md={6} lg={4}>
          <Category
          image={HomeKitchen}
          tittle ="EV&MUTFAK"
          />
          </Grid>
          <Grid onClick={()=>showProducts("clothing&accessory")} item  xs={12} md={6} lg={4}>
          <Category
          image={Clothes}
          tittle ="GİYİM&AKSESUAR"
          />
          </Grid>
          <Grid onClick={()=>showProducts("home&life")} item  xs={12} md={6} lg={4}>
          <Category
          image={HomeLife}
          tittle ="EV&YAŞAM"
          />
          </Grid>
          <Grid onClick={()=>showProducts("book&stationary")} item  xs={12} md={6} lg={4}>
          <Category
          image={BookLibrary}
          tittle ="KİTAP&KIRTASİYE"
          />
          </Grid>
          <Grid onClick={()=>showProducts("withoutBarcode")} item  xs={12} md={6} lg={4}>
          <Category
          image={barkodsuz}
          tittle ="BARKODSUZ"
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
    </div>
  )
}

export default SelectProduct;
