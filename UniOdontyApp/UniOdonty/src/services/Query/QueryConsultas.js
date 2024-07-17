import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGetAuth } from '../Api/ApiAuth';
import { apiGetByIdAuth, apiPostAuth } from '../Api/ApiConsultas';


export function useGetConsultasAuth() {
  return useQuery({
    queryKey: ['getConsultasAuth'],
    queryFn: async () => {
      return await apiGetAuth('consulta');
    },
  });
}

export function useGetConsultaByIdAuth(id) {
  return useQuery({
    queryKey: ['getConsultaByIdAuth', id],
    queryFn: async () => {
      return await apiGetByIdAuth('consulta', id);
    },
  });
}

export function usePostConsultaAuth() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (consulta) => {
      const novo = await apiPostAuth('consulta', consulta);
      queryClient.invalidateQueries('getConsultasAuth');
      return novo;
    },
  });
}
