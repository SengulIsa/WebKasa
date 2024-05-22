import './App.css';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import OrderPage from './Components/OrderPage';
import PaymentPage from './Components/PaymentPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/Satış" element={<OrderPage/>}/>
        <Route path="/AraToplam" element={<PaymentPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
