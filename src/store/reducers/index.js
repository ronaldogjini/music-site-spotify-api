import { combineReducers } from 'redux';

export const tokenReducer = (state = '', action) => {
    switch (action.type) {
        case 'GET_TOKEN': {
            return action.payload
        }
        default:
            return state;
    }
};

export const reducers = combineReducers({
    token: tokenReducer
});