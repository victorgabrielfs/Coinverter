import axios from 'axios'


const api = axios.create({
  baseUrl: 'https://api.exchangeratesapi.io/'
})

export default api