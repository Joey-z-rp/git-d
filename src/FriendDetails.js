import React from 'react';

import useFriendData from './useFriendData';

const FriendDetails = ({ id }) => {
    const [isLoading, friendData] = useFriendData(id);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <p>id: {friendData.id}</p>
            <p>name: {friendData.name}</p>
        </div>
    );
}

export default FriendDetails;
