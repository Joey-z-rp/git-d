import React from 'react';

import { getFriendDataById } from './mockServer';

class FriendAvatar extends React.Component {
    state = {
        isLoading: false,
        friendData: {},
    };

    componentDidMount() {
        this.setState({ isLoading: true }, () => {
            getFriendDataById(this.props.id).then(friendData => this.setState({ friendData, isLoading: false }));
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.setState({ isLoading: true }, () => {
                getFriendDataById(this.props.id).then(friendData => this.setState({ friendData, isLoading: false }));
            });
        }
    }

	render() {
        if (this.state.isLoading) return <div>Loading...</div>;

        return (
            <div><img src={this.state.friendData.avatar} alt="avatar" /></div>
        );
    }
}

export default FriendAvatar;
