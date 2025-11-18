import { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { getSummaryAction } from "@/heroes/actions/get-summary.action"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"

// Afuera para que no se cree el arreglo cada vez que se reenderiza el componente
const validTabs = ['all', 'favorites', 'heroes', 'villains'];

export const HomePage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';

  const selectedTab = validTabs.includes(activeTab) ? activeTab : 'all';    // Por si ingresan cualquier cosa en el tab
  const page = searchParams.get('page') ?? 1;
  const limit = searchParams.get('limit') ?? 6;
  const category = searchParams.get('category') ?? 'all';


  // Se puede hacer así pero al no ser un proceso tan pesado conviene simplicidad
  // const selectedTab = useMemo(() => {
  //   const validTabs = ['all', 'favorites', 'heroes', 'villains'];
  //   return validTabs.includes(activeTab) ? activeTab : 'all'
  // }, [activeTab])

  console.log({searchParams});
      
  // const [activeTab, setActiveTab] = useState<
  //   'all' | 'favorites' | 'heroes' | 'villains'
  // >('all');

  const { data: HeroesResponse } = usePaginatedHero(+page, +limit, category);
  const { data: summary } = useHeroSummary();

  // const { data: HeroesResponse} = useQuery({    // Renombro lo que retorna con el nombre "HeroesResponse"
  //   queryKey: ['heroes', { page, limit }],
  //   queryFn: () =>  getHeroesByPageAction(+page, +limit),  // + lo transforma de un string a un número
  //   staleTime: 1000 * 60 * 5,   // 5 minutos
  // });

  // const { data: summary} = useQuery({    // Renombro lo que retorna con el nombre "summary"
  //     queryKey: ['summary-information'],
  //     queryFn: getSummaryAction,     // () =>  getSummaryAction(), 
  //     staleTime: 1000 * 60 * 5,   // 5 minutos
  // });

  // console.log({HeroesResponse});

  // useEffect(() => {
  //   getHeroesByPage().then()
  // }, []);
  
  return (
    <>
        {/* Header */}
        <CustomJumbotron 
            title="Universo de SuperHéroes" 
            description="Descrubra, explora y administra super héroes y villanos." 
        />

        <CustomBreadcrumbs currentPage="Super Héroes"/>

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={ selectedTab }  className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger 
                value="all" 
                onClick={ () => 
                  setSearchParams( (prev) => {
                    prev.set('tab', 'all');     // Para ver en que tab estoy posicionado si pasan URL
                    prev.set('category', 'all');
                    prev.set('page', '1');
                    return prev;
                  }) 
                }
            >All Characters ({ summary?.totalHeroes })</TabsTrigger>
            <TabsTrigger 
                value="favorites" 
                className="flex items-center gap-2"
                onClick={ () => 
                  setSearchParams( (prev) => {
                    prev.set('tab', 'favorites');
                    return prev;
                  }) 
                }
            >Favorites (3)</TabsTrigger>

            <TabsTrigger 
                value="heroes" 
                onClick={ () => 
                  setSearchParams( (prev) => {
                    prev.set('tab', 'heroes');
                    prev.set('category', 'hero');
                    prev.set('page', '1');
                    return prev;
                  }) 
                }
            >Heroes ({ summary?.heroCount })</TabsTrigger>

            <TabsTrigger 
                value="villains"  
                onClick={ () => 
                  setSearchParams( (prev) => {
                    prev.set('tab', 'villains');
                    prev.set('category', 'villain');
                    prev.set('page', '1');
                    return prev;
                  }) 
                }
            >Villains ({ summary?.villainCount })</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>   {/* Mostrar todos los personajes */}
            <HeroGrid heroes={ HeroesResponse?.heroes ?? [] } />            
          </TabsContent>
          <TabsContent value='favorites'>
            <h1>Favoritos!!!</h1>   {/* Mostrar todos los personajes favoritos */}
            <HeroGrid heroes={ [] }  /> 
          </TabsContent>
          <TabsContent value='heroes'>
            <h1>Héroes</h1>         {/* Mostrar todos los heroes*/}
            <HeroGrid heroes={ HeroesResponse?.heroes ?? [] }  /> 
          </TabsContent>
          <TabsContent value='villains'>
            <h1>Villanos</h1>       {/* Mostrar todos los villanos*/}
            <HeroGrid heroes={ HeroesResponse?.heroes ?? [] }  /> 
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={ HeroesResponse?.pages ?? 1 }  />
    </>
  )
}