import React from 'react';
import Level1Component from './Level1Component';

import './contextDemo.css';

const ContextDemo = () => {
    return (
        <div className="context-demo-container">
            <h1>Context</h1>
            <Level1Component />
        </div>
    );
};

export default ContextDemo;
