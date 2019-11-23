import React from 'react';
import Button from '../UI/button/Button';
import LoadingButton from '../UI/loadingButton/LoadingButton';

const ContextDemo = () => {
    return (
        <div>
            <h1>Context</h1>
            <Button primary round>my button</Button>
            <LoadingButton round isLoading>loaded</LoadingButton>
        </div>
    );
};

export default ContextDemo;
