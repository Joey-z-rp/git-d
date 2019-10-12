import React from 'react';

import UserAvatar from './UserAvatar';
import { Consumer as UserContextConsumer } from './UserContext';

const UserStats = () => (
    <UserContextConsumer>
        {user => (
            <div className="user-stats">
                <div>
                    <UserAvatar user={user} />
                    {user.name}
                </div>
                <div className="stats">
                    <div>{user.followers} Followers</div>
                    <div>Following {user.following}</div>
                </div>
            </div>
        )}
    </UserContextConsumer>
);

export default UserStats;
