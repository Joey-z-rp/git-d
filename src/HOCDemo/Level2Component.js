import React from 'react';
import Button from '../UI/button/Button';
import { withTheme } from './withTheme';

const Level2Component = props => {
    const { theme } = props;

    return (
        <div>
            <h2>Here is Level 2 Component</h2>
            <h3>I'm a primary button</h3>
            <Button primary round={theme.round}>primary button</Button>
            <h3>I'm a normal button</h3>
            <Button round={theme.round}>normal button</Button>
        </div>
    );
};

export default withTheme(Level2Component);