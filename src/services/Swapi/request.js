import axios from 'axios'

export async function getDataSwapi() {
    try {
        let jsonSwapi = []
        let i = 1
        while (i) {
            console.log(`passou ${i}`)
            let response = await axios.get(`https://swapi.dev/api/starships/?page=${i}`)
            if (response.data.next) {
                jsonSwapi.push(...response.data.results)
                i++
            } else {
                jsonSwapi.push(...response.data.results)
                i = 0
            }

        }
        return jsonSwapi
    } catch (error) {
        console.log(error)
        return 'No data'

    }
}