import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import styles from './CoffeeItem.module.scss';

interface CoffeeItemProps {
  coffee: {
    name: string;
    description: string;
    price: number;
    tags: string[];
    src: string;
  };
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  return (
    <div className={styles.item}>
      <img src={coffee.src} alt="" className={styles.img} />
      <div className={styles.tags}>
        {coffee.tags.map((tag) => (
          <strong key={tag}>{tag}</strong>
        ))}
      </div>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <div className={styles.purchaseContainer}>
        <span>
          R${' '}
          <strong>
            {new Intl.NumberFormat('pt-BR', { style: 'decimal', minimumFractionDigits: 2 }).format(
              coffee.price
            )}
          </strong>
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
