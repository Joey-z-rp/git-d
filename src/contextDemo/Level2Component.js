import React from 'react';
import Button from '../UI/button/Button';
import { ThemeContextConsumer } from './themeContext';

const Level2Component = () => {
    return (
        <ThemeContextConsumer>
            {
                theme => (
                    <div>
                        <h2>Here is Level 2 Component</h2>
                        <h3>I'm a primary button</h3>
                        <Button primary round={theme.round}>primary button</Button>
                        <h3>I'm a normal button</h3>
                        <Button round={theme.round}>normal button</Button>
                    </div>
                )
            }
        </ThemeContextConsumer>
    );
};

export default Level2Component;