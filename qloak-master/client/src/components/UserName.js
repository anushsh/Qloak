//onClick={() => this.handleUserCreate({admin: true})}

import React from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions';

import styled from 'styled-components';
import Bookmark from '@material-ui/icons/Bookmark';
import {Link} from 'react-router-dom';

class UserName extends React.Component {

    state = {name: ''};

    handleStudentSubmit = (event) => {
        event.preventDefault();
        const values = { admin: false, name: this.state.name };
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
                        <form className="ui form" onSubmit={this.handleStudentSubmit}>
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

const mapStateToProps = (state) => {
	return {

	}
}

export default connect(mapStateToProps, {createUser})(UserName);

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
