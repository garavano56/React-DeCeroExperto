import { useQuery } from "@tanstack/react-query";
import { getSummaryAction } from "../actions/get-summary.action";

export const useHeroSummary = () => {

    return useQuery({    // Renombro lo que retorna con el nombre "summary"
        queryKey: ['summary-information'],
        queryFn: getSummaryAction,     // () =>  getSummaryAction(), 
        staleTime: 1000 * 60 * 5,   // 5 minutos
    });

     
}
