import { useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';
import styles from './AddressForm.module.scss';

export function AddressForm() {
  const { register } = useFormContext();
  return (
    <div className={styles.addressForm}>
      <label>
        <InputMask mask="99999-999" {...register('cep')} placeholder="CEP" type="text" />
      </label>
      <label>
        <input {...register('rua')} placeholder="Rua" type="text" />
      </label>
      <label>
        <input {...register('numero')} placeholder="Número" type="text" />
      </label>
      <label>
        <input {...register('complemento')} placeholder="Complemento" type="text" />
        <span>Opicional</span>
      </label>
      <label>
        <input {...register('bairro')} placeholder="Bairro" type="text" />
      </label>
      <label>
        <input {...register('cidade')} placeholder="Cidade" type="text" />
      </label>
      <label>
        <input {...register('uf')} placeholder="UF" type="text" />
      </label>
    </div>
  );
}
