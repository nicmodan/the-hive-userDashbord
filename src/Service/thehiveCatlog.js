import axios from "axios";

const url = "http://localhost:3001/api/thehivecatlog/"

export const getAll = async()=>{
    const response = await axios.get(url)
    return response.data
}

const getId = async(id)=>{
    const urlId = url+`:${id}`
    const response = await axios.get(urlId)
    return response.data
}

// export default {
//     getAll,
//     getId
// }