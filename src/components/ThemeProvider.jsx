// ThemeProvider.js

import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    const toggle = () => {
        setDark(!dark);
    };

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
