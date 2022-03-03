import axios from 'axios'

export async function getDataSwapiStarShip(starshipArray) {
    try {
        let jsonSwapi = []
        starshipArray.map(async (starship) => {

            let response = await axios.get(`${starship.url}`).then((data) => data)
            console.log(`${starship.url}`)
            jsonSwapi.push(response.data)
        })
        return jsonSwapi
    } catch (error) {
        console.log(error)
        return []

    }
}