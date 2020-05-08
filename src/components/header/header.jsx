import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/original.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [
                {
                    id: 1,
                    name: 'shop',
                    url: '/shop'
                },
                {   
                    id: 2,
                    name: 'about',
                    url: '/about'
                }
            ]
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <div className="header">
                <Link to="/">
                    <span className="logo-container">
                        <Logo className="header-logo" />
                    </span>
                </Link>
                <ul className="header-options">
                    {
                        this.state.pages.map(({name, url, id}) => (
                            <Link to={url} key={id}>
                                <li className="option">{name.toUpperCase()}</li>
                            </Link>
                        ))
                    }
                    {
                        this.props.user ?
                            <li className="option" onClick={() => auth.signOut() }>
                                <span>SIGN OUT</span>
                                <img className="header-user-photo" src={this.props.user.photoURL} />
                            </li>
                        :
                        <Link to="/signin">
                            <li className="option">SIGN IN</li>
                        </Link>
                    }
                </ul>
            </div>
        )
    }
}

export default Header;