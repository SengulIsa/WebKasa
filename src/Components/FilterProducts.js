import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Button, Container, TextField,IconButton } from '@mui/material';
import axios from 'axios';
import { useUser } from '../Context/UsersContext';
import '../Styles/FilteredProducts.css';
import { useTranslation } from 'react-i18next';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {  useNavigate} from 'react-router-dom';



const endpoints = [
  'http://localhost:3003/home&clean',
  'http://localhost:3003/Market',
  'http://localhost:3003/Kitchen',
  'http://localhost:3003/clothing&accessory',
  'http://localhost:3003/home&life',
  'http://localhost:3003/book&stationary',
  'http://localhost:3003/withoutBarcode'
];

const filterRanges = [
  { label: 'A', range: ['a', 'a'] },
  { label: 'B', range: ['b', 'b'] },
  { label: 'C-D', range: ['c', 'd'] },
  { label: 'E-F', range: ['e', 'f'] },
  { label: 'G', range: ['g', 'g'] },
  { label: 'H', range: ['h', 'h'] },
  { label: 'I', range: ['i', 'i'] },
  { label: 'J-K', range: ['j', 'k'] },
  { label: 'L-N', range: ['l', 'n'] },
  { label: 'O-P', range: ['o', 'p'] },
  { label: 'R-U', range: ['r', 'u'] },
  { label: 'W', range: ['w', 'w'] },
  { label: 'Y-Z', range: ['y', 'z'] },
];

