# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Searh gifs functionality

Search functionality has been created on separate route, just to keep code cleaner. By default we fetch some data with initial searchQuery (just did not wanted to keep page blank). User can fetch gifs by submitting query as well as can add more gifs by pressing load more - in fact one function could sort it out but just for this exaple I splitted that into 2 separate methods (unfortunately some duplications).

## Unit tests

Some units tests were written - writting tests for all components and each scenario would be some overkilling for that task, however I still tried to mark some of them.

## Styles

For styling I used [styled-components](https://styled-components.com/docs). Also created some basic theming structure to fetch properties directly from theme.

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
