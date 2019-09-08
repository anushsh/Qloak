import React from 'react';
import { connect } from 'react-redux';
import Home from '@material-ui/icons/Home';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import { Link } from 'react-router-dom';
import { answerQuestion, finish, deleteUsers, deleteQuestions, emailUsers} from '../actions';

import Question from './Question';

import { Field, reduxForm } from 'redux-form';

import { getQuestions } from '../actions/index';

import styled from 'styled-components';


class AdminView extends React.Component {

    /*constructor(props) {
        super(props);
        this.state = {
            answer: '', 
        }
    }

    onSubmit = (formValues) => {
        const ans = {id: Object.keys(formValues)[0], answer: Object.values(formValues)[0]}
        this.props.answerQuestion(ans);
    }*/

/*
    onFinishClick = () => {
        this.props.finish();
    }*/

    handleFinishClick = (event) => {
      event.preventDefault();
      this.props.emailUsers();
    }

    handleClearClick = (event) => {
      event.preventDefault();
      this.props.deleteUsers();
      this.props.deleteQuestions();
    }

    componentDidMount() {
        this.props.getQuestions();
        this.interval = setInterval(() => {
            this.props.getQuestions();
        }, 2000); //change to 3 seconds for demo
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderQuestionList() {

        const obj = this.props.questions;
        const questionsToRender = Object.keys(obj).map(function (key) {
            return { [obj[key]._id]: obj[key] };
        });

        return questionsToRender.map((question, index) => {
            return (
                <Question key={Object.keys(question)[0]} text={Object.values(question)[0].text}
                name={Object.keys(question)[0]} />
            )
        })
    }

    /*
    {/*<ResponseBox onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <ButtonMic>
                        <KeyboardVoice></KeyboardVoice>
                        <input></input>
                        {/*<Field name={Object.keys(question)[0]} component={this.renderInput}></Field>
                        </ButtonMic>
                        <ButtonSubmit>
                            <button>Submit</button>
                        </ButtonSubmit>
                    </ResponseBox>
    */

    render() {

        return (
            <Container>
                <HeaderComponent>
                    <StyledLink to='/'><Home fontSize="large"></Home></StyledLink> &nbsp; Teacher &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FinishButton><StyledLink2 onClick={this.handleFinishClick} to='/'>Finish</StyledLink2></FinishButton>
                    <FinishButton><StyledLink2 onClick={this.handleClearClick} to='/'>Clear</StyledLink2></FinishButton>
                </HeaderComponent>
                {
                    this.renderQuestionList()
                }
                {/*<Questions>
                    <i>"hi?"</i>
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Anush
                    <br />
                    <br />
                    <ResponseBox>
                        <ButtonMic>
                            <KeyboardVoice></KeyboardVoice> <textarea></textarea>
                        </ButtonMic>
                        <ButtonSubmit onClick={this.handleAnswerButtonClick}>
                            <button>Submit</button>
                        </ButtonSubmit>
                    </ResponseBox>
                </Questions>

                <Questions>
                    <i>"i dont understand help"</i>
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Max
                    <br />
                    <br />
                    <ResponseBox>
                        <ButtonMic>
                            <KeyboardVoice></KeyboardVoice> <textarea></textarea>
                        </ButtonMic>
                        <ButtonSubmit>
                            <button>Submit</button>
                        </ButtonSubmit>
                    </ResponseBox>
                </Questions>

                <Questions>
                    <i>"adfakjgl;kadf :'("</i>
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Dean
                    <br />
                    <br />

                    <ResponseBox>
                        <ButtonMic>
                            <KeyboardVoice></KeyboardVoice> <textarea></textarea>
                        </ButtonMic>
                        <ButtonSubmit>
                            <button>Submit</button>
                        </ButtonSubmit>
                    </ResponseBox>
                </Questions>

                <Questions>
                    <i>"yo how's life?"</i>
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Emmie
                    <br />
                    <br />

                    <ResponseBox>
                        <ButtonMic>
                            <KeyboardVoice></KeyboardVoice> <textarea></textarea>
                        </ButtonMic>
                        <ButtonSubmit>
                            <button>Submit</button>
                        </ButtonSubmit>
                    </ResponseBox>
                </Questions>*/}

            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.questions.questions)
    }
}

export default reduxForm({
    form: 'adminForm'
})(connect(mapStateToProps, { getQuestions, answerQuestion, finish, deleteQuestions, deleteUsers, emailUsers})(AdminView));


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4191fa;
    height: 200rem;
`
const HeaderComponent = styled.div`
    display: flex;
    color: white;
    padding: 2rem;
`
const Header = styled.div`
    color: white;
    font-size: 40px;
    margin-right: 84rem;
`
const FinishButton = styled.div`
    background-color: white;
    color: dimgrey;
    border-radius: 5px;
    font-size: 20px;
    padding: 0.5rem;
    width: 5rem;
`

const ResponseBox = styled.form`
    display: flex;
    font-size: 20px;
    border-radius: 5px;
    color: dimgrey;
    background-color: white;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 1rem;
    padding: 1rem;
`
const ButtonMic = styled.div`
    color: dimgrey;
    cursor: pointer;
`
const ButtonSubmit = styled.div`
    display: flex;
    margin-left: 1rem;
    padding: 0.1rem;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 28px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const StyledLink2 = styled(Link)`
    text-decoration: none;
    color: dimgrey;
    font-size: 20px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
