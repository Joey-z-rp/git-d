import React from 'react';

import UserAvatar from './UserAvatar';

const Nav = ({ user }) => (
    <div className="nav">
        <UserAvatar user={user} size="small" />
    </div>
);

export default Nav;
