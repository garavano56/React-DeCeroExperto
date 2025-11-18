import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

export const usePaginatedHero = ( page: number, limit: number, category = 'all') => {
  return useQuery({    // Renombro lo que retorna con el nombre "HeroesResponse"
    queryKey: ['heroes', { page, limit, category }],
    queryFn: () =>  getHeroesByPageAction(+page, +limit, category),  // + lo transforma de un string a un número
    staleTime: 1000 * 60 * 5,   // 5 minutos
  });
}