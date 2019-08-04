import { HeroClassEnum } from './../enum/hero-class.enum';
import { PowerEnum } from '../enum/power.enum';
import { StatusEnum } from '../enum/status.enum';

export class Hero {
  health: number;
  damage: number;
  extraDamage: number;
  armor: number;
  status: StatusEnum[];
  power: PowerEnum;
  heroClass: HeroClassEnum;
  name: string;
  img: string;
}