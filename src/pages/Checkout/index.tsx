import { CurrencyDollarSimple, MapPinLine } from 'phosphor-react';
import styles from './Checkout.module.scss';
import { AddressForm } from './components/AddressForm';
import { CoffeItem } from './components/CoffeeItem';
import { PaymentForm } from './components/PaymentForm';

export function Checkout() {
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.formContainer}>
        <h3>Complete seu pedido</h3>
        <form className={styles.addressFormContainer}>
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <AddressForm />
        </form>
        <div className={styles.paymentFormContainer}>
          <header>
            <CurrencyDollarSimple size={22} />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>
          <PaymentForm />
        </div>
      </div>
      <div className={styles.purchasePreviewContainer}>
        <h3>Cafés selecionados</h3>
        <div className={styles.purchasePreview}>
          <CoffeItem />
          <div className={styles.prices}>
            <div className={styles.labels}>
              <span>Total itens</span>
              <span>Entrega</span>
              <strong>Total</strong>
            </div>
            <div className={styles.content}>
              <span>R$ 29,70</span>
              <span>R$ 3,50</span>
              <strong>R$ 33,20</strong>
            </div>
          </div>
          <button className={styles.confirmBtn}>CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </div>
  );
}
