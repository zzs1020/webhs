import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle.component';
import { WeaponComponent } from './weapon/weapon.component';
import { HeroComponent } from './hero/hero.component';
import { PowerComponent } from './power/power.component';
import { DeckComponent } from './deck/deck.component';
import { TakeTurnComponent } from './take-turn/take-turn.component';
import { SideComponent } from './side/side.component';
import { HistoryComponent } from './history/history.component';
import { ManaComponent } from './mana/mana.component';



@NgModule({
  declarations: [
    BattleComponent,
    WeaponComponent,
    HeroComponent,
    PowerComponent,
    DeckComponent,
    TakeTurnComponent,
    SideComponent,
    HistoryComponent,
    ManaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BattleComponent
  ]
})
export class BattleModule { }
