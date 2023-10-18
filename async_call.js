//Dependencias para hacer una request en modo callback

//tipos de dependencias en js
//- commonjs: require
//- module: import 

const request = require('request')

//url de conexion a la API
const url = `https://pokeapi.co/api/v2/pokemon`

//transaccion asincrona: conexion a la api
let r = request(url,
                {json:true},
                (error,respuesta,body)=>{
                    if (error){
                        console.log(error)
                    }
                    else{
                        let pokemones = body.results
                        pokemones.forEach((pokemon)=>{
                            console.log(pokemon.name)
                            console.log("--------------")
                        });
                    }
                }
            )


