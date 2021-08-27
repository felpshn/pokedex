import { ReactNode, Dispatch, SetStateAction, MutableRefObject } from 'react';

export interface IPokemonsProviderProps {
  children: ReactNode;
}

export interface IPokemonDetailsCardTemplateProps {
  pokemonId: string;
}

export interface IPokemonProps {
  pokemons: IPokemonEssentials[];
  pokemon: IPokemonParsedStats;
  getPokemons: () => Promise<void>;
  getPokemonStatsById: (id: string | number) => Promise<void>;
  isFirstLoad: boolean;
  setIsFirstLoad: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  renderCount: MutableRefObject<number>;
}

export interface IPokemonEssentials {
  name: string;
  dexIndex: number;
  url: string;
  artworkUrl: string;
}

export interface IPokemonRawStats {
  name: string;
  id: number;
  artworkUrl: string;
  height: number;
  weight: number;
  capture_rate: number;
  gender_rate: number;
  base_happiness: number;
  base_experience: number;
  hatch_counter: number;
  is_legendary: boolean;
  is_mythical: boolean;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  habitat: {
    name: string;
  };
}

export interface IPokemonParsedStats {
  name: string;
  hp: number;
  dexIndex: number;
  artworkUrl: string;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
  types: string[];
  abilities: string[];
  height: number;
  weight: number;
  genderRatioFemale: number;
  genderRatioMale: number;
  captureRate: number;
  isLegendary: boolean;
  isMythical: boolean;
  hatchCounter: number;
  baseHappiness: number;
  baseExperience: number;
  habitat: string;
}
