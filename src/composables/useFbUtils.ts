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
  const userProvidedPassword = ref<string>('');
  const newPassword = ref<string>('');
  const newEmail = ref<string>(getAuth().currentUser!.email!);

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

  const changeEmail = async () => {
    errorMsg.value = '';
    if (user && userProvidedPassword.value.length !== 0) {
      try {
        await reauthenticate(userProvidedPassword.value);
        await updateEmail(user, newEmail.value);
        userProvidedPassword.value = '';
        newEmail.value = getAuth().currentUser!.email!;
      } catch (error) {
        if (error instanceof FirebaseError) {
          const errorMessageMap: { [key: string]: string } = {
            'auth/invalid-email': 'Please provide a valid email adress',
            'auth/wrong-password': 'provided password is invalid',
          };
          errorMsg.value =
            errorMessageMap[error.code] ?? 'Something unexpected happened';
        }
        errorMsg.value = 'unknown server error';
      }
    }
    errorMsg.value = 'provide a password';
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
        }
        errorMsg.value = 'unknown server error';
      }
    }
    errorMsg.value = 'provide a password';
  };

  return {
    resetPwEmail,
    changeEmail,
    changePassword,
    reauthenticate,
    userProvidedPassword,
    errorMsg,
    newPassword,
    newEmail,
  };
};
