import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </nav>
    </header>
  );
}
