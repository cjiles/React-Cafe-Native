import * as ActionTypes from './ActionTypes';

export const postCart = orderId => dispatch => {
    setTimeout(() => {
        dispatch(addCart(orderId));
    }, 1000);
};

export const addCart = orderId => ({
    type: ActionTypes.ADD_CART,
    payload: orderId
});