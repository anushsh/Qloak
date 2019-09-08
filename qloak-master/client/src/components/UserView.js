import React from 'react';
//import { connect } from 'react-redux';

import Print from '@material-ui/icons/Print';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Description from '@material-ui/icons/Description';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import StarBorder from '@material-ui/icons/StarBorder';
import Home from '@material-ui/icons/Home';

import Audio from './Audio';

import styled from 'styled-components';
import Bookmark from '@material-ui/icons/Bookmark';
import {Link} from 'react-router-dom';
import { TextareaAutosize } from '@material-ui/core';
import {connect} from 'react-redux';
import {createQuestion} from '../actions';

class UserView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            audioButtonClicked: false,
            audioQuestion: '',
            textQuestion: '',
        }
        this.handleAudioButtonClick = this.handleAudioButtonClick.bind(this);
        this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
        this.sendThru = this.sendThru.bind(this);
    }

    audioCallback = (data) => {
        if (data !== this.state.audioQuestion) {
            this.setState({audioQuestion: data})
        }
        //console.log(data);
    }

    handleAudioButtonClick() {
        const clicked = this.state.audioButtonClicked;
        //console.log(clicked);
        this.setState({ audioButtonClicked: !clicked });
    }

    handleSubmitButtonClick = (event) => {
        event.preventDefault();
        const audio = this.state.audioQuestion;
        const text = this.state.textQuestion;
        let questionText = '';
        if (this.state.audioButtonClicked) {
            questionText = audio;
        } else {
            questionText = text;
        }
        const question = {text: questionText};
        this.props.createQuestion(question);

        this.setState({
            textQuestion:''
        });
    }



    sendThru() {
        this.textQuestion.value = "";
        this.audioQuestion.value = "";
    }

    render() {
        return (
            <Container>
                <HeaderContainer>
                    <HeaderDocIcon>
                        <Description fontSize="large" ></Description>
                    </HeaderDocIcon>

                    <HeaderTextContainer>
                        <HeaderTitleContainer>
                            <HeaderTitle>
                                PennApps is Fun&nbsp;&nbsp;&nbsp;
                            </HeaderTitle>
                            <StarBorder style={{ fill: '#808080' }}></StarBorder> &nbsp;&nbsp;&nbsp;
                            <StyledLink to='/'>
                                <Home></Home>
                            </StyledLink>
                        </HeaderTitleContainer>
                        <HeaderText>
                            File &nbsp;&nbsp;Edit &nbsp;&nbsp;View&nbsp;&nbsp; Tools &nbsp;&nbsp;Help
                        </HeaderText>
                    </HeaderTextContainer>

                    <ButtonComponent onClick={this.handleAudioButtonClick}>
                        <KeyboardVoice></KeyboardVoice> &nbsp; Share
                    </ButtonComponent>

                    <HeaderAvatar>
                        <AccountCircle fontSize="large" ></AccountCircle>
                    </HeaderAvatar>

                </HeaderContainer>


                <OptionBarContainer>
                    <OptionBarPrint>
                        <Print></Print>
                    </OptionBarPrint>
                    <OptionBarZoom>
                        | &nbsp; &nbsp; 100%
                        <ArrowDropDown></ArrowDropDown>
                    </OptionBarZoom>
                    <OptionBarView>
                        <RemoveRedEye></RemoveRedEye>
                        &nbsp;  View only
                        <ArrowDropDown ></ArrowDropDown>
                    </OptionBarView>
                </OptionBarContainer>

                <GoogleDocContainer>
                    <GoogleDoc>
                    <form>
                        {
                            this.state.audioButtonClicked
                            ?
                            <div>
                                Start recording your question!
                                <br />
                                <br />
                                <div ref="audioQuestion">
                                    <Audio callback={this.audioCallback} />
                                </div>
                            </div>
                            :
                            <>
                                Type your question here!
                                <br />
                                <br />
                                <input type="text" ref="textQuestion"
                                value={this.state.textQuestion} onChange={(e) => this.setState({textQuestion: e.target.value})}>
                                </input>
                            </>
                        }
                        <SubmitButton onClick= {this.handleSubmitButtonClick}>
                            Ask
                        </SubmitButton>
                    </form>
                    </GoogleDoc>
                </GoogleDocContainer>
            </Container>
        )
    }
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const OptionBarContainer = styled.div`
    display: flex;
    border-top: 1px solid silver;
    border-bottom: 1px solid silver;
    padding: 0.5rem;
`
const OptionBarPrint = styled.div`
    display: flex;
    color: grey;
    margin-left: 1rem;
    margin-right: 0.5rem;
    height: 2.1rem;
    padding-top: 0.2rem;
`
const OptionBarZoom = styled.div`
    display: flex;
    font-size: 18px;
    color: grey;
    padding: 0.5rem;
    height: 2.1rem;

`
const OptionBarView = styled.div`
    display: flex;
    color: white;
    font-size: 20px;
    background-color: #4191fa;
    border-radius: 5px;
    padding: 0.5rem;
    height: 2.1rem;
`
const HeaderContainer = styled.div`
    display: flex;
    padding: 0.5rem;
`
const HeaderDocIcon = styled.div`
    color: #4191fa;
    margin-left: 0.5rem;
    margin-right: 1rem;
`
const HeaderAvatar = styled.div`
    display: flex;
    flex-direction: column;
    color: grey;
    margin-left: 1rem;
`
const ButtonComponent = styled.div`
    display: flex;
    background-color: #4191fa;
    font-size: 20px;
    border-radius: 5px;
    padding: 0.5rem;
    height: 2.1rem;
    margin-top:0.4rem;
    cursor: pointer;
    color: white;
`
const HeaderTitleContainer = styled.div`
    display: flex;
`
const ButtonHome = styled.div`
    color: grey;
    cursor: pointer;
`
const HeaderTextContainer = styled.div`
    flex-direction: column;
    margin-right: 60rem;
`
const HeaderTitle = styled.div`
    display: flex;
    font-size: 20px;
    padding-top: 0.2rem;

`
const HeaderText = styled.div`
    display: flex;
    font-size: 12px;
    padding-top: 0.5rem;
`
const GoogleDocContainer = styled.div`
    display: flex;
    background-color: #f8f9fa;
`
const GoogleDoc = styled.div`
    background-color: white;
    width: 70rem;
    height: 100rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 10rem;
    padding: 5rem;
    font-size: 18px;
    border: 1px solid silver;
`

const SubmitButton = styled.div`
    background-color: white;
    color: dimgrey;
    border: 1px solid dimgrey;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 1rem;
    width: 4rem;
    height: 2rem;
    cursor: pointer;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: dimgrey;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export default connect(null, {createQuestion})(UserView);
