const axios = require('axios')
const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`

axios.get(url)
    .then((respuesta)=>
    {
        respuesta.data.forEach(dinosaurio => {
            console.log(dinosaurio.Name)
            console.log('***************')
        });
    })
    .catch((error)=>console.log(error))