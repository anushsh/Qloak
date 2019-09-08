import React from 'react';
import { connect } from 'react-redux';

import KeyboardVoice from '@material-ui/icons/KeyboardVoice';

import { answerQuestion } from '../actions';

import { Field, reduxForm } from 'redux-form';

import Audio from './Audio';

import styled from 'styled-components';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            clicked: false,
            showAudio: false,
            audioAnswer: '',
        }
        this.sendThru = this.sendThru.bind(this);
    }

    onSubmit = (formValues) => {
        const audio = this.state.audioAnswer;
        let ans = null;
        if (this.state.showAudio) {
            ans = {id: this.props.name, answer: audio};
        } else {
            ans = { id: Object.keys(formValues)[0], answer: Object.values(formValues)[0] };
        }
        this.props.answerQuestion(ans);
    }

    renderInput(formProps) {
        return (
            <input {...formProps.input} />
        )
    }

    toggleClick = () => {
        const prevState = this.state.clicked;
        this.setState({ clicked: !prevState });
    }

    toggleAudio = () => {
        const prevState = this.state.showAudio;
        this.setState({ showAudio: !prevState });
    }

    audioCallback = (data) => {
        if (data !== this.state.audioAnswer) {
            this.setState({audioAnswer: data});
        }
        //console.log(data);
    }

    sendThru() {
        this.audioAnswer.value = "";
    }

    render() {
        return (
            <QuestionContainer>
                <i>{this.props.text}</i>
                <br />
                {
                    this.state.clicked &&
                    <ResponseBox onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <ButtonMic>
                            <KeyboardVoice onClick={this.toggleAudio}></KeyboardVoice>
                            {
                                this.state.showAudio
                                ?
                                <div ref="audioAnswer">
                                    <Audio callback={this.audioCallback}/>
                                </div>
                                :
                                <Field name={this.props.name} component={this.renderInput}></Field>
                            }
                        </ButtonMic>
                        <ButtonSubmit>
                            <button>Submit</button>
                        </ButtonSubmit>
                    </ResponseBox>
                }
                <ToggleButton onClick={this.toggleClick}>{this.state.clicked ? <span>&#9650;</span> : <span>&#9660;</span>}</ToggleButton>
            </QuestionContainer>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        questions: Object.values(state.questions.questions)
    }
}

export default reduxForm({
    form: 'answersForm'
})(connect(mapStateToProps, { answerQuestion })(Question));

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    border-radius: 5px;
    color: dimgrey;
    background-color: white;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    cursor: pointer;
`

const ToggleButton = styled.div`
    font-size: 1.5rem;
    margin-left: 64rem;
    cursor: pointer;
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