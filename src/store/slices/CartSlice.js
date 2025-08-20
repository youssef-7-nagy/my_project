import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 📌 Fetch cart for a specific user
export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  const response = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);
  return response.data[0]; // API returns an array of carts, we take the first one
});

// 📌 Sync cart with API (POST or PUT)
export const syncCart = createAsyncThunk("cart/syncCart", async ({ userId, items }) => {
  const response = await axios.post("https://fakestoreapi.com/carts", {
    userId,
    date: new Date(),
    products: items.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    })),
  });
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      if (action.payload?.products) {
        state.items = action.payload.products.map((p) => ({
          id: p.productId,
          quantity: p.quantity,
          // API doesn’t return product details, just ids & quantities
        }));
      }
    });
    builder.addCase(syncCart.fulfilled, (state, action) => {
      console.log("✅ Cart synced with API:", action.payload);
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
