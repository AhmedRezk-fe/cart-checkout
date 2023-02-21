import logo from './logo.svg';
import './App.css';
import Auth from './pages/Auth';
import CheckOut from './pages/CheckOut';
import ShoppingCart from './pages/Cart';

function App() {
  return (
    <div className="App">
      {/* <CheckOut /> */}
      <ShoppingCart />
      <Auth />
    </div>
  );
}

export default App;
