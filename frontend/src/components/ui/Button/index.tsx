
import { ReactNode, ButtonHTMLAttributes } from 'react';

//CSS
import styles from './styles.module.css';

//ICONS
import { FaSpinner } from 'react-icons/fa'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children: ReactNode,
}

export function Button ({ children, loading, ...rest }: IButtonProps) {
  return (
    <button 
        className={styles.button}
        disabled={loading}
        {...rest}
    >
        {loading? (
            <FaSpinner color="#FFF" size={16}/>
        ):(
            <a className={styles.buttonText}>
                {children}
            </a>
        )}
    </button>
  );
}
