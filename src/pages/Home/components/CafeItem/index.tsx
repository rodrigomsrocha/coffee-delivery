import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import styles from './CafeItem.module.scss';

export function CafeItem() {
  return (
    <div className={styles.item}>
      <img src="/assets/latte.png" alt="" className={styles.img} />
      <div className={styles.tags}>
        <strong>Tradicional</strong>
      </div>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div className={styles.purchaseContainer}>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div className={styles.finishPurchase}>
          <div className={styles.increaseControl}>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </div>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
