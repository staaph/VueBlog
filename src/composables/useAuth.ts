import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { ref, type Ref } from 'vue';
import { FirebaseError } from '@firebase/util';
import { auth } from '@/firebase/config';
import { errorMessage } from '@/composables/errorMsg';

export const user: Ref<object | null> = ref(auth.currentUser);

export const useAuth = () => {
  const errorMsg: Ref<string | unknown> = ref();

  /**
   * login with email & password
   * @param email pass email from input
   * @param password pass password from input
   */
  const login = async (email: string, password: string) => {
    errorMsg.value = '';
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      error instanceof FirebaseError ? errorMsg.value =
      errorMessage[error.code] ?? 'Something unexpected happened' : errorMsg.value = 'unknown server error';
    }
  };

  /**
   * sign user in using email and password
   * @param email pass email from input
   * @param password pass password from input
   */
  const signup = async (email: string, password: string) => {
    errorMsg.value = '';
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
      error instanceof FirebaseError ? errorMsg.value =
      errorMessage[error.code] ?? 'Something unexpected happened' : errorMsg.value = 'unknown server error';
    }
  };

  /**
   * log user in anonymously
   */
  const loginAnonymous = () => {
    errorMsg.value = '';
    try {
      signInAnonymously(auth);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        errorMsg.value = 'Something unexpected happened';
      } else {
        errorMsg.value = 'unknown server error';
      }
    }
  };

  /**
   * login with Google, opens popup
   */
  const loginWithGoogle = async () => {
    errorMsg.value = '';
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      errorMsg.value = 'Something unexpected happened';
    }
  };

  /**
   * log user out
   */
  const logout = async () => {
    errorMsg.value = '';
    try {
      await signOut(auth);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        errorMsg.value = 'Something unexpected happened.';
      } else {
        errorMsg.value = 'unknown server error';
      }
    }
  };

  onAuthStateChanged(auth, (_user: object|null) => {
    user.value = _user;
    return user;
  });

  return {
    login,
    signup,
    loginAnonymous,
    loginWithGoogle,
    logout,
    errorMsg,
  };
};
