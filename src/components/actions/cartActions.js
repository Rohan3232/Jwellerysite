import { ADD_TO_CART,UPDATE_CART,CHANGE_LOGIN_STATUS,ADD_SINGLEQUANTITY,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,ADD_PRODUCT, TRYATHOME_STATE, ADD_TO_TRYOUTCART, ADD_FEEDBACK} from './action-types/cart-actions';

export const addToCart= (name)=>{
    return{
        type: ADD_TO_CART,
        name
    }
}
export const updateCart=(addedItems,total,totalQuantity,totalDiscount,tryoutcart)=>{
    return{
        type:UPDATE_CART,
        addedItems,
        total,
        totalQuantity,
        totalDiscount,
        tryoutcart
    }
}
export const removeItem=(name,cartname)=>{
    return{
        type: REMOVE_ITEM,
        name,
        cartname
    }
}
export const subtractQuantity=(name)=>{
    return{
        type: SUB_QUANTITY,
        name
    }
}
export const addQuantity=(name,quantity)=>{
    return{
        type: ADD_QUANTITY,
        name,
        quantity
    }
}
export const addSingleQuantity=(name)=>{
    return{
        type: ADD_SINGLEQUANTITY,
        name
    }
}
export const addShipping=(id)=>{
    return{
        type: ADD_SHIPPING,
        id
    }
}
export const addProduct=(product)=>{
    return{
        type:ADD_PRODUCT,
        product
    }
}
export const changeLoginStatus=(userid,username,password)=>{
    return{
        type:CHANGE_LOGIN_STATUS,
        userid,
        username,
        password
    }
}
export const tryathomestate=(email,dob,address)=>{
    return{
        type:TRYATHOME_STATE,
        email,
        dob,
        address
    }
}
export const addtotryoutcart=(name)=>{
    return{
        type:ADD_TO_TRYOUTCART,
        name
    }
}
export const addFeedback=(itemname,feedback,username,rating)=>{
    return{
        type:ADD_FEEDBACK,
        itemname,
        feedback,
        username,
        rating
    }
}