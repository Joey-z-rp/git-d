import React from 'react';
import { Consumer as UserContextConsumer } from './UserContext';

const UserAvatar = ({ size }) => (
    <UserContextConsumer>
        {user => (
            <img
                className={`user-avatar ${size || ""}`}
                alt="user avatar"
                src={user.avatar}
            />
        )}
    </UserContextConsumer>
);

export default UserAvatar;
