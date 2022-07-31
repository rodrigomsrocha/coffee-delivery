import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { useCoffeeStore } from '../../../../stores/coffe';
import styles from './CoffeeItem.module.scss';

interface CoffeeItemProps {
  coffee: {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: string[];
    src: string;
  };
}

interface CartItemsQuantiy {
  [key: number]: number;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const increaseItemQuantity = useCoffeeStore((state) => state.increaseItemQuantity);
  const decreaseItemQuantity = useCoffeeStore((state) => state.decreaseItemQuantity);
  const cart = useCoffeeStore((state) => state.cart);

  const cartItemsQuantiy = cart.reduce((sumAmount, item) => {
    sumAmount[item.id] = item.quantity;
    return sumAmount;
  }, {} as CartItemsQuantiy);

  function handleIncreaseQuantity() {
    increaseItemQuantity(coffee.id);
  }

  function handleDecreaseQuantity() {
    decreaseItemQuantity(coffee.id);
  }

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
            <button onClick={handleDecreaseQuantity}>
              <Minus size={14} />
            </button>
            <span>{cartItemsQuantiy[coffee.id] || 0}</span>
            <button onClick={handleIncreaseQuantity}>
              <Plus size={14} />
            </button>
          </div>
          <button>
            <ShoppingCart onClick={handleIncreaseQuantity} size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
