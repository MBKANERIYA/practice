import { DELETE_PRODUCT_NOTFOUND, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_NOTFOUND, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, POST_PRODUCT_NOTFOUND, POST_PRODUCT_PENDING, POST_PRODUCT_SUCCESS } from "./action"

let initialState = {
    product: [],
    isLoading: true,
    isError: null
}

let productReducer = (state = initialState, action) => {
    switch (action.type) {
        case (POST_PRODUCT_PENDING, GET_PRODUCT_PENDING, DELETE_PRODUCT_PENDING): {
            return {
                ...state,
                isLoading: true
            }
        }
        case POST_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.concat(action.payload)
            }
        }
        case GET_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: action.payload
            }
        }
        case DELETE_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.filter((val) => val.id != action.payload.id)
            }
        }
        case (POST_PRODUCT_NOTFOUND, GET_PRODUCT_NOTFOUND, DELETE_PRODUCT_NOTFOUND): {
            return {
                isLoading: false,
                isError: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default productReducer