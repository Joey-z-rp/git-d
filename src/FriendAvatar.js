import React from 'react';

const FriendAvatar = ({ isLoading, friendData }) => {
    if (isLoading) return <div>Loading...</div>;

    return (
        <div><img src={friendData.avatar} alt="avatar" /></div>
    );
}

export default FriendAvatar;
