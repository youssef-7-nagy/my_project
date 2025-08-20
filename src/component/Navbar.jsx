import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css";

export const Navbar = () => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <div className="nav">
      <Link to="/Profile"></Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Products">Products</Link>
      <Link to="/add-cart" className="cart-link">
        My Cart <FaShoppingCart size="20px" /> 
        <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  );
};
