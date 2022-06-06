import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { FirebaseError } from '@firebase/util';

export const useFbUtil = () => {
  const errorMsg = ref<string>('');

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
  return { resetPwEmail, errorMsg };
};
