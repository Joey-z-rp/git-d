import React from 'react';

import withFriend from './withFriend';

const FriendDetails = ({ isLoading, friendData }) => {
    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <p>id: {friendData.id}</p>
            <p>name: {friendData.name}</p>
        </div>
    );
}

export default withFriend(FriendDetails);
