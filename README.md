# What is react

version 17.0.2
open source library building user interfaces
Not a framework
Focus on UI
Component based Architecture
Reusable Code
React is declarative
 -Tell react what you want and react will build the actual UI.
Stateless functional component
 -Simple functions
 -Use Func components as much as possible
 -Absence of 'this' keyword
 -Solution without using state
 -Mainly responsible for the UI
 -Stateless/Dumb/Presentational
Statefull class component
 -More feature rich
 -Maintain their own private data - state
 -Complex UI logic
 -Provide Lifecycle hooks
 -Stateful/Smart/Container
 JSX
  -Javascript XML(JSX) -Extension to the javascript language syntax.
  -Write XML-like code for elesments and components.
  -JSX tags hava a tag name,attributes and children.
  -JSX is not a necessity to write React applications.
  -JSX makes your react code simpler and elegant.
  -JSX ultimately transpiles to pure Javascript which is understood by the 
   browser.
 Props
  -props get passed to the components
  -Function parameters
  -props are immutable
  -props-Functional Components
   this.props-Class Components
 State
  -state is managed within the component
  -Variables declared in the function body
  -state can be changed
  -useState Hook-Functional Components
   this.state-Class Components
 setState
  -Always make use of setState and never modify the state directly.
  -Code has to be executed after the state has been updated?Place the code in
   the callback function which is the second argument to the setState method.
  -When you have to update state based on the previous state value,pass in a
   function as an argument instead of the regular object.
 Keys
  -A "key" is a special string attribute you need to include when creating lists 
   of elements.
  -keys give the elements a stable identity.
  -keys help React identify which items have changed, are added or are removed.
  -Help in efficient update of the user interface.
 When to use index as a key?
  -The items in your list do not have a unique id.
  -The list is a static list and will not change.
  -The list never be reordered or filtered.
 Styling React Components
  -1. CSS stylesheets
  -2. Inline styling
  -3. CSS Modules
  -4. CSS in JS Libraries(Recommended)
  video 21 code
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
