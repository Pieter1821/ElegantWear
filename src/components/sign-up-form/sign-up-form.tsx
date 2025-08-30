import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { SignUpStart } from '../../store/user/user.action';
import { SignUpContainer } from './sign-up-form.styles';
import { AuthError, AuthErrorCodes } from 'firebase/auth'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      dispatch(SignUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        console.error('User creation encountered an error', error);
      }
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>

      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label htmlFor="displayName">Display Name</label>
          <InputText id="displayName" name="displayName" value={displayName} required onChange={handleInputChange} />
        </div>

        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText id="email" name="email" value={email} required onChange={handleInputChange} />
        </div>

        <div className="p-field">
          <label htmlFor="password">Password</label>
          <Password id="password" name="password" value={password} required onChange={handleInputChange} feedback={false} />
        </div>

        <div className="p-field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Password id="confirmPassword" name="confirmPassword" value={confirmPassword} required onChange={handleInputChange} feedback={false} />
        </div>

        <Button type="submit" label="Sign up" />
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
