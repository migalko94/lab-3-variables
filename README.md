# Laboratorio Módulo 3 - Variables

> Aquí describimos lo realizado en el laboratorio

Hemos optado por el _Sandbox_ de _TypeScript_.

## Instrucciones

Vamos a reflejar los parámetros sobre los que hay que trabajar.

### Grupos musicales

Queremos mostrar información acerca de grupos musicales.

La información de los grupos que queremos mostrar:

- Nombre del grupo / cantante / compositor (string).

- Año de fundación: cuando se formó el grupo (número).

- Si está en activo (booleano).

- Género musical (string).

Al trabajar con _TypeScript_, creamos un interfaz para representar a un grupo musical.

Por tanto,

`interface GrupoMusical {
  nombre: string;
  añoFundacion: number;
  activo: boolean;
  generoMusical: string;
}`

El idioma que usamos es castellano, como se recomienda en el módulo para distinguir el código propio del que ya está hecho por terceros.

Asimismo, notación para la interfaz, como se aconseja, es _PascalCase_ y para las variables, _camelCase_.

Cada género queremos tenerlo en una variable. Lo hacemos tal que así:

`const rock = "🎸 Rock";
const popRock = "🎵 Pop Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";`

Creamos las variables de tipo `GrupoMusical`, dentro de las cuales llamamos ya a los géneros:

`const theBeatles: GrupoMusical = {
  nombre: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  generoMusical: popRock,
};`

`const queen: GrupoMusical = {
  nombre: "Queen",
  añoFundacion: 1970,
  activo: false,
  generoMusical: rock,
};`

`const acDc: GrupoMusical = {
  nombre: "AC DC",
  añoFundacion: 1973,
  activo: true,
  generoMusical: hardRock,
};`

`const beethoven: GrupoMusical = {
  nombre: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activo: false,
  generoMusical: clasica,
};`

`const theRollingStones: GrupoMusical = {
  nombre: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  generoMusical: rock,
};`

Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.

Esto lo hemos hecho formateando el `console.log` con un segundo parámetro que aplica estilos CSS, pero lo dirigimos sólo al `.nombre`. Después viene el objeto.

Así aplicamos los requerimientos de negrita, fuente y color de fondo:

`const estiloTitulo = "font-weight: bold; font-size:18px; background: green";`

Éste es el resultado final:

![input consola sandbox](/content/input-consolelog.png)

Por la consola de _Google Chrome_ de la _Sandbox_ de _TypeScript_ vemos lo siguiente:

![feedback consola sandbox](/content/console-sandboxts-feedback.png)

> Fin del laboratorio

**Resubo con sandbox TS y main cambiado a la implementación del ejercicio.**
