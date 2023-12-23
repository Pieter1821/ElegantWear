import { useDispatch } from 'react-redux';
import { useState } from 'react';
import FormInput from '../form-input/form-input';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';

import { signInWithGooglePopup } from '../../utils/firebase/firebase';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
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

  const handleInputChange = (event) => {
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
        <FormInput label="Email" type="email" required onChange={handleInputChange} name="email" value={email} />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleInputChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGooglePopup}>
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
