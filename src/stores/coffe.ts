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

interface CoffeeState {
  coffees: Coffee[];
  fetch: () => Promise<void>;
}

export const useCoffeeStore = create<CoffeeState>((set) => ({
  coffees: [],
  fetch: async () => {
    try {
      const { data } = await api.get('/');
      set({ coffees: data });
    } catch (err) {
      set(() => ({ coffees: [] }));
    }
  }
}));
