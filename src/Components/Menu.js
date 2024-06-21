// import React, { useState, useEffect } from 'react';
// import '../Styles/HomePage.css';
// import { Button, Container, Typography, InputLabel, Link } from '@mui/material';
// import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../Context/UsersContext';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SellIcon from '@mui/icons-material/Sell';
// import ReplayIcon from '@mui/icons-material/Replay';
// import CalculateIcon from '@mui/icons-material/Calculate';
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import LayersIcon from '@mui/icons-material/Layers';
// import WarehouseIcon from '@mui/icons-material/Warehouse';
// import LinkIcon from '@mui/icons-material/Link';
// import { useTranslation } from "react-i18next";
// import axios from 'axios';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Menu = () => {
//   const [showmenuheader, setShowmenuheader] = useState(true);
//   const [cashierCount, setCashierCount] = useState(0);
//   const [productCount, setProductCount] = useState(0);
//   const navigate = useNavigate();
//   const { theme } = useUser();
//   const { t } = useTranslation();

//   const hideMenuContent = () => {
//     setShowmenuheader(false);
//   };

//   useEffect(() => {
//     const fetchCashierCount = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/users');
//         setCashierCount(response.data.length); // assuming the response is an array of users
//       } catch (error) {
//         console.error('Error fetching cashier count:', error);
//       }
//     };

//     const fetchProductCount = async () => {
//       try {
//         const endpoints = [
//           'http://localhost:3003/home&clean',
//           'http://localhost:3003/Market',
//           'http://localhost:3003/Kitchen',
//           'http://localhost:3003/clothing&accessory',
//           'http://localhost:3003/home&life',
//           'http://localhost:3003/book&stationary',
//           'http://localhost:3003/withoutBarcode'
//         ];
//         const promises = endpoints.map(endpoint => axios.get(endpoint));
//         const responses = await Promise.all(promises);
//         const totalProducts = responses.reduce((total, response) => total + response.data.length, 0);
//         setProductCount(totalProducts);
//       } catch (error) {
//         console.error('Error fetching product count:', error);
//       }
//     };

//     fetchCashierCount();
//     fetchProductCount();
//   }, []);

//   const productData = {
//     labels: ['Products', 'Total (100)'],
//     datasets: [
//       {
//         label: 'Products',
//         data: [productCount, 100 - productCount],
//         backgroundColor: ['#FF6384', '#E0E0E0'],
//         hoverBackgroundColor: ['#FF6384', '#E0E0E0'],
//       },
//     ],
//   };

//   const cashierData = {
//     labels: ['Cashiers', 'Total (100)'],
//     datasets: [
//       {
//         label: 'Cashiers',
//         data: [cashierCount, 100 - cashierCount],
//         backgroundColor: ['#36A2EB', '#E0E0E0'],
//         hoverBackgroundColor: ['#36A2EB', '#E0E0E0'],
//       },
//     ],
//   };

