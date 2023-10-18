const axios = require('axios')
const url = `https://dragonballapi-backend.vercel.app/character/information/goku`

async function mostrarGoku(){
    const respuesta = await axios.get(url)
    console.log(respuesta.data.name)
    console.log("****************")
}

mostrarGoku()