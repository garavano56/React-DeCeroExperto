import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useEffect, useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useQuery } from "@tanstack/react-query"

export const HomePage = () => {
      
  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' | 'villains'
  >('all');

  const { data } = useQuery({
    queryKey: ['heroes'],
    queryFn: () =>  getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5,   // 5 minutos
  });

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
        <Tabs value={ activeTab }  className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger 
                value="all" 
                onClick={ () => setActiveTab('all') }
            >All Characters (16)</TabsTrigger>
            <TabsTrigger 
                value="favorites" 
                className="flex items-center gap-2"
                onClick={ () => setActiveTab('favorites') }
            >Favorites (3)</TabsTrigger>
            <TabsTrigger 
                value="heroes" 
                onClick={ () => setActiveTab('heroes') } 
            >Heroes (12)</TabsTrigger>
            <TabsTrigger 
                value="villains"  
                onClick={ () => setActiveTab('villains') }
            >Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value='all'>
            <HeroGrid />            {/* Mostrar todos los personajes */}
          </TabsContent>
          <TabsContent value='favorites'>
            <h1>Favoritos!!!</h1>   {/* Mostrar todos los personajes favoritos */}
            <HeroGrid /> 
          </TabsContent>
          <TabsContent value='heroes'>
            <h1>Héroes</h1>         {/* Mostrar todos los heroes*/}
            <HeroGrid /> 
          </TabsContent>
          <TabsContent value='villains'>
            <h1>Villanos</h1>       {/* Mostrar todos los villanos*/}
            <HeroGrid /> 
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={ 8 }  />
    </>
  )
}