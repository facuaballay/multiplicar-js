//requireds
const fs = require('fs');
var colors = require('colors');


let listarTabla=(base,limite = 10)=> {
  
  
  for(let i = 1; i <= limite; i++){

  console.log(`${base} * ${i} = ${base * i}\n`.green)  
 }
    
    
    

}







let creararchivo = (base,limite=10) =>{
    return new Promise ((resolve,reject)=>{

        if (!Number(base)){
            reject(`el valor introducido ${base} no es un numero `);
            return
        }


        let data = '';
        
        
        for(let i = 1; i <= limite; i++){
          
        
        
           data +=(`${base} * ${i} = ${base * i}\n`);
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err) 
            reject (err)
          else 
            resolve(`tabla-${base}-al-${limite}.txt`.blue)
          
          console.log(`el archivo tabla${base} sido creado`.green);
        });
    })
};


module.exports= {
    creararchivo,
    listarTabla
}



