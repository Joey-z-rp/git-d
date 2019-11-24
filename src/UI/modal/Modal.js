import React from 'react';

import './modal.css';

const Modal = props => {
    const {
        children,
        visible,
        onCloseButtonClick,
    } = props;

    if (!visible) return null;

    return (
        <div className="modal__overlay">
            <div className="modal__content">
                <div className="modal__close-button-wrapper">
                    <span
                        onClick={onCloseButtonClick}
                        className="modal__close-button"
                    >
                        x
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
