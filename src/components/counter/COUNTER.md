# Counter Component Readme

## Overview
The `Counter` component is a simple React component that allows you to display and manipulate a numeric counter in your web application.

## Usage
1. **Import the Component:**
   ```javascript
   import Counter from './Counter';
   ```

2. **Use the Component:**
   ```jsx
   <Counter />
   ```

## Functionality
The `Counter` component does the following:
- Displays a number in the center of the component.
- Includes two buttons: one for increasing the number and one for decreasing it.
- The counter starts at 0, and you can modify it by clicking the buttons.

## How it Works
1. **State Initialization:**
   - The component uses the `useState` hook to create a state variable called `num` initialized to 0.

     ```javascript
     const [num, setNum] = useState(0);
     ```

2. **Increment Button (`+`):**
   - The increment button increases the `num` state when clicked.
   - It utilizes the `setNum` function with the previous state plus one.

     ```jsx
     <button onClick={() => setNum(prev => prev + 1)}>+</button>
     ```

3. **Decrement Button (`-`):**
   - The decrement button decreases the `num` state when clicked.
   - It uses the `setNum` function with the previous state minus one.

     ```jsx
     <button onClick={() => setNum(prev => prev - 1)}>-</button>
     ```

4. **Displaying the Counter:**
   - The current value of `num` is displayed in the center of the component.

     ```jsx
     <h1>{num}</h1>
     ```

## Example
```jsx
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Counter />
    </div>
  );
}

export default App;
```

Feel free to use and customize this `Counter` component to enhance your React application. It's a great starting point for beginners to understand the basics of state management and event handling in React.