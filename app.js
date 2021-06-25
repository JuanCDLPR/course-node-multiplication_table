const { argv } = require("./config/yargs");
const { tablaMultiplicacion } = require("./helpers/multiplicar");

const base = 5;
const multiplos = 10;

console.clear();
// console.log(argv.b);

tablaMultiplicacion(argv.b, argv.m, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

/* tablaMultiplicacion(base, multiplos,)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err)); */
