import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHerosAction } from "@/heroes/actions/search-heros.action";

export const SearchPage = () => {

  const [ searchParams ] = useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHerosAction({ name, strength }),
    staleTime: 1000 * 60 * 5    // 5 minutos
  })

  return (
    <>
      <CustomJumbotron 
          title="Búsqueda de SuperHéroes" 
          description="Descrubra, explora y administra super héroes y villanos." 
      />

      <CustomBreadcrumbs 
        currentPage="Buscador de héroes" 
        // breadcrumbs={
        //   [ { label: 'Home1', to: '/' },
        //     { label: 'Home1', to: '/' },
        //     { label: 'Home1', to: '/' }
        //   ]
        // }
      /> 
        

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />

      <HeroGrid heroes={ heroes }  />

    </>
  )
}

export default SearchPage;
