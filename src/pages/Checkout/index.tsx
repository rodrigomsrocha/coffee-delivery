import { yupResolver } from '@hookform/resolvers/yup';
import { CurrencyDollarSimple, MapPinLine } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './Checkout.module.scss';
import { AddressForm } from './components/AddressForm';
import { CoffeItem } from './components/CoffeeItem';
import { PaymentForm } from './components/PaymentForm';

interface AddressFormData {
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const schema = yup.object({
  cep: yup
    .string()
    .required('CEP é obrigatório')
    .matches(/^[0-9]{5}-[0-9]{3}$/, 'CEP Inválido'),
  rua: yup.string().min(3).required('Rua é obrigatória'),
  numero: yup.number().required('Número é obrigatório'),
  complemento: yup.string(),
  bairro: yup.string().required('Bairro é obrigatório'),
  cidade: yup.string().required('Cidade é obrigatória'),
  uf: yup
    .string()
    .required('UF é obrigatória')
    .matches(
      /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/
    )
});

export function Checkout() {
  const addressForm = useForm<AddressFormData>({
    resolver: yupResolver(schema)
  });
  const { handleSubmit } = addressForm;

  function handleConfirmRequest(data: AddressFormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleConfirmRequest)} className={styles.checkoutContainer}>
      <div className={styles.formContainer}>
        <h3>Complete seu pedido</h3>
        <div className={styles.addressFormContainer}>
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>
        </div>
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
    </form>
  );
}
