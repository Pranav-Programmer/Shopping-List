
# Shopping List Component

The Shopping List Component is a reusable React component that allows users to create and manage a shopping list. It provides a user-friendly interface for adding and removing items from the list.
## Component Features

* Add new items to the shopping list
* Remove items from the shopping list
* Automatically saves the list to local storage for persistence


## Installation
To use the Shopping List Component in your React web app, follow these steps:

1. Install the required dependencies:

```bash
  npm install @material-ui/core
```

2. Copy the 'ShoppingList.js' file into your project.
3. Import the component into your desired file:

```bash
  import ShoppingList from './path/to/ShoppingList';
```

4. Use the 'ShoppingList' component in your JSX code:

```bash
  function App() {
  return (
    <div>
      {/* Your existing code */}
      <ShoppingList />
      {/* Your existing code */}
    </div>
  );
}
```
## Usage

The 'ShoppingList' component can be customized by modifying the styles defined in the 'useStyles' function within the component file. The styles are implemented using Material-UI's styling system.

To further customize the component, you can modify the JSX structure within the component file. For example, you can add additional form fields or change the layout.

![Screenshot 2023-04-03 172713](https://user-images.githubusercontent.com/79044490/229504389-c77bae1c-557d-4290-8ad4-ed3e53f88f7e.png)
![Screenshot 2023-04-03 172747](https://user-images.githubusercontent.com/79044490/229504440-6ce87a41-6d65-4920-84ff-fa98b8070a74.png)

### Example

Here's an example of how to use the 'ShoppingList' component in your React web app:

```bash
  import React from 'react';
import ShoppingList from './path/to/ShoppingList';

function App() {
  return (
    <div>
      <h1>Welcome to My Shopping App</h1>
      <ShoppingList />
    </div>
  );
}

export default App;
```
## 🚀 Credits

TThe Shopping List Component was created by Pranav Dharme.

Happy coding!
