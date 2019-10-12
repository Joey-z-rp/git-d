import React from 'react';

import { withUser } from './userContext';

const Content = ({ user }) => (
    <div className="content">
        <p>main content here</p>
        <button onClick={user.toggleAvatar}>toggle avatar</button>
    </div>
);

export default withUser(Content);
