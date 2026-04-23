import axios from 'axios'

const teamsAPI = axios.create({
    baseURL: 'https://development-internship-api.geopostenergy.com',
    headers: {
        'git-user': 'thiago-alvinho'
    }
})

export default teamsAPI