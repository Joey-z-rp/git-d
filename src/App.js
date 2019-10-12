import React from 'react';

import Body from './Body';
import Nav from './Nav';
import { Provider as UserContextProvider } from './userContext';

import './App.css';

const avatarDog = 'http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/128/22215-dog-icon.png';
const avatarCat = 'https://www.catster.com/wp-content/uploads/2015/06/8698_choc_bosscat_full2.jpg';

class App extends React.Component {
	state = {
		user: {
			avatar: avatarCat,
			name: 'Joey',
			followers: 1234,
			following: 123
		}
	};

	toggleAvatar = () => {
		const { user: { avatar } } = this.state;
		const user = {
			...this.state.user,
			avatar: avatar === avatarCat ? avatarDog : avatarCat,
		};
		this.setState({ user });
	}

	render() {
		const { user } = this.state;

		return (
			<div className="app">
				<UserContextProvider
					value={{
						...user,
						toggleAvatar: this.toggleAvatar,
					}}
				>
					<Nav />
					<Body />
				</UserContextProvider>
			</div>
		);
	}
}

export default App;
