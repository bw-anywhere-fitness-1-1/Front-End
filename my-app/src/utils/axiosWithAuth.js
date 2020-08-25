import axios from 'axios'

export const axiosWithAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://bw-fitness-anywhere.herokuapp.com',
        headers: {
            Authorization: `${token}`
        }
    })
}