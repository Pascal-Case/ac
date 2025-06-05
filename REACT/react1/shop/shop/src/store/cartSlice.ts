import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 타입 정의
export interface CartItem {
  id: number;
  name: string;
  count: number;
  price?: number;
}

export interface AddItemPayload {
  id: number;
  title: string;
  count?: number;
  price?: number;
}

export interface UpdateItemPayload {
  id: number;
  count?: number;
}

export interface SetItemCountPayload {
  id: number;
  count: number;
}

const initialState: CartItem[] = [
  { id: 0, name: 'White and Black', count: 2 },
  { id: 2, name: 'Grey Yordan', count: 1 },
];

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increamentItem: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const item = state.find((item) => item.id === id);

      if (item) {
        item.count++;
      } else {
        console.warn(`Item with id ${id} not found in cart`);
      }
    },

    deleteItem: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id == id);

      if (index !== -1) state.splice(index, 1);
    },

    changeStock(state, action) {
      const index = state.findIndex((item) => item.id == action.payload);
      state[index].count++;
    },
    addCart: (state, action: PayloadAction<AddItemPayload>) => {
      const { id, count = 1, price } = action.payload;
      const name = action.payload.title;

      if (count <= 0) {
        return;
      }

      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.count += count;
      } else {
        const newItem: CartItem = { id, name, count };
        state.push(newItem);
      }
    },
  },
});

export let { increamentItem, changeStock, addCart, deleteItem } = cart.actions;

export default cart;