const productImages = {
  'A': [
    { name: 'Adidas', src: require('../Images/Products/Clothing&Accessory/ErkekŞort.jpeg') },
    { name: 'Adana', src: require('../Images/Products/WithoutBarcode/Portakal.jpeg') },
  ],
  'B': [
    { name: 'Borosilikat', src: require('../Images/Products/Kitchen/Kupa.jpeg') },
    { name: 'Beestar', src: require('../Images/Products/Book&Stationary/Kaplık.jpeg') },
    { name: 'Bic', src: require('../Images/Products/Book&Stationary/PastelBoya.jpeg') },
    { name: 'Barbie', src: require('../Images/Products/Book&Stationary/BarbieKırtasiyeSeti.jpeg') },
    { name: 'Belderia', src: require('../Images/Products/WithoutBarcode/Bisiklet.jpeg') },
  ],
  'C-D': [
    { name: 'Domestos', src: require('../Images/Products/Home&Clean/ÇamaşırSuyu.jpeg') },
    { name: 'Cappy', src: require('../Images/Products/Market/Cappy.jpeg') },
    { name: 'Dooy', src: require('../Images/Products/Market/Dooy.jpeg') },
    { name: 'Doğuş', src: require('../Images/Products/Market/Doğuş.jpeg') },
    { name: 'Cam', src: require('../Images/Products/Kitchen/PastaTabağı.jpeg') },
    { name: 'Tayt', src: require('../Images/Products/Clothing&Accessory/KadınTayt.jpeg') },
    { name: 'Soğan', src: require('../Images/Products/WithoutBarcode/YeşilSoğan.jpeg') },
    { name: 'Maydonoz', src: require('../Images/Products/WithoutBarcode/Maydanoz.jpeg') },
    { name: 'Can', src: require('../Images/Products/WithoutBarcode/CanErik.jpeg') },
    { name: 'Saat', src: require('../Images/Products/WithoutBarcode/KolSaati.jpeg') },
    { name: 'Terlik', src: require('../Images/Products/WithoutBarcode/Terlik.jpeg') },
    { name: 'Ciçeğim', src: require('../Images/Products/Home&Clean/ÇamaşırSodası.jpeg') },
    { name: 'Carliston', src: require('../Images/Products/WithoutBarcode/ÇarlistonBiber.jpeg') },
  ],
  'E-F': [
    { name: 'Kapsül', src: require('../Images/Products/Home&Clean/Kapsül.jpeg') },
    { name: 'Erikli', src: require('../Images/Products/Market/Erikli.jpeg') },
    { name: 'Emaye', src: require('../Images/Products/Kitchen/FırınTepsisi.jpeg') },
    { name: 'Perde', src: require('../Images/Products/Home&Life/Perde.jpeg') },
    { name: 'Olta', src: require('../Images/Products/Home&Life/OltaSehpası.jpeg') },
    { name: 'Boyama', src: require('../Images/Products/Book&Stationary/BoyamaSeti.jpeg') },
    { name: 'Silgi', src: require('../Images/Products/Book&Stationary/Silgi.jpeg') },
    { name: 'Frozen', src: require('../Images/Products/Book&Stationary/SırtÇantası.jpeg') },
  ],
  'H': [
    { name: 'Hummel', src: require('../Images/Products/Clothing&Accessory/Sweatshirt.jpeg') },
  ],
  'I': [
    { name: 'Içim', src: require('../Images/Products/Market/Ayran.jpeg') },
  ],
  'J-K': [
    { name: 'Kase', src: require('../Images/Products/Kitchen/KaseSeti.jpeg') },
    { name: 'Çaydanlık', src: require('../Images/Products/Kitchen/Çaydanlık.jpeg') },
    { name: 'Mont', src: require('../Images/Products/Clothing&Accessory/Mont.jpeg') },
    { name: 'Askılı', src: require('../Images/Products/Clothing&Accessory/KadınÇanta.jpeg') },
    { name: 'Katlanabilir', src: require('../Images/Products/Home&Life/Sandalye.jpeg') },
    { name: 'Yolluk', src: require('../Images/Products/Home&Life/Yolluk.jpeg') },
    { name: 'Elma', src: require('../Images/Products/WithoutBarcode/Elma.jpeg') },
    { name: 'Marul', src: require('../Images/Products/WithoutBarcode/Kıvırcık.jpeg') },
  ],
  'L-N': [
    { name: 'Mistral', src: require('../Images/Products/Home&Clean/TuvaletKağıdı.jpeg') },
    { name: 'Nescafe', src: require('../Images/Products/Market/Nescafe.jpeg') },
    { name: 'Mug', src: require('../Images/Products/Kitchen/Termos.jpeg') },
    { name: 'Nehir', src: require('../Images/Products/Kitchen/ServisSeti.jpeg') },
    { name: 'Reçellik', src: require('../Images/Products/Kitchen/Reçellik.jpeg') },
  ],
  'O-P': [
    { name: 'Persil', src: require('../Images/Products/Home&Clean/SıvıDeterjan.jpeg') },
    { name: 'Peros', src: require('../Images/Products/Home&Clean/TozDeterjan.jpeg') },
    { name: 'Omo', src: require('../Images/Products/Home&Clean/OmoTozDeterjan.jpeg') },
    { name: 'Valiz', src: require('../Images/Products/Clothing&Accessory/ValizSeti.jpeg') },
    { name: 'Peregri', src: require('../Images/Products/Clothing&Accessory/ErkekTişört.jpeg') },
    { name: 'Patates', src: require('../Images/Products/WithoutBarcode/Patates.jpeg') },
    { name: 'Poşet', src: require('../Images/Products/WithoutBarcode/Poşet.jpg') },
  ],
  'R-U': [
    { name: 'Sleepy', src: require('../Images/Products/Home&Clean/TemizlikHavlusu.jpeg') },
    { name: 'Tursil', src: require('../Images/Products/Home&Clean/TursilSıvıDeterjan.jpeg') },
    { name: 'Sarıkız', src: require('../Images/Products/Market/sarıkız.jpeg') },
    { name: 'Spoon', src: require('../Images/Products/Market/Spoon.jpeg') },
    { name: 'Sera', src: require('../Images/Products/Market/Sera.jpeg') },
    { name: 'Sarina', src: require('../Images/Products/Kitchen/Yağlık.jpeg') },
    { name: 'Silk&Blue', src: require('../Images/Products/Clothing&Accessory/Çorap.jpeg') },
    { name: 'Rotring', src: require('../Images/Products/Book&Stationary/UçluKalem.png') },
    { name: 'Smartkids', src: require('../Images/Products/Book&Stationary/FosforluKalem.jpeg') },
    { name: 'Tyt', src: require('../Images/Products/Book&Stationary/DenemeSeti.jpeg') },
    { name: 'Havuç', src: require('../Images/Products/WithoutBarcode/Havuç.jpeg') },
    { name: 'Salatalık', src: require('../Images/Products/WithoutBarcode/TurşulukSalatalık.jpeg') },
    { name: 'Tiamob', src: require('../Images/Products/WithoutBarcode/Dolap.jpeg') },
    { name: 'sekilli', src: require('../Images/Products/Book&Stationary/Kalemlik.jpeg') },
    { name: 'Seftali', src: require('../Images/Products/WithoutBarcode/Şeftali.jpeg') },

  ],
  'W':[
    {name:'Düdüklü', src: require('../Images/Products/Kitchen/Düdüklü.jpeg')}
  ],
  'Y-Z':[
    {name:'Yumoş', src: require('../Images/Products/Home&Clean/YumoşSıvıDeterjan.jpeg')},
    {name:'Domates', src: require('../Images/Products/WithoutBarcode/Domates.jpeg')},
  ]
  
};

