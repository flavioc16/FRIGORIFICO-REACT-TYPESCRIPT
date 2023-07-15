import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/apiClient';

import { AxiosError } from 'axios';

import { toast } from 'react-toastify';

type AuthContextData = {
  user: UserProps | undefined;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
};

export type UserProps = {
  id: string;
  name: string;
  username: string;
};

type SignInProps = {
  username: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function removeAccessToken() {
  try {
    localStorage.removeItem('@access_token');
  } catch {
    console.log('Erro ao remover access token');
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  useEffect(() => {

    const accessToken = localStorage.getItem('@access_token');
    
    if(accessToken){
      setIsAuthenticated(true);
      api.get('/me').then(response =>{
        const { id, name, username } = response.data;
       
        setUser({
          id, 
          name, 
          username
        })
        
      }).catch(()=>{
        signOut();
      })
    }

  }, []);
  
  async function signIn({ username, password }: SignInProps) {
    try {
      const response = await api.post('/session', {
        username,
        password,
      });
  
      const { id, name, token } = response.data;
  
      localStorage.setItem('@access_token', token);
  
      const user = {
        id,
        name,
        username,
      };
  
      setUser(user);
      setIsAuthenticated(true);
  
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
  
      toast.success(`Seja bem vindo ${username}`)

    } catch (error: AxiosError| any) {
      if (error.response?.data.error) {
        toast.error('Usuário ou senha incorretos');
      } else {
        toast.error('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
      }
      console.log('Erro ao acessar', error.response?.data);
    }
  }
  
  function signOut() {
    try {
      removeAccessToken();
    } catch {
      console.log('Erro ao deslogar');
    }
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
