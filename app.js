// //requireds
// const fs = require('fs');
// const fs = require('express') es un archivo externo;
// const fs = require('./path donde se encuetra el archivo son archivos propios');

const {creararchivo,listarTabla}= require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
var colors = require('colors');


//  let base = 1 ;

  

// let argv2 = process.argv;
let comando =argv._[0];

switch(comando){
   case 'listar':listarTabla(argv.base,argv.limite);  
      break;
   
   case 'crear':
      creararchivo(argv.base,argv.limite).then(archivo => console.log(archivo)).catch(e => {
         console.log(e.green);
      });    break;
      
      default: console.log('comando no reconocido');
      
   }
   
   
// let parametro = argv[2];

//  let base = parametro.split('=')[1]

console.log('limite',argv.limite);

// console.log(parametro);

// console.log(process.argv);

// console.log(module);


//  creararchivo(base).then(archivo => console.log(archivo)).catch(e => {
//     console.log(e);
//  });

