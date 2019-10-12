import React from 'react';

import UserStats from './UserStats';

const Sidebar = ({ user }) => (
    <div className="sidebar">
        <UserStats user={user} />
    </div>
);

export default Sidebar;
