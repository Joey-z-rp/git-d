import React from 'react';

import { getFriendDataById } from './mockServer';

const withFriend = Component => {
    return class WithFriendWrapper extends React.Component {
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
            return <Component {...this.props} isLoading={this.state.isLoading} friendData={this.state.friendData} />;
        }
    }
};


export default withFriend;
