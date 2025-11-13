import { Badge } from "@/components/ui/badge"
import { Heart, Users, Zap} from "lucide-react"
import { HeroStatsCard } from "./HeroStatsCard"
import { getSummaryAction } from "../actions/get-summary.action";
import { useQuery } from "@tanstack/react-query";
import { useHeroSummary } from "../hooks/useHeroSummary";


export const HeroStats = () => {

    const { data: summary } = useHeroSummary()

    // const { data: summary} = useQuery({    // Renombro lo que retorna con el nombre "summary"
    //     queryKey: ['summary-information'],
    //     queryFn: getSummaryAction,     // () =>  getSummaryAction(), 
    //     staleTime: 1000 * 60 * 5,   // 5 minutos
    // });

    return (
    <>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            <HeroStatsCard 
                title="Total de personajes"
                icon={<Users className="h-4 w-4 text-muted-foreground" />}
                >   
                <div className="text-2xl font-bold">
                    { summary?.totalHeroes }
                </div>
                <div className="flex gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                        { summary?.heroCount } Heroes
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                        { summary?.villainCount } Villains
                    </Badge>
                </div>                                        
            </HeroStatsCard>
        
            <HeroStatsCard
                title="Favoritos"
                icon={<Heart className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-2xl font-bold text-red-600">3</div>
                <p className="text-xs text-muted-foreground">18.8% of total</p>
            </HeroStatsCard>

            <HeroStatsCard
                title="Fuerte"
                icon={<Zap className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-lg font-bold">
                    { summary?.strongestHero.alias }
                </div>
                <p className="text-xs text-muted-foreground">
                    Strength: { summary?.strongestHero.strength }/10
                </p>
            </HeroStatsCard>

            <HeroStatsCard
                title="Inteligente"
                icon={<Heart className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-lg font-bold">
                    { summary?.smartestHero.alias }
                </div>
                <p className="text-xs text-muted-foreground">
                    Intelligence: { summary?.smartestHero.intelligence }/10
                </p>
            </HeroStatsCard>

        </div>
    </>
    )
}
