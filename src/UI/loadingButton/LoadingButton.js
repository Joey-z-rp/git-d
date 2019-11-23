import React from 'react';
import { Loader } from 'semantic-ui-react';

import Button from '../button/Button';

const LoadingButton = props => {
    const {
        children,
        isLoading,
        ...rest
    } = props;

    if (isLoading) {
        return (
            <Button {...rest}>
                <Loader active inline size="tiny" />
            </Button>
        );
    }

    return (
        <Button
            {...rest}
        >
            {children}
        </Button>
    );
};

export default LoadingButton;
