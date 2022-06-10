import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
    console.log('laskdfj')
    if (name === "") {
        return [];
    }
    name = name.toLowerCase();
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name) || hero.alter_ego.toLowerCase().includes(name) );
}