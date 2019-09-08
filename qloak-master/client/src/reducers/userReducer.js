import _ from 'lodash';
import {
    CREATE_USER,
    GET_USER,
} from '../actions/types';

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_USER:
            return { ...state, [action.payload._id]: action.payload };
        case CREATE_USER:
            return { ...state, [action.payload._id]: action.payload }; 
        default:    
            return state;
    }
}