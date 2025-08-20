import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/CartSlice";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="text-container">
        <h1>{product.title}</h1>
        <h3>Price: ${product.price}</h3>
        <p>{product.description}</p>
      </div>

      <Link to={`/products_details/${product.id}`}>
        <button className="show-more">Show More</button>
      </Link>

      <div className="bottom-section">
        <div className="color-options">
          <span className="color-circle color-black"></span>
          <span className="color-circle color-grey"></span>
          <span className="color-circle color-white"></span>
          <span className="color-circle color-lightseagreen"></span>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      
    </div>
  );
};

export default ProductCard;
