import './App.css';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import OrderPage from './Components/OrderPage';
import PaymentPage from './Components/PaymentPage';
import FilterProducts from './Components/FilterProducts';
import Settings from './Components/Settings';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/Satış" element={<OrderPage/>}/>
        <Route path="/AraToplam" element={<PaymentPage/>}/>
        <Route path="/Ürünler" element={<FilterProducts/>}/>
        <Route path="/Ayarlar" element={<Settings/>}/>
      </Routes>
    </div>
  );
}

export default App;
