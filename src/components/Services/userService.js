import axios from "axios";

const baseURL = "https://thehive.fly.dev/api/the-hive-users"

// let token = null

// const setToken = (newToken) =>{
//     token = `bearer ${newToken}`
// } 

const getAllUsers = async () =>{
    const response =  await axios.get(baseURL)
    return response.data
}

const createUsers = async (credentals) =>{
    const response = await axios.post(baseURL, credentals)
    return response.data
}
