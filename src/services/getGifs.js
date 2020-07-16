const api_key= "xEj87YRdD8yOZDH2HxBTHopcnXJHY5gS"


const getGifs = ( {keyword = 'error'} = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`
    
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        if (Array.isArray(data)) {
          const gifs = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return {title, id, url}
          })
          return gifs
        }
      })
}

export default getGifs
