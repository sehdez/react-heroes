import { useMemo } from "react";

import { HeroCard } from "./HeroCard";

import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 m-1  ">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} { ...hero } />
                ))  
            }
    </div>
  )
}
