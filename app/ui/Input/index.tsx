import styles from './Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fillWidth?: true
  mask?: 'currency'
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  fillWidth?: true
};

export function Input({ fillWidth, ...rest }: InputProps){
  const className = `
      ${styles.input}
      ${fillWidth ? styles.fillWidth : ''}
  `;

  return (
    <input 
        className={ className }
        { ...rest }
    />
  );
}

export function Select({ fillWidth, ...rest }: SelectProps){
  const className = `
      ${styles.input}
      ${fillWidth ? styles.fillWidth : ''}
  `;
  
  return (
    <select
      className={ className }
      { ...rest }
    ></select>
  );
}