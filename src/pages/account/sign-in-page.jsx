import React from 'react';
import './sign-in-page.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }
    
    render() {
        return (
            <div className="sign-in-and-sign-up">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

export default SignInPage;