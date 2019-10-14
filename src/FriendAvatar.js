import React from 'react';

import withFriend from './withFriend';

const FriendAvatar = ({ isLoading, friendData }) => {
    if (isLoading) return <div>Loading...</div>;

    return (
        <div><img src={friendData.avatar} alt="avatar" /></div>
    );
}

export default withFriend(FriendAvatar);
