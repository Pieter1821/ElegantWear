import React, { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={() => {
        alert('Sign up successful!');
        setFormFields(defaultFormFields);
        
      
      }}>
        <label>Display name</label>
        <input type="text" required onChange={handleInputChange} name="displayName" value={displayName} />

        <label>Email</label>
        <input type="email" required onChange={handleInputChange} name="email" value={email} />

        <label>Password</label>
        <input type="password" required onChange={handleInputChange} name="password" value={password} />

        <label>Confirm Password</label>
        <input type="password" required onChange={handleInputChange} name="confirmPassword" value={confirmPassword} />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
