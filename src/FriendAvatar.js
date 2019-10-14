import React, { useEffect, useState } from 'react';

import { getFriendDataById } from './mockServer';

const FriendAvatar = ({ id }) => {
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
        <div><img src={friendData.avatar} alt="avatar" /></div>
    );
}

export default FriendAvatar;
