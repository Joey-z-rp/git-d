import React from 'react';

const UserAvatar = ({ user, size }) => (
    <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
    />
);

export default UserAvatar;
