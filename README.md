## Why use hooks

### Drawbacks of Class Components
- Need to call super()
- Confusing(or not) 'this' binding
- Life cycle methods force non-related logic being put together
```javascript
class MyComponent extends React.Component {
    componentDidMount() {
        // These two parts are not logically related yet we need to put them togather
        fetchData();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {...}
    
	  render() {...}
}
```
- Classes are less effecient in minification
- Hard to reuse non-visual logic
```javascript
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
            }); // Same data fetching logic need to be repeated
        }
    }

	render() {
        if (this.state.isLoading) return <div>Loading...</div>;

        return (
            <div><img src={this.state.friendData.avatar} alt="avatar" /></div>
        );
    }
}
```
- HOC and render props pattern may cause wrapper hell(because what they are really doing is most likely non-UI work but we need to make them components)
```javascript
// Extracted data fetching logic but there is still some duplication inside the HOC
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

// Usage
withFriend(FriendAvatar); // this creates a wrapper component
```
- function cannot be part of the data flow(because the identity of the class method/property stays the same)
- Side effects are not driven by props and state(bacause the mutable 'this' object) which is a common source of bugs

### Benefits of Hooks
- Don't add unnecessary component hierarchy
- Group related logic togather
- Make non-visual logic easier to reuse
- No complex HOC or render props pattern anymore
- Reduce bundle size(slightly)
- Don't block browser from updating pages(useEffect runs after reflow and painting)

## How to use Hooks
A function component equivalent to the above class component would be:
```javascript
const FriendAvatar = ({ id }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [friendData, setFriendData] = useState({});

	useEffect(() => {
		setIsLoading(true);
		getFriendDataById(id).then(friendData => {
		    setFriendData(friendData);
		    setIsLoading(false);
		});
	}, [id]);
	
	if (isLoading) return <div>Loading...</div>;

        return (
            <div><img src={friendData.avatar} alt="avatar" /></div>
        );
};
```
Run through:
- `const [isLoading, setIsLoading] = useState(false);` uses `useState` to create state for function component.
	- The `false` passed to `useState` will be the initial value of `isLoading` on first render. `setIsLoading` is similar to `this.setState`, except it replaces the previous value
	- Calling `setIsLoading` will cause the component to rerender
	- The reference of `setIsLoading` stays the same for every render
- `const [friendData, setFriendData] = useState({});` creates a separate state in the component
- `useEffect` takes the first argument as the effect callback, which will be run after the rendering(after the browser actually updates the screen)
- the second argument of `useEffect` is the dependency array which tells React when to rerun `useEffect`
	- `[]` indicates that the effect should be run only after the first render
	- `[id]` indicates that the effect should be run every time `id` changes
	- the change of any element in the array would cause the `useEffect` to rerun
	
### Custom hooks
The above example can be re-written as:
```javascript
import { useFriendData } from './useFriendData';

const FriendAvatar = ({ id }) => {
	const [isLoading, friendData] = useFriendData(id);
	
	if (isLoading) return <div>Loading...</div>;

        return (
            <div><img src={friendData.avatar} alt="avatar" /></div>
        );
};

// useFriendData.js
export const useFriendData = id => {
	const [isLoading, setIsLoading] = useState(false);
	const [friendData, setFriendData] = useState({});

	useEffect(() => {
		setIsLoading(true);
		getFriendDataById(id).then(friendData => {
		    setFriendData(friendData);
		    setIsLoading(false);
		});
	}, [id]);
	
	return [isLoading, friendData];
};
```
- This `useFriendData` custom hook can be used in different components and will create completely separate state for each component
- No unnecessary wrapper component created

### Clean up effects
```javascript
const MyComponent = () => {
	useEffect(() => {
		const handleScroll = () => {}; // do something with scrolling
	
		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	
	return <div>...</div>;
};
```
- To do the clean up for an effect, you can return a function in the useEffect callback(the first argument)
- This function will be run before the next useEffect callback runs
	- the flow would be: first render -> `window.addEventListener('scroll', handleScroll);` -> second render -> `window.removeEventListener('scroll', handleScroll);` -> `window.addEventListener('scroll', handleScroll);` (with the newly created handleScroll function) -> ...
- If the dependency array is `[]`, the clean up function will be run after the component is removed from the component tree

## Hooks Best Practices
- Should only be called inside a React component
- Should be called in a way that subsequent renders wouldn't change the calling order of hooks(e.g not inside loops or if statements)
- Be careful with hooks/event handlers that use component props or state, make sure to add these props or state to the dependency array(the 2nd argument of certain hooks, e.g useEffect), otherwise you may get stale props or state
```javascript
// can you spot anything wrong with this code snippet?
const FriendAvatar = ({ id }) => {
    const [isLoading, friendData] = useFriendData(id);
  
    const logFriendName = () => console.log(friendData.name);
  
    useEffect(() => {
        window.addEventListener('scroll', logFriendName);
 
        return () => {
            window.removeEventListener('scroll', logFriendName);
        };
    }, []);
 
    if (isLoading) {
        return <div>Loading...</div>;
    }
  
    return (
        <div><img src={friendData.avatar} alt="avatar" /></div>
    );
};
```
Fix:
```javascript
const FriendAvatar = ({ id }) => {
    const [isLoading, friendData] = useFriendData(id);

    useEffect(() => {
     	const logFriendName = () => console.log(friendData.name);
	
        window.addEventListener('scroll', logFriendName);
 
        return () => {
            window.removeEventListener('scroll', logFriendName);
        };
    }, [friendData]);
 
    if (isLoading) {
        return <div>Loading...</div>;
    }
  
    return (
        <div><img src={friendData.avatar} alt="avatar" /></div>
    );
};
```
- Define side effect functions inside `useEffect`
- If side effect functions can't be defined inside `useEffect`(e.g shared logic), hoist them outside the component or use `useCallback`
```javascript
const MyComponent = ({ someProp }) => {
    const sharedHandler = useCallback(() => {
    	console.log(someProp);
    }, [someProp]);

    // first effect
    useEffect(() => {
    	 window.addEventListener('scroll', sharedHandler);
	 
	 return () => {
            window.removeEventListener('scroll', sharedHandler);
        };
    }, [sharedEffect]);
    
    // second effec
    useEffect(() => {
    	 window.addEventListener('mousemove', sharedHandler);
	 
	 return () => {
            window.removeEventListener('mousemove', sharedHandler);
        };
    }, [sharedEffect]);
  
    return (
        <div>...</div>
    );
};
```

## Tools for hooks
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): checks patterns that are not recommended
