import axios from "axios"
const API_URL = "https://api.github.com/users/"
const getUsers = async (formData) => {
    const response = await axios.get(API_URL + formData)
    return response.data;
}

const getUserRepos = async (formData) => {
    const response = await axios.get(API_URL + formData + "/repos")
    return response.data;
}

export const authService = {
    getUsers,
    getUserRepos
}
