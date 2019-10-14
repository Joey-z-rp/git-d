const mockFriendData = [
    {
        id: 123,
        name: 'John',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png',
    },
    {
        id: 456,
        name: 'Sam',
        avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-373-456325.png',
    },
];

export const getFriendDataById = id => new Promise(resolve => {
    setTimeout(() => {
        resolve(mockFriendData.find(friend => friend.id === id));
    }, 2000);
});
