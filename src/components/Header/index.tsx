import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useCoffeeStore } from '../../stores/coffe';
import styles from './Header.module.scss';

export function Header() {
  const cart = useCoffeeStore((state) => state.cart);

  const cartItemsQuantiy = cart.reduce((quantity, item) => {
    return (quantity += item.quantity);
  }, 0);

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
            {cartItemsQuantiy !== 0 && <span>{cartItemsQuantiy}</span>}
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
