import React from 'react';

const Modal = props => {
    const {
        children,
        visible,
        ...rest
    } = props;

    if (!visible) return null;

    return (
        <div>

        </div>
    );
};

export default Modal;
