import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [formData, setFormData] = useState({email: "", password: ""});

  const handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = formData;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    setFormData({email: "", password: ""});
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setFormData({[name]: value})
  };
    const {email, password} = formData;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={handleChange}
            value={email}
            required
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  };

export default SignIn;
