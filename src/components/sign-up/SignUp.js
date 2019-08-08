import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp = () => {
    
    const [formData, setFormData] = useState({displayName: '', email: '', password: '', confirmPassword: ''});

    const handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = formData;
        if(password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, displayName);
            setFormData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData({[name]: value});
    }

        const {displayName, email, password, confirmPassword} = formData;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required />
                    <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} label='Confirm Password' required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }

export default SignUp;