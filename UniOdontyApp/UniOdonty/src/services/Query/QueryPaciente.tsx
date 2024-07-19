import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGetAuth } from '../Api/ApiAuth';
import { apiGetByIdAuth, apiGetConsultasByPacienteIdAuth, apiPost } from '../Api/ApiPaciente';


export function useGetPacientesAuth() {
  return useQuery({
    queryKey: ['getPacientesAuth'],
    queryFn: async () => {
      return await apiGetAuth('paciente');
    },
  });
}

export function useGetPacienteByIdAuth(id: any) {
  return useQuery({
    queryKey: ['getPacienteByIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('paciente', id);
    },
    
  });
}


export function usePostPaciente() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (paciente) => {
      const novo = apiPost('paciente', paciente);
      queryClient.invalidateQueries('getPacientesAuth');

      return novo;
    },
  });
}

export function useGetConsultaByPacienteIdAuth(id: any) {
 
  return useQuery({
    queryKey: ['getConsultaByPacienteIdAuth', id],
    queryFn: async () => {
      return await apiGetConsultasByPacienteIdAuth('paciente/consultas', id);
    },
  });
}
// export function useGetConsultaByPacienteIdAuth(pacienteId) {
//   return useQuery({
//     queryKey: ['getConsultaByPacienteIdAuth', pacienteId],
//     queryFn: async () => {
//       try {
//         const data = await apiGetConsultasByPacienteIdAuth('paciente/consultas', pacienteId);
//         console.log(data) 
//         return data;
//       } catch (error) {
//         return { error: 'Erro ao obter dados da consulta' };
//       }
//     },
//   });
// }


