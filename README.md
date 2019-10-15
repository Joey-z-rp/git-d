## Why use hooks

### Drawbacks of Class Components:
- Need to call super()
- Confusing 'this' binding
- Life cycle methods force non-related logic being put togather
- Classes are less effecient in minification
- Hard to reuse non-visual logic
- HOC and render props pattern may cause wrapper hell(because what they are really doing is most likely non-UI work but we need to make them components)

### Benifits of Hooks:
- Doesn't add unnecessary component hierarchy
- Group related logic togather
- Make non-visual logic easy to reuse
- No complex HOC or render props pattern anymore
- Make components easy to split
- Reduce bundle size(slightly)
