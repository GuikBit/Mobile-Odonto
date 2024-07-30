// validations.ts
export const handlerSenha = (isSecure: boolean, setIsSecure: (value: boolean) => void) => {
    return () => setIsSecure(!isSecure);
  };
  
  export const hasErrorsEmail = (email: string) => {
    return email === '' || !email.includes('@');
  };
  
  export const hasErrorSenha = (senha: string) => {
    return senha === '' || senha.length < 8; // Supondo que a senha deve ter pelo menos 8 caracteres
  };
  
  export const hasErrorLogin = (login: string) => {
    return login === '' || login ===null; 
  };
  
  export const hasErrorNome = (nome: string) => {
    return nome === '' || null; 
  };
  
  export const hasErrorCPF = (cpf: string) => {

    return cpf === '' || null; 
  };
  
  export const hasErrorTelefone = (telefone: string) => {

    return telefone === '' || null; 
  };
  
  export const hasErrorDtNasc = (dtNasc: string) => {

    return dtNasc === '' || null;
  };

  export const hasErrorCep = (cep: string) => {

    return cep === '' || null;
  };
  