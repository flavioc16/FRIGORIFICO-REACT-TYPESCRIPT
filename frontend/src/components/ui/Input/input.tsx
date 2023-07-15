
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.css';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    return <input className={styles.input} ref={ref} {...props} />;
  });

export const TextArea = ({ ...rest }: ITextAreaProps) => {
  return <textarea className={styles.input} {...rest}></textarea>;
};
