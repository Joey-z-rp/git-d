import React from 'react';
import { connect } from "react-redux";

import UserAvatar from './UserAvatar';

const UserStats = ({ user }) => (
    <div className="user-stats">
        <div>
            <UserAvatar />
            {user.name}
        </div>
        <div className="stats">
            <div>{user.followers} Followers</div>
            <div>Following {user.following}</div>
        </div>
    </div>
);

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(UserStats);

