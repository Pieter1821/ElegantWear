
import { USER_ACTION_TYPES } from './user.types';
import { Action,ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer';
import { UserData } from '../../utils/firebase/firebase';

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>

export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, Password: string }>;

export const emailSignInStart = (email: string,Password: string):EmailSignInStart => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, Password });

export const googleSignInStart = ():GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const setCurrentUser = (UserData:UserData):SetCurrentUser => 
 createAction(USER_ACTION_TYPES.SET_CURRENT_USER , UserData);

export const checkUserSession = ():CheckUserSession => 
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

// TODO the rest 
export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};

export const signInFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
};

export const signUpStart = (email, password, displayName) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};

export const signUpSuccess = (user, additionalDetails) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });
};

export const signUpFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
};

export const signOutStart = () => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
};

export const signOutSuccess = () => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
};

export const signOutFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
};
