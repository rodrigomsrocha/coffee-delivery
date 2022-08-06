import styles from './AddressForm.module.scss';

export function AddressForm() {
  return (
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
  );
}
