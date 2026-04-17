import axios from 'axios'

const teamsAPI = axios.create({
    baseURL: process.env.API_URL_BASE,
    headers: {
        'git-user': 'thiago-alvinho'
    }
})

export default teamsAPI