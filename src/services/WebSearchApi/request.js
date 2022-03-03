import axios from 'axios'
export async function serachImg(nome) {
    const options = {
        method: 'GET',
        url:
            'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {
            q: `${nome}`,
            pageNumber: '1',
            pageSize: '15',
            autoCorrect: 'true',
            safeSearch: 'true',
        },
        headers: {
            'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'x-rapidapi-key': 'dab44ff0ecmsh6ef9d47b94e920cp1656f0jsna278c339b084',
        },
    }

    let response = await axios
        .request(options)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error)
            return false
        })
    if (response) {
        const filteredImg = await response.value.filter((img) => {
            let url = img.url.split('.')
            if (url[url.length - 1] === 'jpg' || url[url.length - 1] === 'png' || url[url.length - 1] === 'jpeg') {
                return true
            } else return false
        })
        return filteredImg
    } else return false
}