import { createContext, useState } from 'react';

//create the context
export const GlobalContext = createContext(null);

//create global state that recieve component as a children

function GlobalState({ children }) {
  const [theme, setTheme] = useState('light');

  function handleChangeThemeOnButtonClick() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <GlobalContext.Provider value={{ theme, handleChangeThemeOnButtonClick }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
