import create from 'zustand';
import { api } from '../services/api';

type Coffee = {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  src: string;
};

type Cart = {
  id: number;
  quantity: number;
};

interface CoffeeState {
  coffees: Coffee[];
  cart: Cart[];
  fetch: () => Promise<void>;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
}

export const useCoffeeStore = create<CoffeeState>((set, get) => ({
  coffees: [],
  cart: [],
  fetch: async () => {
    try {
      const { data } = await api.get('/');
      set({ coffees: data });
    } catch (err) {
      set(() => ({ coffees: [] }));
    }
  },
  increaseItemQuantity: (id) => {
    const cart = get().cart;
    const coffeeIsAlreadyInCart = cart.find((item) => item.id === id);
    const currentQuantity = coffeeIsAlreadyInCart ? coffeeIsAlreadyInCart.quantity : 0;
    const quantity = currentQuantity + 1;
    if (coffeeIsAlreadyInCart) {
      coffeeIsAlreadyInCart.quantity = quantity;
    } else {
      cart.push({ id, quantity });
    }
    set(() => ({ cart: [...cart] }));
  },
  decreaseItemQuantity: (id) => {
    const cart = get().cart;
    const coffeeIsAlreadyInCart = cart.find((item) => item.id === id);
    const currentQuantity = coffeeIsAlreadyInCart ? coffeeIsAlreadyInCart.quantity : 0;
    const quantity = currentQuantity - 1;
    if (quantity < 0) return;
    if (coffeeIsAlreadyInCart) {
      coffeeIsAlreadyInCart.quantity = quantity;
    } else {
      cart.push({ id, quantity });
    }
    set(() => ({ cart: [...cart] }));
  }
}));
