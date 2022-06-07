import { ref } from 'vue';
import {
  getAuth,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser
} from 'firebase/auth';
import { FirebaseError } from '@firebase/util';
import uiState from '@/store/modalState';
const {toggleDashboardModal} = uiState

export const useFbUtil = () => {
  const errorMsg = ref<string>('');
  const user = getAuth().currentUser;
  const userProvidedPassword = ref<string>('');
  const newPassword = ref<string>('');

  const resetPwEmail = async (email: string) => {
    errorMsg.value = '';
    try {
      await sendPasswordResetEmail(getAuth(), email);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        const errorMessageMap: { [key: string]: string } = {
          'auth/user-not-found': 'No user with the provided email found',
          'auth/missing-email': 'Please provide an email adress',
          'auth/invalid-email': 'Please provide a valid email',
        };
        errorMsg.value =
          errorMessageMap[error.code] ?? 'Something unexpected happened';
      } else {
        errorMsg.value = 'unknown server error';
      }
    }
  };

  const reauthenticate = async (currentPassword: string) => {
    if (user && user.email !== null) {
      userProvidedPassword.value = currentPassword;
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);
    }
  };

  const changeEmail = async (newEmail: string) => {
    errorMsg.value = '';
    if (user && userProvidedPassword.value.length !== 0) {
      try {
        await reauthenticate(userProvidedPassword.value);
        await updateEmail(user, newEmail);
        userProvidedPassword.value = '';
      } catch (error) {
        if (error instanceof FirebaseError) {
          const errorMessageMap: { [key: string]: string } = {
            'auth/invalid-email': 'Please provide a valid email adress',
            'auth/wrong-password': 'provided password is invalid',
            'auth/email-already-in-use': 'email is already in use',
          };
          errorMsg.value =
            errorMessageMap[error.code] ?? 'Something unexpected happened';
        } else {
          errorMsg.value = 'unknown server error';
        }
      }
    } else {
      errorMsg.value = 'provide a password';
    }
  };

  const changePassword = async () => {
    errorMsg.value = '';
    if (user && userProvidedPassword.value.length !== 0) {
      try {
        if (newPassword.value.length !== 0) {
          await reauthenticate(userProvidedPassword.value);
          await updatePassword(user, newPassword.value);
          userProvidedPassword.value = '';
          newPassword.value = '';
        }
        errorMsg.value = 'provide a new password';
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          const errorMessageMap: { [key: string]: string } = {
            'auth/weak-password': 'Password should be at least 6 characters',
            'auth/wrong-password': 'provided password is invalid',
          };
          errorMsg.value =
            errorMessageMap[error.code] ?? 'Something unexpected happened';
        } else {
          errorMsg.value = 'unknown server error';
        }
      }
    } else {
      errorMsg.value = 'provide a password';
    }
  };

  const deleteAccount = async (currentPw:string) => {
    if (user) {
      await reauthenticate(currentPw);
      await deleteUser(user);
      toggleDashboardModal(false)
    }
  };

  return {
    resetPwEmail,
    changeEmail,
    changePassword,
    reauthenticate,
    deleteAccount,
    userProvidedPassword,
    errorMsg,
    newPassword,
  };
};
