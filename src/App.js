import React from 'react';

import FriendAvatar from './FriendAvatar';
import FriendDetails from './FriendDetails';

import './App.css';

class App extends React.Component {
	state = {
		isFlipped: false,
	};

	render() {
		return (
			<div className="App">
				<FriendAvatar id={this.state.isFlipped ? 123 : 456} />
				<FriendDetails id={this.state.isFlipped ? 456 : 123} />
				<button onClick={() => this.setState(state => ({ isFlipped: !state.isFlipped }))}>
					Flip id
				</button>
			</div>
		);
	}
}

export default App;
