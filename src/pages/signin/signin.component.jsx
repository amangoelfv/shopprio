import React from 'react';

import './signin.styles.scss';
import SignIn from './../../components/sign-in/sign-in.component';
import SignUp from './../../components/sign-up/sign-up.component';

const SignInPage = () => (
    <div className='auth'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInPage;