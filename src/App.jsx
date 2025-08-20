import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import { Profile } from './pages/Profile';  
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/Productdetails';
import { Footer } from './component/Footer';
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" Component={Login } /> 
        <Route path="/Profile" Component={Profile } />
        <Route path="/Login" Component={Login } />
        <Route path="/products" Component={Products } />
        <Route path="/products_details/:id" Component={ProductDetails } />
        <Route path="/add-cart" Component={Cart} />

        

      </Routes>
        <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Footer />
    </>
  );
}

export default App;
