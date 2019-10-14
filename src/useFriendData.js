import { useEffect, useState } from 'react';

import { getFriendDataById } from './mockServer';

const useFriendData = id => {
    const [isLoading, setIsLoading] = useState(false);
    const [friendData, setFriendData] = useState({});

    useEffect(() => {
        setIsLoading(true);
        getFriendDataById(id).then(friendData => {
            setFriendData(friendData);
            setIsLoading(false);
        });
    }, [id]);

    return [isLoading, friendData];
};

export default useFriendData;
