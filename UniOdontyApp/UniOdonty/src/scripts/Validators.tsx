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
    // Supondo que o CPF deve ter 11 dígitos
    const cpfRegex = /^\d{11}$/;
    return !cpfRegex.test(cpf);
  };
  
  export const hasErrorTelefone = (telefone: string) => {
    // Supondo que o telefone deve ter pelo menos 10 dígitos
    const telefoneRegex = /^\d{10,11}$/;
    return !telefoneRegex.test(telefone);
  };
  
  export const hasErrorDtNasc = (dtNasc: string) => {
    // Supondo que a data de nascimento deve estar no formato dd/mm/aaaa
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return !dateRegex.test(dtNasc);
  };
  