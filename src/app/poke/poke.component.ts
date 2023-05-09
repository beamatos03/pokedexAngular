import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Poke } from '../poke';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit{



  constructor(private PokeService: PokeService){}


  ngOnInit(): void {
    this.getPokemon();
  }

  id : number = 1;

  number = this.id;

  increase(){
    if(this.id<1008){
      this.id++;
    }
    else{
      this.id = 1;
    }
    this.getPokemon();

  }

  decrease(){
    if(this.id>1){
      this.id--;
    }
    else{
      this.id = 1008;
    }
    this.getPokemon();

  }

  getPokemon() {
    this.PokeService.getPoke(this.id).subscribe(
      {
      next : poke => this.poke = poke
    }
    );
  }

  poke : Poke = {} as Poke;


  pegarImagem(){
   return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }


  getType(): string []{

    let typeNames: string[] = [];
   this.poke.types.map(t => {

      typeNames.push(t.type.name);

  })

  return typeNames;
}


getAbilities(): string []{

  let typeAbilities: string[] = [];
 this.poke.abilities.map(t => {

    typeAbilities.push(t.ability.name);

})
return typeAbilities;
}

getStatNames(): string []{

  let statNames: string[] = [];
 this.poke.stats.map(t => {

    statNames.push(t.stat.name);

})
return statNames;
}

getStatNum(): string []{

  let statNum: string[] = [];
 this.poke.stats.map(t => {

    statNum.push(t.base_stat + "px");

})
return statNum;
}

getIcon(type: string){
  return `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type}.svg`
}

formatarNum(){
  let number = this.id.toString();
  while(number.length < 4){
    number = '0' + number;
  }

  return number;
}

}
