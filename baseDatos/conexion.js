/*---importar mongoose----*/
const mongoose = require('mongoose');


/*----conectarmos a la bse de datos-----*/
const conexionDB = async() => {

    try{

        await mongoose.connect('mongodb+srv://proyectosangular09:Ecoutores09**@angularback.d5sixhu.mongodb.net/medicos?retryWrites=true&w=majority&appName=angularBACK');
        console.log("se ha conectado correctamente")

    }catch(err){

        console.log("no se pudo conectar")
    }

}

        
        
    
module.exports =  { 
    conexionDB 
};


   