const needle = require('needle')

//url de conexion a la API
const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`

needle('get', url, { json: true })
  .then((respuesta) => {
    const dinosaurios = respuesta.body
    dinosaurios.forEach((dinosaurio) => {
      console.log(dinosaurio.Name)
      console.log('--------------')
    })
  })
  
  .catch((error) => {
    console.log('Error al obtener los datos de los dinosaurios:', error)
  })