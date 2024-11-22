import axios from "axios"
import { BASE_URL, DELETE_PRODUCT, GET_PRODUCT, POST_PRODUCT } from "../constant"

let create_product = async (action) => {
    let { data, status } = await axios.post(BASE_URL + POST_PRODUCT, action.payload)
    return { data, status }
}

let get_product = async (action) => {
    let { data, status } = await axios.get(BASE_URL + GET_PRODUCT)
    console.log(data);

    return { data, status }
}

let delete_product = async (action) => {
    let { data, status } = await axios.delete(BASE_URL + DELETE_PRODUCT + action.payload)
    console.log(data);
    
    return { data, status }
}

export { create_product, get_product, delete_product }