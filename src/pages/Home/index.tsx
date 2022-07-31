import { useEffect } from 'react';
import { useCoffeeStore } from '../../stores/coffe';
import { CoffeeItem } from './components/CoffeeItem';
import { Intro } from './components/Intro';
import styles from './Home.module.scss';

export function Home() {
  const coffees = useCoffeeStore((state) => state.coffees);
  const fetchCoffees = useCoffeeStore((state) => state.fetch);

  useEffect(() => {
    fetchCoffees();
  }, []);

  return (
    <>
      <Intro />
      <div className={styles.homeContainer}>
        <h1>Nossos cafés</h1>
        <main className={styles.coffeesContainer}>
          {coffees.map((coffee) => (
            <CoffeeItem key={coffee.id} coffee={coffee} />
          ))}
        </main>
      </div>
    </>
  );
}
