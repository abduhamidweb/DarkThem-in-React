// MyComponent.js

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const MyComponent = () => {
    const { dark } = useContext(ThemeContext);

    return (
        <div className={dark ? 'dark' : 'light'}>
            {/* Your component content */}
        </div>
    );
};

export default MyComponent;
