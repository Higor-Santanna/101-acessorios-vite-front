import axios from "axios"

const apiUrl = 'https://101acessorios-api.onrender.com/user'

const fetchData =  async() => {
    try {
        const response = await axios.get(`${apiUrl}`);

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export { fetchData }