require("colors");
//asdsajdhaskjdf;
exports.argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar".green.underline,
  })
  .option("m", {
    alias: "multiplos",
    type: "number",
    default: 10,
    describe: "Cantidad de veces a multiplicar la base".green.underline,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla de multiplicar en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero".red;
    }
    return true;
  }).argv;
