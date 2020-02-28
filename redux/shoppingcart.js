import * as ActionTypes from './ActionTypes';

// export const shoppingcart = (state = [], action) => {
//     switch (action.type) {
//         case ActionTypes.ADD_CART:
//             if (state.includes(action.payload)) {
//                 return state;
//             }
//             return state.concat(action.payload);
        
//         case ActionTypes.DELETE_CART:
//             return state.filter(order => order !== action.payload);

//         default:
//             return state;
//     }
// };

export const shoppingcart = (state = [], action) => {
        switch (action.type) {
            case ActionTypes.ADD_CART:
                return[...state, action_payload]
            case ActionTypes.DELETE_CART:
                return state.filter(cartItem => cartItem.id !== action.payload.id)
            default:
                return state
        }
    };