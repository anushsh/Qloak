import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import history from '../history';
//import { connect } from 'react-redux';
import Login from './Login';
import UserView from './UserView';
import AdminView from './AdminView';
import UserName from './UserName';
import TeacherName from './TeacherName';

import styled from 'styled-components';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/sname" component={UserName} />
                    <Route exact path="/tname" component={TeacherName} />
                    <Route exact path="/student" component={UserView} />
                    <Route exact path="/teacher" component={AdminView} />
                </div>
            </Router>
        )
    }
}

export default App;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`