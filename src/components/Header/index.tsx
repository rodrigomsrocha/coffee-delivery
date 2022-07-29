import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </header>
  );
}
