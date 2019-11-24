import React from 'react';
import { ThemeContextProvider } from './themeContext';
import Level1Component from './Level1Component';

import './contextDemo.css';

const theme = { round: true };

const ContextDemo = () => {
    return (
        <ThemeContextProvider value={theme}>
            <div className="context-demo-container">
                <h1>Context</h1>
                <Level1Component />
            </div>
        </ThemeContextProvider>
    );
};

export default ContextDemo;
