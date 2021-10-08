import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail('');
          setPassword('');
        })
        .catch((error) => {
          console.log(error)
        });
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label={"Email"}
                    required
                    handleChange={(e) => setEmail(e.target.value)}
                />
                <FormInput
                    name='password'
                    type='password'
                    label={"Password"}
                    value={password}
                    required
                    handleChange={(e) => setPassword(e.target.value)}
                />
                <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn