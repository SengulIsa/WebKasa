import './App.css';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import OrderPage from './Components/OrderPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/Satış" element={<OrderPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
