import { ref } from 'vue';
import {
  getAuth,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { FirebaseError } from '@firebase/util';

export const useFbUtil = () => {
  const errorMsg = ref<string>('');
  const user = getAuth().currentUser;

  const resetPwEmail = async (email: string) => {
    errorMsg.value = '';
    try {
      await sendPasswordResetEmail(getAuth(), email);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const errorMessageMap: { [key: string]: string } = {
          'auth/user-not-found': 'No user with the provided email found',
        };
        errorMsg.value =
          errorMessageMap[error.code] ?? 'Something unexpected happened';
      }
    }
  };

  const changeEmail = async (newEmail: string) => {
    if (user) {
      await updateEmail(user, newEmail);
    }
  };

  const changePassword = async (newPassword: string) => {
    if (user) {
      try {
        await updatePassword(user, newPassword);
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          const errorMessageMap: { [key: string]: string } = {
            'auth/weak-password': 'Password should be at least 6 characters'
          };
          errorMsg.value =
            errorMessageMap[error.code] ?? 'Something unexpected happened';
        }
      }
    }
  };

  const reauthenticate = async (newPassword: string) => {
    if (user && user.email !== null) {
      const credential = EmailAuthProvider.credential(user.email, newPassword);
      await reauthenticateWithCredential(user, credential);
    }
  };

  return {
    resetPwEmail,
    changeEmail,
    changePassword,
    reauthenticate,
    errorMsg,
  };
};
