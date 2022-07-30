import { CafeItem } from './components/CafeItem';
import { Intro } from './components/Intro';
import styles from './Home.module.scss';

export function Home() {
  return (
    <>
      <Intro />
      <div className={styles.homeContainer}>
        <h1>Nossos cafés</h1>
        <main className={styles.coffeesContainer}>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <CafeItem key={item} />
          ))}
        </main>
      </div>
    </>
  );
}
