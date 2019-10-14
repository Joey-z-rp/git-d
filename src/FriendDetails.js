import React, { useEffect, useState } from 'react';

import { getFriendDataById } from './mockServer';

const FriendDetails = ({ id }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [friendData, setFriendData] = useState({});

    useEffect(() => {
        setIsLoading(true);
        getFriendDataById(id).then(friendData => {
            setFriendData(friendData);
            setIsLoading(false);
        });
    }, [id]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <p>id: {friendData.id}</p>
            <p>name: {friendData.name}</p>
        </div>
    );
}

export default FriendDetails;
