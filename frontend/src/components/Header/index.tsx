import styles from './styles.module.css';
import { Link } from "react-router-dom";
import logoImg from '/LOGO2.png';
import { useContext } from 'react';

// ICONS
import { FiLogOut } from 'react-icons/fi';

// Context
import { AuthContext } from '../../contexts/AuthContext';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {

    const { signOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
            <Link to="/">
                <img src={logoImg} width={200} height={70} alt="Logo" />
            </Link>
            <nav className={styles.menuNav}>
                <Link to="/client" className={styles.linkNav}>Clientes</Link>
                <Link to="/product" className={styles.linkNav}>Produtos</Link>
                <Link to="/payment" className={styles.linkNav}>Pagamentos</Link>
                <Link to="/reminder" className={styles.linkNav}>Lembretes</Link>
                <Link to="/purchase" className={styles.linkNav}>Compras</Link>
                <Link to="/order" className={styles.linkNav}>Encomendas</Link>
                <button onClick={signOut}>
                    <FiLogOut color="#FFF" size={24} />
                </button>
            </nav>
        </div>
    </header>
  );
}
