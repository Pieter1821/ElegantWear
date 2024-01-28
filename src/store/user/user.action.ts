import { USER_ACTION_TYPES } from './user.types';
import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer';
import { UserData, AdditionalInformation } from '../../utils/firebase/firebase';
import { User } from 'firebase/auth';

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);

export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signUpSuccess = withMatcher(
  (user: UserData, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher((user: UserData & {id:string}) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const SignUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);
