import "./style.css";

interface GrupoMusical {
  nombre: string;
  añoFundacion: number;
  activo: boolean;
  generoMusical: string;
}

const rock = "🎸 Rock";
const popRock = "🎵 Pop Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const theBeatles: GrupoMusical = {
  nombre: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  generoMusical: popRock,
};

const queen: GrupoMusical = {
  nombre: "Queen",
  añoFundacion: 1970,
  activo: false,
  generoMusical: rock,
};

const acDc: GrupoMusical = {
  nombre: "AC DC",
  añoFundacion: 1973,
  activo: true,
  generoMusical: hardRock,
};

const beethoven: GrupoMusical = {
  nombre: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activo: false,
  generoMusical: clasica,
};

const theRollingStones: GrupoMusical = {
  nombre: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  generoMusical: rock,
};

const estiloTitulo = "font-weight: bold; font-size:18px; background: green";

console.log(`%c${theBeatles.nombre}`, estiloTitulo, theBeatles);
console.log(`%c${queen.nombre}`, estiloTitulo, queen);
console.log(`%c${acDc.nombre}`, estiloTitulo, acDc);
console.log(`%c${beethoven.nombre}`, estiloTitulo, beethoven);
console.log(`%c${theRollingStones.nombre}`, estiloTitulo, theRollingStones);
