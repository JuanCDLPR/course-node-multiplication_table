const { stripColors } = require("colors");
const fs = require("fs");
require("colors");

exports.tablaMultiplicacion = async (base, multiplos, listar) => {
  try {
    let salida = "";
    let consola = "";

    for (i = 1; i <= multiplos; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola +=
        `${base}`.red +
        ` x `.yellow +
        `${i}`.green +
        ` = ` +
        `${base * i}\n`.underline;
    }

    if (listar) {
      console.log("=================");
      console.log(`   Tabla del `, base);
      console.log("=================");
      console.log(consola);
    }

    fs.writeFileSync(`./out/tabla-${base}.txt`, salida);
    //console.log(`tabla-${base}.txt creada`);
    return `tabla-${base}.txt`.green;
  } catch (error) {
    throw error;
  }
};
