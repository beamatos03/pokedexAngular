

export interface Poke
{
id: number;
 name :string;
 height : number;
 weight: number;
 types:{
  type: {
      name: string
  }
}[];
stats:{
    base_stat: number,
    stat: {
    name: string
    }}[];

abilities:{
  ability:{
    name: string;
  }
}[];
}
