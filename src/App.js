import React from 'react';

import Body from './Body';
import Content from './Content';
import Nav from './Nav';
import UserAvatar from './UserAvatar';
import UserStats from './UserStats';

import './App.css';

class App extends React.Component {
	state = {
		user: {
			avatar: 'https://www.catster.com/wp-content/uploads/2015/06/8698_choc_bosscat_full2.jpg',
			name: 'Joey',
			followers: 1234,
			following: 123
		}
	};

	render() {
		const { user } = this.state;

		return (
			<div className="app">
				<Nav>
					<UserAvatar user={user} size="small" />
				</Nav>
				<Body
					sidebar={<UserStats user={user} />}
					content={<Content />}
				/>
			</div>
		);
	}
}

export default App;
