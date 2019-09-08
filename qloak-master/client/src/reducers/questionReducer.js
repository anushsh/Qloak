import _ from 'lodash';
import {
    GET_QUESTIONS,
    SELECT_POST,
    SET_CURRENT_POST
} from '../actions/types';

const INITIAL_STATE = {
    questions: {},
    currentPost: null,
    selectedPosts: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            const response = action.payload;
            return { ...state, questions: response };

        default:
            return state;
    }
}