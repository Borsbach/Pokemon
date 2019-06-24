"use strict";
let player1Exp = 0;
let player2Exp = 0;

const thePokemon = [];

const getRandomIntInclusive = (min, max)=>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+ min;
}
const randomPokemon = getRandomIntInclusive(1, 250);
const randomPokemon2 = getRandomIntInclusive(251, 500);


fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
.then(res => res.json())
.then((data)=> {
  thePokemon.push(data);
  const pokemon = document.getElementById("pokemon");
  pokemon.src = data.sprites.front_default;
  player1Exp = data.base_experience;
  console.log(player1Exp)
})

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon2}`)
.then(res => res.json())
.then((data)=> {
  thePokemon.push(data);
  const pokemon = document.getElementById("pokemon2");
  pokemon.src = data.sprites.front_default;
  player2Exp = data.base_experience;
  console.log(player2Exp)
})

const compareExp = (exp1, exp2) => {
  const winner = document.getElementById("winner");
    if(exp1 > exp2) {
      winner.src = thePokemon[0].sprites.front_default
    } else {
      winner.src = thePokemon[1].sprites.front_default
    }
}

setTimeout(() => {
  return compareExp(player1Exp, player2Exp)
}, 3000)
