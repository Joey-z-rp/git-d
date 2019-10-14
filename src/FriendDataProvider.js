import React from 'react';

import { getFriendDataById } from './mockServer';

class FriendDataProvider extends React.Component {
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
        return this.props.children(this.state.isLoading, this.state.friendData);

        // return this.props.render({ isLoading, friendData });
    }
}

export default FriendDataProvider;
