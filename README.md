# Travel Skills

This project work with [Angular](https://github.com/angular) version 4.0.0.


## Build for production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
For add the Angular's front to the back-end of the app, the `dist/` directory generated above need to be placed in the public views folder.
Angular manage his own routing system on the client device, so only one view need to be render by the server.
The final step is to render the `dist/<angular>.html` as view when the user access to the `/` route

## Run for development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
