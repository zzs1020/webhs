import { StatusEnum } from './../enum/status.enum';
import { SpeciesEnum } from '../enum/species.enum';
import { RarityEnum } from '../enum/rarity.enum';
export class Card {
  img: string;
  desp: string;
  back: string;
  rarity: RarityEnum;
  golden: boolean;

  cost: number;
  extraCost: number;
  damage: number;
  extraDamage: number;
  health: number;
  extraHealth: number;
  effects: {type: any}[]
  extraSpellDamage:number;
  status: StatusEnum[];
  species: SpeciesEnum;

  startAnimation() {}
  deathAnimation() {}

  spell() {
    // 
  }
}