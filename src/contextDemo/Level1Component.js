import React from 'react';
import Level2Component from './Level2Component';

const Level1Component = () => {
    return (
        <div>
            <h2>Here is Level 1 Component</h2>
            <Level2Component />
        </div>
    );
};

export default Level1Component;