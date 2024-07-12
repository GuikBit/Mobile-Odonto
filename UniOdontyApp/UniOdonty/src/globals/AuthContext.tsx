import { createContext, useState } from 'react';
import { ThemingLight } from './Theming';


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState({
    login: '',
    password: '', 
        
  });

  const [userLogged, setUserLogged] = useState({
    id: null,
    nome: null,
    login: null,
    senha: null,
    cpf: null,
    email: null,
    cargo: null,
    data_nasc: null,
    sexo: null,
    nivel: null,
    ramal: null,
  });

  // const login = async () => {      

  //   if(user.login !== null && user.password !== null && user.login !== '' && user.password !== ''){

  //     const response = await loginUser(user);

  //     if(response){
  //       setUserLogged({...userLogged,
  //         id: response.data.id_pessoa,
  //         nome: response.data.nome,
  //         login: response.data.login,
  //         senha: response.data.senha,
  //         cpf: response.data.cpf,
  //         email: response.data.email,
  //         cargo: response.data.cargo,
  //         data_nasc: response.data.data_nasc,
  //         sexo: response.data.sexo,
  //         nivel: response.data.nivel,
  //         ramal: response.data.ramal,
  //         logado: true,
  //       });
  //       return response;
  //     }else{
        
  //       return false;
  //     }        
  //   }   
  
  // const logout = async () => {
  //   setUserLogged({...userLogged, 
  //         id: null,
  //         nome: null ,
  //         login: null ,
  //         senha: null ,
  //         cpf: null ,
  //         email: null ,
  //         cargo: null ,
  //         data_nasc: null,
  //         sexo: null ,
  //         nivel: null ,
  //         ramal: null ,
  //         logado: false,
  //    });

  //   setUser({...user, login:'', password:''})

  //   removeToken();

  //   return true;
  // };


    return (
        <AuthContext.Provider
          value={{ user,userLogged, setUser, 
            //login, logout, 
            setUserLogged}}
        >
          {children}
        </AuthContext.Provider>
      );

}