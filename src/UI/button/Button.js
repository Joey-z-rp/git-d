import React from 'react';
import classNames from 'classnames';

import './button.css'

const Button = props => {
    const {
        children,
        primary,
        round,
        ...rest
    } = props;

    const classes = classNames({
        'button': true,
        'button--round': round,
        'button--primary': primary,
    });

    return (
        <button
            {...rest}
            className={classes}
        >
            {children}
        </button>
    );
};

export default Button;
