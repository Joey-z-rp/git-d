import React from 'react';
import { ThemeContextProvider } from '../contextDemo/themeContext';
import Level1Component from './Level1Component';

import './HOCDemo.css';

const theme = { round: true };

const HOCDemo = () => {
    return (
        <ThemeContextProvider value={theme}>
            <div className="hoc-demo-container">
                <h1>HOC</h1>
                <Level1Component />
            </div>
        </ThemeContextProvider>
    );
};

export default HOCDemo;
