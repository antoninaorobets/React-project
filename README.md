
# React-project 
National Parks

This site collected information about 50 most popular National Parks in USA. 
Users can serch for a park by name or state and check information about it.
User can marked visited parks and create a list of parks they want to visit.

MVP:
As User I can view a list of National parks in US.
As User I can view information about a park when I click on it
As User I can filter parks by state
As User I can marked parks I have visited


Project requirements:
1. You must make a single page application using create-react-app  -> 
2. Your app should use at least 5 components in a way that keeps your code well organized
-> 1|App
    2|TopMenu
        3|ParksList
            4|Filter
            5|ParkCards
        6|ParkDetail
            7|ImgCarousel
        8|My Parks
        9|Login
    10|BottomMenu
3. There should be at least 3 client-side routes using react-router
        <Route exact path="/" element={<ParksList allParks={allParks} />}/>
        <Route path='/myparks' element={<MyParks/>} />
        <Route path="/parks/:code" element={<ParkDetail allParks={allParks} />}/>
        <Route path="/login" element={<LoginForm onLoggin={onLoggin}/>} />

4. Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. 
        GET: get information about parks
        POST: create user record
        PATCH: save favorit parks for user

To do:
- add context
- logout
- 


UI:
https://react.semantic-ui.com/usage/

US state code list:
https://gist.github.com/mshafrir/2646763

API
https://rapidapi.com/jonahtaylor/api/national-park-service


FixedMenuLayout
https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/FixedMenuLayout.js

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
