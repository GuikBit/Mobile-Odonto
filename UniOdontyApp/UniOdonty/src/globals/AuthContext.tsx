import { createContext, useState } from 'react';
import { apiLogin } from '../services/Api/ApiAuth';
import { removeToken, setToken } from '../hooks/TokenStore';


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState({
    login: 'admin',
    password: '123', 
        
  });

  const [userLogged, setUserLogged] = useState({
      id: null,
      nome: null,
      email: null,
      login: null,
      senha: null,
      role: null,
      cpf: null,
      dataNascimento: null,
      dataCadastro: null,
      telefone: null,
      ativo: null,
      fotoCadastro: null,
      numPasta: null,
      organizacaoId: null,
      consultas: {},
      responsavelId: {},
      anamneseId: {},
      enderecoId: {},
  });

  const login = async () => {      
    console.log(user)
    if(user.login !== null && user.password !== null && user.login !== '' && user.password !== ''){

      const response = await apiLogin(user);

      if(response){
        const token = response.result;
        setToken(token);  
        setUserLogged({...userLogged,
          id: response.usuario.id,
          nome: response.usuario.nome,
          email: response.usuario.email,
          login: response.usuario.login,
          senha: response.usuario.senha,
          role: response.usuario.role,
          cpf: response.usuario.cpf,
          dataNascimento: response.usuario.dataNascimento,
          dataCadastro: response.usuario.dataCadastro,
          telefone: response.usuario.telefone,
          ativo: response.usuario.ativo,
          fotoCadastro: response.usuario.fotoCadastro,
          numPasta: response.usuario.numPasta,
          organizacaoId: response.usuario.organizacaoId,
          consultas: response.usuario.consultas,
          responsavelId: response.usuario.responsavelId,
          anamneseId: response.usuario.anamneseId,
          enderecoId: response.usuario.enderecoId,
        });
        return true;
      }else{        
        return false;
      }        
    }   
  

  };

  const logout = async () => {
    setUserLogged({...userLogged, 
      id: null,
      nome: null,
      email: null,
      login: null,
      senha: null,
      role: null,
      cpf: null,
      dataNascimento: null,
      dataCadastro: null,
      telefone: null,
      ativo: null,
      fotoCadastro: null,
      numPasta: null,
      organizacaoId: null,
      consultas: {},
      responsavelId: {},
      anamneseId: {},
      enderecoId: {},
    });

    setUser({...user, login:'', password:''})

    removeToken();

    return true;
  };

    return (
        <AuthContext.Provider
          value={{ 
            user,
            setUser,
            userLogged, 
            setUserLogged,
            login, 
            logout,             
          }}
        >
          {children}
        </AuthContext.Provider>
      );

}