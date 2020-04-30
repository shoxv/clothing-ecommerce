import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/original.svg';
import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [
                {
                    name: 'shop',
                    url: '/shop'
                },
                {
                    name: 'about',
                    url: '/about'
                }
            ]
        }
    }

    render() {
        return (
            <div className="header">
                <Link to="/">
                    <span className="logo-container">
                        <Logo className="header-logo" />
                    </span>
                </Link>
                <ul className="header-options">
                    {
                        this.state.pages.map(({name, url}) => (
                            <Link to={url}>
                                <li className="option">{name.toUpperCase()}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Header;