# Getting Started with the Starship ToDo List

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Live Coding

- Load the initial list from a JSON file or Javascript object.
- Use the text input and button to add a new item to the Todo list. Does not have to be persistent.
- Add a button next to each item in order to delete that item from the list.
- Separeate the list to a separate component.
- Style the list: Remove bullets and place the delete button to the right of the row.
- Optional: Optimize the rendering of the list items.

Notes - by Asim:

For the css for unordered list I would do the following to move things to the right and hide the ul bullet
.delete {
  float: right;
}

ul {
  list-style-type: none;
}

Optimizations that I would do:

1. In a todo list application, the TaskList might re-render frequently as tasks are added or removed. However, if the tasks prop hasn't changed, there's no need to re-render the entire list. React.memo helps avoid these unnecessary re-renders, potentially improving performance, especially for larger lists.

2. useCallback memoizes the deleteTask function, ensuring that it's only recreated when its dependencies change (in this case, there are no dependencies, so it's created once and reused).