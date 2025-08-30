import { useDispatch } from 'react-redux';
import { useState, FormEvent, ChangeEvent } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import { signInWithGooglePopup } from '../../utils/firebase/firebase';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import React from 'react';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error) {
        case 'auth/wrong-password':
          alert('Incorrect password for email ');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email address');
          break;
        default:
          console.log('user creation encountered an error', error);
      }
    }
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>

        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText id="email" type="email" required onChange={handleInputChange} name="email" value={email} />
        </div>

        <div className="p-field">
          <label htmlFor="password">Password</label>
          <Password id="password" feedback={false} required onChange={handleInputChange} name="password" value={password} />
        </div>

        <ButtonsContainer>
          <Button type="submit" label="Sign in" />
          <Button label="Google sign in" className="p-button-secondary" onClick={signInWithGooglePopup} />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
