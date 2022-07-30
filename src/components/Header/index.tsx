import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <img src="/assets/logo.svg" />
        <nav>
          <span>
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </span>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
