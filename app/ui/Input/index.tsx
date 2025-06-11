import styles from './Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fillWidth?: true
};

export default function Input({ fillWidth, ...rest }: InputProps) {
  const className = `
      ${styles.input}
      ${fillWidth ? styles.fillWidth : ''}
  `;
  return (
    <input 
        className={ className }
        {...rest}
    />
  );
}