import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash
} from 'phosphor-react';
import styles from './Checkout.module.scss';

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
          <div className={styles.addressForm}>
            <label>
              <input placeholder="CEP" type="text" />
            </label>
            <label>
              <input placeholder="Rua" type="text" />
            </label>
            <label>
              <input placeholder="Número" type="text" />
            </label>
            <label>
              <input placeholder="Complemento" type="text" />
              <span>Opicional</span>
            </label>
            <label>
              <input placeholder="Bairro" type="text" />
            </label>
            <label>
              <input placeholder="Cidade" type="text" />
            </label>
            <label>
              <input placeholder="UF" type="text" />
            </label>
          </div>
        </form>
        <div className={styles.paymentFormContainer}>
          <header>
            <CurrencyDollarSimple size={22} />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </header>
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
        </div>
      </div>
      <div className={styles.purchasePreviewContainer}>
        <h3>Cafés selecionados</h3>
        <div className={styles.purchasePreview}>
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
