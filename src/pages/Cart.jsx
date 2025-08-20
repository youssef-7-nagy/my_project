// Cart.jsx
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../store/slices/CartSlice";
import { syncCart } from "../store/slices/CartSlice";
import { toast } from "react-toastify";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  const handleSync = async () => {
    if (!cartItems.length) {
      toast.info("Your cart is empty.");
      return;
    }

    try {
      // If using createAsyncThunk, unwrap gives you thrown errors
      await dispatch(syncCart({ userId: 1, items: cartItems })).unwrap();
      toast.success("✅ Your order has been confirmed");
      dispatch(clearCart());
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="cart-page">
      <h1>🛒 My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-state">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              {item.image && (
                <img src={item.image} alt={item.title} className="cart-image" />
              )}

              <div className="cart-details">
                <h2 className="cart-title">{item.title || `Product ${item.id}`}</h2>
                <p className="cart-line">
                  ${item.price || 0} x {item.quantity} ={" "}
                  <strong>${((item.price || 0) * item.quantity).toFixed(2)}</strong>
                </p>
              </div>

              <div className="quantity-controls">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="btn-qty"
                >
                  –
                </button>
                <span className="qty">{item.quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="btn-qty"
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-footer">
            <h2 className="total">Total: ${totalPrice.toFixed(2)}</h2>
            <div className="actions">
              <button className="btn-outline" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
              <button className="btn-primary" onClick={handleSync}>
                Confirm your order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
