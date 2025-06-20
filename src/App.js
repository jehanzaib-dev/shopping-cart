import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar.js';
import Home from './pages/home.js';
import Cart from './pages/cart.js';


function App() {
  return (
<div className="App">
  <Navbar/>
  <Routes>
    <Route path='/' element=<Home/> />

    <Route path='/cart' element=<Cart/> />
  </Routes>          


</div>
);
}

export default App;
