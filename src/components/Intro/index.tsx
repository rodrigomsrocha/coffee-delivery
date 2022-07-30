import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import hero from '../../assets/hero.svg';
import styles from './Intro.module.scss';

export function Intro() {
  return (
    <div className={styles.introContainer}>
      <main className={styles.intro}>
        <div className={styles.title}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div className={styles.info}>
            <div>
              <div className={styles.icon}>
                <ShoppingCart weight="fill" size={16} />
              </div>
              Compra simples e segura
            </div>
            <div>
              <div className={styles.icon}>
                <Package weight="fill" size={16} />
              </div>
              Embalagem mantém o café intacto
            </div>
            <div>
              <div className={styles.icon}>
                <Timer weight="fill" size={16} />
              </div>
              Entrega rápida e rastreada
            </div>
            <div>
              <div className={styles.icon}>
                <Coffee weight="fill" size={16} />
              </div>
              O café chega fresquinho até você
            </div>
          </div>
        </div>
        <img src={hero} />
      </main>
    </div>
  );
}
