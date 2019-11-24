import React, { useState } from 'react';
import Button from '../UI/button/Button';
import LoadingButton from '../UI/loadingButton/LoadingButton';
import Modal from '../UI/modal/Modal';

import './UIDemo.css';

const UIDemo = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            <h1>UI Component Demo</h1>
            <div className="ui-demo-container">
                <h2>Button</h2>
                <Button primary round>my button</Button>
                <h2>Loading Button</h2>
                <LoadingButton round isLoading>loaded</LoadingButton>
                <h2>Modal</h2>
                <Button
                    onClick={() => setIsModalVisible(true)}
                >
                    open modal
                </Button>
                <Modal
                    visible={isModalVisible}
                    onCloseButtonClick={() => setIsModalVisible(false)}
                >
                    <p>I'm modal content 1</p>
                    <p>I'm modal content 2</p>
                    <p>I'm modal content 3</p>
                    <p>I'm modal content 4</p>
                </Modal>
            </div>
        </div>
    );
};

export default UIDemo;
