import React from 'react';

import FriendAvatar from './FriendAvatar';
import FriendDataProvider from './FriendDataProvider';
import FriendDetails from './FriendDetails';

import './App.css';

class App extends React.Component {
	state = {
		isFlipped: false,
	};

	render() {
		return (
			<div className="App">
				<FriendDataProvider id={this.state.isFlipped ? 123 : 456}>
					{(isLoading, friendData) => (
						<FriendAvatar isLoading={isLoading} friendData={friendData} />
					)}
				</FriendDataProvider>
				<FriendDataProvider id={this.state.isFlipped ? 456 : 123}>
					{(isLoading, friendData) => (
						<FriendDetails isLoading={isLoading} friendData={friendData} />
					)}
				</FriendDataProvider>
				<button onClick={() => this.setState(state => ({ isFlipped: !state.isFlipped }))}>
					Flip id
				</button>
			</div>
		);
	}
}

export default App;
