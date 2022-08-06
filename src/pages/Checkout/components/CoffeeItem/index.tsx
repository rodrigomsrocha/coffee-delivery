import { Minus, Plus, Trash } from 'phosphor-react';
import styles from './CoffeeItem.module.scss';

export function CoffeItem() {
  return (
    <div className={styles.item}>
      <img src="/assets/arabe.png" className={styles.img} />
      <div className={styles.info}>
        <span>Expresso Tradicional</span>
        <div className={styles.controls}>
          <div className={styles.amountControls}>
            <button>
              <Minus size={14} />
            </button>
            <span>0</span>
            <button>
              <Plus size={14} />
            </button>
          </div>
          <button>
            <Trash size={16} />
            REMOVER
          </button>
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </div>
  );
}
