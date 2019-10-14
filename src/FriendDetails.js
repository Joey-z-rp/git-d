import React, { useCallback, useEffect } from 'react';

import useFriendData from './useFriendData';

const FriendDetails = ({ id }) => {
    const [isLoading, friendData] = useFriendData(id);

    const logFriendData = useCallback(() => console.log(friendData.id, friendData.name), [friendData]);

    useEffect(() => {
        window.addEventListener('scroll', logFriendData);

        return () => {
            window.removeEventListener('scroll', logFriendData);
        };
    }, [logFriendData]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <p>id: {friendData.id}</p>
            <p>name: {friendData.name}</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
            <p>some content</p>
        </div>
    );
}

export default FriendDetails;
