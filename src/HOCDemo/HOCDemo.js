import React from 'react';
import Level1Component from './Level1Component';

import './HOCDemo.css';

const HOCDemo = () => {
    return (
        <div className="hoc-demo-container">
            <h1>HOC</h1>
            <Level1Component />
        </div>
    );
};

export default HOCDemo;
