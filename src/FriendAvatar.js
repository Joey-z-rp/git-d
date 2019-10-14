import React from 'react';

import useFriendData from './useFriendData';

const FriendAvatar = ({ id }) => {
    const [isLoading, friendData] = useFriendData(id);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div><img src={friendData.avatar} alt="avatar" /></div>
    );
}

export default FriendAvatar;
