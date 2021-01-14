import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.nytimes.com/svc/news/v3"
})

export default instance