
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from '../src/Components/Login.jsx'
import Home from '../src/Components/Home.jsx'
import Carosel from './Components/Carosel.jsx';
import Shop from './Components/Shop.jsx';
import Landing from './Components/Landing.jsx';
import Address from './Components/Address.jsx';
import Confirmation from './Components/Confirmation.jsx';
import Adminlogin from './Components/Adminlogin.jsx'
import AdminHome from './Components/AdminHome.jsx';
import Add from './Components/Add.jsx';
import Delete from './Components/Delete.jsx';
import About from './Components/About.jsx' ;
import Contact from './Components/Contact.jsx' ;
import Order from './Components/Order.jsx';
import Cart from './Components/Cart.jsx';
import Newcard from './Components/newcard.jsx';
import Fullshop from './Components/Fullshop.jsx';
import Drawe from './Components/Drawer.jsx';
import Price from './Components/Price.jsx';
import Search from './Components/Search.jsx';
import Auto from './Components/Auto.jsx';
import Profile from './Components/Profile.jsx';
import Newloader from './Components/Newloader.jsx';
import PaymentPage from './Components/Payment.jsx';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route  element={<Login/>} path='/'/>
      <Route  element={<Home/>} path='/home'/>
      <Route  element={<Carosel/>} path='/carosel'/>
      <Route  element={<Shop/>} path='/shop'/>
      <Route  element={<Landing/>} path='/lan'/>
      <Route  element={<Address/>} path='/a'/>
      <Route  element={<Confirmation/>} path='/con'/>
      <Route  element={<Adminlogin/>} path='/al'/>
      <Route  element={<AdminHome/>} path='/ah'/>
      <Route  element={<Add/>} path='/add'/>
      <Route  element={<Delete/>} path='/del'/>
      <Route  element={<About/>} path='/about'/>
      <Route  element={<Contact/>} path='/contact'/>
      <Route  element={<Order/>} path='/order'/>
      <Route  element={<Cart/>} path='/cart'/>
      <Route  element={<Fullshop/>} path='/nc'/>
      <Route  element={<Drawe/>} path='/draw'/>
      <Route  element={<Price/>} path='/price'/>
      <Route  element={<Search/>} path='/search'/>
      <Route  element={<Auto/>} path='/auto'/>
      <Route  element={<Profile/>} path='/profile'/>
      <Route  element={<Newloader/>} path='/nl'/>
      <Route  element={<PaymentPage/>} path='/pay'/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
