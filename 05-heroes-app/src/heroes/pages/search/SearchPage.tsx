import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron 
          title="Búsqueda de SuperHéroes" 
          description="Descrubra, explora y administra super héroes y villanos." 
      />

      <CustomBreadcrumbs 
        currentPage="Buscador de héroes" 
        breadcrumbs={
          [ { label: 'Home1', to: '/' },
            { label: 'Home1', to: '/' },
            { label: 'Home1', to: '/' }
          ]
        }
      /> 
        

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />
    </>
  )
}

export default SearchPage;
