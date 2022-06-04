import { ref, type Ref, onBeforeMount } from 'vue';

const userTheme: Ref<string> = ref('dark');

export const useDark = () => {
  const setTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
  };

  const getTheme = () => {
    return localStorage.getItem('theme');
  };

  const getMediaPreference = () => {
    const hasDarkPreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (hasDarkPreference) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem('theme');
    if (activeTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  onBeforeMount(() => {
    const initUserTheme = getTheme() || getMediaPreference();
    setTheme(initUserTheme);
  });

  return { toggleTheme, userTheme };
};
