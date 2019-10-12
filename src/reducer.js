const initialState = {
	user: {
		avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
		name: "Dave",
		followers: 1234,
		following: 123,
	}
};

function reducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default reducer;