import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar';

const Body = ({ user }) => (
    <div className="body">
        <Sidebar user={user} />
        <Content />
    </div>
);

export default Body;
