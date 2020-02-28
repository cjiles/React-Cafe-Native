import * as ActionTypes from './ActionTypes';

export const order = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_ORDER:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);
        
        default:
            return state;
    }
};