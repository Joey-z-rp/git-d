import React from 'react';
import Button from '../UI/button/Button';

const Level2Component = () => {
    return (
        <div>
            <h2>Here is Level 2 Component</h2>
            <h3>I'm a primary button</h3>
            <Button primary round={false}>primary button</Button>
            <h3>I'm a normal button</h3>
            <Button round={false}>normal button</Button>
        </div>
    );
};

export default Level2Component;