import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

var blue1 = '#1a73e8';

class Login extends React.Component {

    /*handleUserCreate(formValues) {
        console.log(formValues);
        this.props.createDebateCard(formValues);
    }*/

    render() {
        return (
            <Container>
                <ButtonContainer>
                    <Button>
                        <StyledLink to='/sname'> Login as Student </StyledLink>
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button>
                        <StyledLink to='/tname'> Login as Teacher </StyledLink>
                    </Button>
                </ButtonContainer>
            </Container>
        )
    }
}

export default Login;


const Container = styled.div`
  display: flex;
`

const OuterContainer = styled.div`
    display: flex;
    margin-left: 20rem;
    margin-top: 5rem;
    width: 55rem;
    height: 30rem;
`

const ButtonContainer = styled.div`
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    margin-top: 5rem;
`

const Button = styled.div`
    width: 20rem;
    height: 20rem;
    background-color: blue;
    font-size: 3rem;
    text-align: center;
    cursor: pointer;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
