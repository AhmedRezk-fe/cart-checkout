import './App.css';
import Auth from './pages/Auth';
import CheckOut from './pages/CheckOut';
import ShoppingCart from './pages/Cart';
import Popup_cart from './components/Popup_cart';

function App() {
  return (
    <div className="App">
      <CheckOut />
      <ShoppingCart />
      <Auth />
      {/* <Popup_cart /> */}
    </div>
  );
}

export default App;
