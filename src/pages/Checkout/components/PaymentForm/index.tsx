import { Bank, CreditCard, Money } from 'phosphor-react';
import styles from './PaymentForm.module.scss';

export function PaymentForm() {
  return (
    <div className={styles.paymentMethods}>
      <button>
        <CreditCard size={16} />
        CARTÃO DE CRÉDITO
      </button>
      <button>
        <Bank size={16} />
        CARTÃO DE DÉBITO
      </button>
      <button className={styles.active}>
        <Money size={16} />
        DINHEIRO
      </button>
    </div>
  );
}
