import React from 'react';
import Button from '../UI/button/Button';
import LoadingButton from '../UI/loadingButton/LoadingButton';

import './UIDemo.css';

const UIDemo = () => {
    return (
        <div>
            <h1>UI Component Demo</h1>
            <div className="ui-demo-container">
                <h2>Button</h2>
                <Button primary round>my button</Button>
                <h2>Loading Button</h2>
                <LoadingButton round isLoading>loaded</LoadingButton>
            </div>
        </div>
    );
};

export default UIDemo;
