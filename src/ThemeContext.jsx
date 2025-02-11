import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); 
  
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

// Add prop-types validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired 
};
