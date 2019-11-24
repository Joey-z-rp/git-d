import React from 'react';
import { ThemeContextConsumer } from '../contextDemo/themeContext';


export const withTheme = Component => {
    return props => {
        return (
            <ThemeContextConsumer>
                {
                    theme => <Component theme={theme} {...props} />
                }
            </ThemeContextConsumer>
        );
    };
};