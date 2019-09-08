import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    //THIS HAS THE LOGIC FOR RENDERING DIFFERENT USER VIEWS BASED ON USER VS ADMIN STATUS

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/reddit">Login with Reddit</a></li>
                );
            default:
                const editProfile = {
                    pathname: `/profile/${this.props.auth.username}/edit`
                }
                return (
                    <div>
                        <ul>
                            <li> <Link to='/game/start'> Match </Link> </li>
                            <li> <Link to='/profile/show'> u/{this.props.auth.username} </Link> </li>
                            <li>
                                <Link to={editProfile}>
                                    <img src={this.props.auth.avatar} alt="reddit avatar" hspace="20" width="64" height="64"></img>
                                </Link>
                            </li>
                            <li><a href="/api/logout">Logout</a></li>
                        </ul>
                    </div>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue-grey darken-3">
                    <Link
                        to={this.props.user ? '/users' : '/'}
                        className="left brand-logo"
                    >
                        Self Identification for Reddit
                    </Link>
                    <ul className="right">
                        <li>
                            {
                                this.props.auth !== null
                                ? (
                                    this.props.auth !== false && this.props.auth['survey'] === undefined &&
                                        <Link to='/survey' >
                                            Survey
                                        </Link>
                                )
                                : <></>
                            }
                        </li>
                        <li>
                            {this.renderContent()}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(Header);

