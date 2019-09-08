import React from 'react';

import {createUser} from '../actions/index';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import Bookmark from '@material-ui/icons/Bookmark';

class TeacherName extends React.Component {

    state = {name: ''};

    handleTeacherSubmit = (event) => {
        event.preventDefault();
        const values = { admin: true, name: this.state.name };
        this.props.createUser(values);
    }

    render() {
        return (
            <Container>
                <ProductName>
                    <StyledLink to='/'><Bookmark fontSize = "large" ></Bookmark></StyledLink>&nbsp;Qloak
                </ProductName>
                
                <NameForm>
                    <div className="ui container">
                    <div className="ui segment">
                        <form className="ui form" onSubmit={this.handleTeacherSubmit}>
                            <div className="field">
                                <label>Enter your email:</label>
                                <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                            </div>
                        </form>
                    </div>
                </div>
                </NameForm>
            </Container>
        )
    }
}

export default connect(null, {createUser})(TeacherName);

const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #4191fa;
`

const ProductName = styled.div`
    color: white;
    font-size: 40px;
    padding: 2rem;
`

const NameForm = styled.div`
    display: flex;
    padding-top: 20rem;
    padding-bottom: 50rem;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 28px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`