//   return (
//     <div className='menuPage' style={{ backgroundColor: theme === 'dark' ? 'black' : 'rgb(218, 236, 237)' }}>
//       {showmenuheader ? (
//         <Container className='menuheader' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <Typography sx={{ color: theme === 'dark' ? 'white' : 'black' }} variant='h4'>{t('Home.seeMenuIcon')}</Typography>
//           <Button onClick={hideMenuContent} sx={{ backgroundColor: theme === 'dark' ? 'blue' : 'black', border: '1px solid black', borderRadius: '50px' }}>
//             <ListOutlinedIcon sx={{ fontSize: '50px' }} />
//           </Button>
//           {/* Dashboard Section */}
//           <Container  sx={{ marginTop: '20px', textAlign: 'center'}}>
//             <Typography variant='h4' sx={{ color: theme === 'dark' ? 'white' : 'black' }}>{t('Home.dashboard')}</Typography>
//             <Container sx={{ display: 'flex', justifyContent: 'space-around' }}>
//               <div style={{ width: '30%' }}>
//                 <Typography>{t('Home.totalProducts')}</Typography>
//                 <Pie style={{height:'200px'}} data={productData} />
//               </div>
//               <div style={{ width: '30%' }}>
//                 <Typography>{t('Home.totalCashiers')}</Typography>
//                 <Pie style={{height:'200px'}} data={cashierData} />
//               </div>
//             </Container>
//           </Container>
//         </Container>
//       ) : (
//         <Container>
//           <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
//             <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
//               <ShoppingCartIcon sx={{ border: '1px solid red', backgroundColor: 'red', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
//               <Link onClick={() => navigate("/Satış")} sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.order')}</Link>
//             </InputLabel>
//             <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
//               <SellIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
//               <Link onClick={() => { navigate('/Ürünler') }} sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.seePrice')}</Link>
//             </InputLabel>
//           </Container>
//           <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
//             <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
//               <ReplayIcon sx={{ border: '1px solid red', backgroundColor: 'red', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
//               <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.returnProcess')}</Link>
//             </InputLabel>
//             <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
//               <CalculateIcon sx={{ border: '1px solid red', backgroundColor: 'red', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
//               <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.collections')}</Link>
//             </InputLabel>
//           </Container>
//           <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
//             <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
//               <ReceiptLongIcon sx={{ border: '1px solid darkorange', backgroundColor: 'darkorange', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
//               <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.reports')}</Link>
//             </InputLabel>
//             <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
//               <LayersIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
//               <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.otherOp')}</Link>
//             </InputLabel>
//           </Container>
//           <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
//             <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
//               <WarehouseIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
//               <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.directProductsEntry')}</Link>
//             </InputLabel>
//             <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
//               <LinkIcon sx={{ border: '1px solid darkorange', backgroundColor: 'darkorange', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
//               <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>WWW</Link>
//             </InputLabel>
//           </Container>
//         </Container>
//       )}
//     </div>
//   );
// };

// export default Menu;

