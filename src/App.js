import './App.css';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import NewUSer from './Components/NewUser';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/NewUSer" element={<NewUSer/>}/>
      </Routes>
    </div>
  );
}

export default App;
