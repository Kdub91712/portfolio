# Kevin Wilson Portfolio

This project was built using the following technologies:

- React 16.8.6
    - Axios Library for HTTP
    - React Router
    - Okta
    - ES6 Javascript
    - CSS/SASS
    - HTML 5
    - Python 3.6
    - AWS Lambda
    - PHP 7.2
    - Laravel 5.8

## Start App

    yarn run dev

## Development Docker

    docker build -t sample:development . --no-cache

    docker run -it --rm -p 1337:3000 sample:development

## Production Docker

    docker build -f Dockerfile.prod -t sample:prod . --no-cache

    docker run -it --rm -p 1337:80 sample:prod

## Dockerhub Development

    docker build -t kdub91712/react-portfolio .

    docker run --name react-portfolio -p 4680:3000 kdub91712/react-portfolio

## Dockerhub Production

    docker build -t kdub91712/react-portfolio .

    docker run --name react-portfolio -p 4680:80 kdub91712/react-portfolio

## Heroku

    docker build --platform linux/amd64 -t registry.heroku.com/kevin-wilson-portfolio-docker/web .

    docker push registry.heroku.com/kevin-wilson-portfolio-docker/web

    heroku container:release -a kevin-wilson-portfolio-docker web

## Bootstrap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify