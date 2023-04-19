import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../Constant"

export const cartData = (data = [], action) => {
    

    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer called", action, data) 
            return [action.data, ...data]
            case REMOVE_FROM_CART:
                console.warn("REMOVE_from_CART CONDITION", action) 
                // data.length= data.length? data.length-1:[]
                const remainingItems = data.filter((item)=>item.id!==action.data)
                return [...remainingItems]
                case EMPTY_CART:
                console.warn("EMPTY_CART CONDITION", action) 
                data =[]
                return [...data]
            default:
               return data
    }   
 }