import React, { useState, useEffect } from 'react';
import '../Styles/HomePage.css';
import { Button, Container, Typography, InputLabel, Link } from '@mui/material';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UsersContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import ReplayIcon from '@mui/icons-material/Replay';
import CalculateIcon from '@mui/icons-material/Calculate';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LayersIcon from '@mui/icons-material/Layers';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Menu = () => {
  const [showmenuheader, setShowmenuheader] = useState(true);
  const [cashierCount, setCashierCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryData, setCategoryData] = useState({});
  const navigate = useNavigate();
  const { theme } = useUser();
  const { t } = useTranslation();

  const hideMenuContent = () => {
    setShowmenuheader(false);
  };

  useEffect(() => {
    const fetchCashierCount = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setCashierCount(response.data.length); // assuming the response is an array of users
      } catch (error) {
        console.error('Error fetching cashier count:', error);
      }
    };

    const fetchProductCount = async () => {
      try {
        const endpoints = [
          'http://localhost:3003/home&clean',
          'http://localhost:3003/Market',
          'http://localhost:3003/Kitchen',
          'http://localhost:3003/clothing&accessory',
          'http://localhost:3003/home&life',
          'http://localhost:3003/book&stationary',
          'http://localhost:3003/withoutBarcode'
        ];
        const promises = endpoints.map(endpoint => axios.get(endpoint));
        const responses = await Promise.all(promises);
        const totalProducts = responses.reduce((total, response) => total + response.data.length, 0);
        setProductCount(totalProducts);

        // Kategori bazında ürün sayıları
        const categoryCounts = responses.reduce((counts, response, index) => {
          const category = endpoints[index].split('/').pop();
          counts[category] = response.data.length;
          return counts;
        }, {});

        setCategoryData(categoryCounts);
      } catch (error) {
        console.error('Error fetching product count:', error);
      }
    };

    fetchCashierCount();
    fetchProductCount();
  }, []);

  const productData = {
    labels: ['Products'],
    datasets: [
      {
        label: 'Number Of Products',
        data: [productCount, 100 - productCount],
        backgroundColor: ['#FF6384', '#E0E0E0'],
        hoverBackgroundColor: ['#FF6384', '#E0E0E0'],
      },
    ],
  };

  const cashierData = {
    labels: ['Cashiers'],
    datasets: [
      {
        label: 'Number Of Cashiers ',
        data: [cashierCount, 100 - cashierCount],
        backgroundColor: ['#36A2EB', '#E0E0E0'],
        hoverBackgroundColor: ['#36A2EB', '#E0E0E0'],
      },
    ],
  };

  // Kategori bazında pie chart verisi
  const categoryPieData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: 'Categories',
        data: Object.values(categoryData),
        backgroundColor: ['	#ffff00', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384'],
        hoverBackgroundColor: ['#ffff00', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384'],
      },
    ],
  };

  return (
    <div className='menuPage' style={{ backgroundColor: theme === 'dark' ? 'black' : 'rgb(218, 236, 237)' }}>
      {showmenuheader ? (
        <Container className='menuheader' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography sx={{ color: theme === 'dark' ? 'white' : 'black' }} variant='h4'>{t('Home.seeMenuIcon')}</Typography>
          <Button onClick={hideMenuContent} sx={{ backgroundColor: theme === 'dark' ? 'blue' : 'black', border: '1px solid black', borderRadius: '50px' }}>
            <ListOutlinedIcon sx={{ fontSize: '50px' }} />
          </Button>
          {/* Dashboard Section */}
          <Container sx={{ marginTop: '10px', textAlign: 'center'}}>
            {/* <Typography variant='h4' sx={{ color: theme === 'dark' ? 'white' : 'black' }}>{t('Home.dashboard')}</Typography> */}
            <Container sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ width: '30%'}}>
                <Typography sx={{color:'red',fontStyle:'italic'}}>{t('Home.totalProducts')}</Typography>
                <Pie style={{ height: '80%' }} data={productData} />
              </div>
              <div style={{ width: '30%'}}>
                <Typography sx={{color:'red',fontStyle:'italic'}}>{t('Home.totalCashiers')}</Typography>
                <Pie style={{ height: '80%' }} data={cashierData} />
              </div>
              <div style={{ width: '30%'}}>
                <Typography sx={{color:'red',fontStyle:'italic'}}>{t('Home.productCategories')}</Typography>
                <Pie style={{ height: '80%' }} data={categoryPieData} />
              </div>
            </Container>
          </Container>
        </Container>
      ) : (
        <Container>
          <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
              <ShoppingCartIcon sx={{ border: '1px solid red', backgroundColor: 'red', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link onClick={() => navigate("/Satış")} sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.order')}</Link>
            </InputLabel>
            <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
              <SellIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link onClick={() => { navigate('/Ürünler') }} sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.seePrice')}</Link>
            </InputLabel>
          </Container>
          <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
              <ReplayIcon sx={{ border: '1px solid red', backgroundColor: 'red', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.returnProcess')}</Link>
            </InputLabel>
            <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
              <CalculateIcon sx={{ border: '1px solid red', backgroundColor: 'red', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.collections')}</Link>
            </InputLabel>
          </Container>
          <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
              <ReceiptLongIcon sx={{ border: '1px solid darkorange', backgroundColor: 'darkorange', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.reports')}</Link>
            </InputLabel>
            <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
              <LayersIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.otherOp')}</Link>
            </InputLabel>
          </Container>
          <Container sx={{ paddingLeft: '60px', display: 'flex', justifyContent: 'space-between' }}>
            <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
              <WarehouseIcon sx={{ border: '1px solid darkblue', backgroundColor: 'darkblue', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>{t('Home.directProductsEntry')}</Link>
            </InputLabel>
            <InputLabel sx={{ border: '1px solid white', borderRadius: '20px', backgroundColor: 'white', color: 'black', width: '40%', height: '20px', padding: '15px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center' }}>
              <LinkIcon sx={{ border: '1px solid darkorange', backgroundColor: 'darkorange', borderRadius: '10px', fontSize: '40px', color: 'white' }} />
              <Link sx={{ marginLeft: '20px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textDecoration: 'none', color: 'black' }}>WWW</Link>
            </InputLabel>
          </Container>
        </Container>
      )}
    </div>
  );
};

export default Menu;
