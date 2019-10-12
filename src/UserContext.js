import React from 'react';

const UserContext = React.createContext();

export const { Provider, Consumer } = UserContext;

// HOC
export const withUser = Component => {
    return function WrapperComponent(props) {
        return (
            <Consumer>
                {user => <Component {...props} user={user} />}
            </Consumer>
        );
    };
};
