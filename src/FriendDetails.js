import React from 'react';

import { getFriendDataById } from './mockServer';

class FriendDetails extends React.Component {
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
            <div>
                <p>id: {this.state.friendData.id}</p>
                <p>name: {this.state.friendData.name}</p>
            </div>
        );
    }
}

export default FriendDetails;
