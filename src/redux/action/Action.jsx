import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant"
export const addtoCart = (data) => {

    console.warn("action called", data)
    return {
        type: 'ADD_TO_CART',
        data: data
    }
}

export const removetoCart = (data) => {

    console.warn("action removeToCart", data)
    return {
        type: 'REMOVE_FROM_CART',
        data: data
    }
}

export const emptyCart = () => {

    console.warn("action emptyCart")
    return {
        type: 'EMPTY_CART',
        
    }
}