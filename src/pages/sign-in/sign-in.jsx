import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase';

const SignIn = () => {
  useEffect(async()  => {
    const response = await getRedirectResult(auth);
    
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
    
    },[]);


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

 

  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google redirect</button>
    </div>
  );
  
};


export default SignIn;
