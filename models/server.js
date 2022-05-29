const express =  require('express');
const cors =require('cors');

class Server{
    constructor(){

        this.app=express()
        this.port=process.env.PORT
        this.usuariosPath='/api/usuarios';

        //middlewares
        this.middlewares();


        //Rutas de mi apo
        this.routes();

    }
    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo 
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo  en perto',this.port);
        })
    }

}

module.exports=Server;