const FilterProducts = () => {
  const { theme } = useUser();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();
 const navigate = useNavigate();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)));
        const allProducts = responses.flatMap(response => response.data);
        setProducts(allProducts);
        setFilteredProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const filterByRange = (range) => {
    if (range[0] === 'a' && range[1] === 'z') {
      setFilteredProducts([...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,]);
    } else {
      const [start, end] = range;
      const filtered = products.filter(product => {
        const firstLetter = product.name[0].toLowerCase();
        return firstLetter >= start && firstLetter <= end;
      });
      
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const getImagePath = (productName) => {
    for (let key in productImages) {
      for (let img of productImages[key]) {
        if (productName.toLowerCase().includes(img.name.toLowerCase())) {
          return img.src;
        }
      }
    }
    return null; // Eğer resim bulunamazsa
  };

  return (
    <div style={{ backgroundColor: theme === 'dark' ? 'black' : 'gray', minHeight: '100vh', minWidth: '100vh' }}>
      <div style={{ border: theme === 'dark' ? '1px solid black' : '1px solid gray', borderRadius: '10px', paddingBottom: '20px', paddingRight: '10px', paddingLeft: '10px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className='filterProductsUp'>
        <IconButton sx={{backgroundColor:'darkblue',marginRight:'60px'}} onClick={()=>{navigate('/Home')}}>
          <ArrowBackIosIcon  sx={{color:'white'}} fontSize='small'/>
        </IconButton>
          <Typography sx={{ fontSize: '30px',fontStyle:'italic', color: theme === 'dark' ? 'white' : 'darkblue', paddingTop: '10px' }}>{t('Products.products')}</Typography>
          </div>
          <TextField
            placeholder={t('Products.productSearch')}
            onChange={handleSearch}
            value={searchQuery}
            style={{ marginBottom: '20px', marginTop: '5px', width: '100%', backgroundColor: 'white' }}
          />
          {filterRanges.map(({ label, range }) => (
            <Button
              key={label}
              variant="contained"
              color="primary"
              onClick={() => filterByRange(range)}
              style={{ margin: '5px' }}
            >
              {label}
            </Button>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => filterByRange(['a', 'z'])}
            style={{ margin: '5px' }}
          >
            {t('Products.showAllOfThem')}
          </Button>
        </div>
        {filteredProducts.length > 0 ? (
          <Grid container spacing={2} justifyContent="center">
            {filteredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card sx={{ border: '1px solid gray', borderRadius: '20px', height: '300px', marginTop: '10px' }}>
                  <CardMedia sx={{width:'100%',marginTop:'5px',objectFit:'contain'}}
                    component="img"
                    height="140"
                    image={getImagePath(product.name)}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography sx={{ fontSize: '17px', fontFamily: 'fantasy' }} variant="h6" component="div">
                      {product.name}
                    </Typography>
                    <Typography sx={{ fontSize: '17px', fontFamily: 'fantasy' }}>
                      {t('Order.code')}: {product.code}
                    </Typography>
                    <Typography sx={{ fontSize: '17px', fontFamily: 'fantasy' }}>
                      {t('Order.price')}: {product.price} {t('Order.lira')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>
            {t('Products.noProducts')}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default FilterProducts;

