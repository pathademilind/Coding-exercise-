# MaterialProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## How it works
Making requests to the Mock data
For convenience, I have created mock data file for the application to make requests against. You can view the API spec here which contains all routes & responses for the server.

## Getting started
Make sure you have the Angular CLI installed globally. then run npm install to resolve all dependencies (might take a minute).

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Building the project
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Functionality overview
The example application is develop to manage Contact details of different users. It uses a mock data for all requests.

## General functionality:

GET and display paginated lists of contacts
Add contacts
Modify contacts
Delete contacts
Detail contact

## The general page breakdown looks like this:

Home page (URL: / )
List of contacts
Option to add contacts
Editor page to create/edit contacts (URL: /edit)
Detail Contact page (URL: /details/:userId )