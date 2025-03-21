import styles from './RadioInput.module.css';

type InputProps =  React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string
};

export default function RadioInput({ 
  id, 
  labelText,
  name, 
  ...rest 
}: InputProps) {
  return (
    <label className={ styles.radioInputLabel } htmlFor={ id }>
      { labelText }

      <input 
        className={ styles.radioInput }
        id={ id }
        name={ name }
        {...rest}
        type='radio'
      />
    </label>
  );
}