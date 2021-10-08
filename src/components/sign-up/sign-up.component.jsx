import React, { useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== cPassword) {
            alert("Password don't match");
            return;
        }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    createUserProfileDocument(user, {displayName});
                    setEmail('');
                    setPassword('');
                    setCPassword('');
                    setDisplayName('');
                })
                .catch((error) => {
                    console.log(error)
                });
        }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    name='name'
                    type='text'
                    value={displayName}
                    label={"Display Name"}
                    required
                    handleChange={(e) => setDisplayName(e.target.value)}
                />
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
                <FormInput
                    name='cpassword'
                    type='password'
                    label={"Confirm Password"}
                    value={cPassword}
                    required
                    handleChange={(e) => setCPassword(e.target.value)}
                />
                <div className='buttons'>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignUp