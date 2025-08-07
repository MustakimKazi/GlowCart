import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  return data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    filtered: [],
    loading: false,
    error: null,
    selectedProduct: null,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    searchProducts: (state, action) => {
      const text = action.payload.toLowerCase();
      state.filtered = state.list.filter((item) =>
        item.title.toLowerCase().includes(text)
      );
    },
    applyPriceFilter: (state) => {
      state.filtered = state.list.filter((item) => item.price < 100);
    },
    clearFilter: (state) => {
      state.filtered = [...state.list];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.filtered = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSelectedProduct,
  searchProducts,
  applyPriceFilter,
  clearFilter,
} = productSlice.actions;

export default productSlice.reducer;
