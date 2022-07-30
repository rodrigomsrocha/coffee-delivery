import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import styles from './DefaultLayout.module.scss';

export function DefaultLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
}
