import { useContext, FormEvent, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.css';
import { Input } from "../../components/ui/Input/input";
import { Button } from "../../components/ui/Button";
import logoImg from '/LOGO2.png';
import { AuthContext } from '../../contexts/AuthContext';

export interface ILoginProps {}

export default function Login({}: ILoginProps) {
  const { signIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    if (username === '') {
      toast.error('Preencha o nome de Usuário!', {
        position: toast.POSITION.TOP_RIGHT
      });

      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    if (password === '') {
      toast.error('Preencha a senha de Usuário!', {
        position: toast.POSITION.TOP_RIGHT
      });

      if (inputRef2.current) {
        inputRef2.current.focus();
      }
      return;
    }

    setLoading(true);

    let data = {
      username,
      password
    };

    try {
      await signIn(data);
    } catch (error) {
      toast.error('Erro ao fazer login!');
    }

    setLoading(false);
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <img className={styles.logo} src={logoImg} alt="logo" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Usuário"
              name='username'
              autoFocus={true}
              autoComplete='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={inputRef}
            />
            <Input
              type="password"
              name='password'
              placeholder="Senha"
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={inputRef2}
            />
            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
