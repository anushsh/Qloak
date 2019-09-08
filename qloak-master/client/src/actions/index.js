import axios from 'axios';
import history from '../history';
import {
    CREATE_USER,
    GET_USER,
    CREATE_QUESTION,
    GET_QUESTIONS,
    ANSWER_QUESTION,
    FINISH,
    DELETE_USERS,
    DELETE_QUESTIONS,
    EMAIL_USERS,
    SELECT_POST,
    SET_CURRENT_POST
} from './types';

export const createUser = (formValues) => async dispatch => {
    const response = await axios.post('http://localhost:5000/api/user/create', {...formValues})
    dispatch({ type: CREATE_USER, payload: response.data });
    if (formValues.admin) {
        history.push('/teacher');
    } else {
        history.push('/student');
    }
}

export const createQuestion = (question) => async dispatch => {
    //console.log(question);
    const result = await axios.post('http://localhost:5000/api/question/create', {...question})
    dispatch({ type: CREATE_QUESTION, payload: result.data});
}

export const getQuestions = () => async dispatch => {
    const ans = await axios.get('http://localhost:5000/api/question/get')
    //console.log(ans.data);
    dispatch({type: GET_QUESTIONS, payload: ans.data});
}

export const answerQuestion = (formValues) => async dispatch => {
    const reply = await axios.put(`http://localhost:5000/api/question/answer/${formValues.id}`, {answer: formValues.answer})
    dispatch({type: ANSWER_QUESTION, payload: reply.data});
}

export const finish = () => async dispatch => {
    const finish = await axios.get(`http://localhost:5000/api/user/getall`)
    dispatch({type: FINISH, payload: finish.data});
}

export const deleteUsers = () => async dispatch => {
  const delt = await axios.delete(`http://localhost:5000/api/user/delete`)
  dispatch({type: DELETE_USERS, payload: delt.data});
}

export const deleteQuestions = () => async dispatch => {
  const del = await axios.delete(`http://localhost:5000/api/question/delete`)
  dispatch({type: DELETE_QUESTIONS, payload: del.data});
}

export const emailUsers= () => async dispatch => {
  await axios.get('http://localhost:5000/api/user/email')
}

export const selectPost = (question) => {
    return {
        type: SELECT_POST,
        payload: question
    }
}

export const setCurrentPost = (question) => {
    return {
        type: SET_CURRENT_POST,
        payload: question
    }
}

/*export const getUser = (formValues) => async dispatch => {
    const response = await axios.get(`/api/user/get/${id}`)
    dispatch({ type: GET_USER, payload: response.data });
}*/
