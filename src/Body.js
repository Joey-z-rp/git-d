import React from 'react';

import Sidebar from './Sidebar';

const Body = ({ sidebar, content }) => (
    <div className="body">
        <Sidebar>{sidebar}</Sidebar>
        {content}
    </div>
);

export default Body;
