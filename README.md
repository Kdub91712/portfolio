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

    docker build --platform linux/amd64 -f Dockerfile.prod -t registry.heroku.com/kevin-wilson-portfolio-docker/web .

    docker push registry.heroku.com/kevin-wilson-portfolio-docker/web

    heroku container:release -a kevin-wilson-portfolio-docker web
