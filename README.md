# WeddingInvitations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploys to firebase

In order to run deploys you have to have firebase-tools installed in your machine: `npm install -g firebase-tools`

When you have that ready follow the steps explained above:

1. Sign in to Google: `$ firebase login`
2. Add the file .firebaserc and configure it this way:

```
{
  "projects": {
    "default": "NAME_OF_YOUR_FIREBASE_PROJECT"
  }
}
```

3. Make a duplicate of `/src/environments/environment.ts.example` on `/src/environments/environment.ts` and fill the template information

4. You can also make a production environment.ts by making a duplicate of `/src/environments/environment.ts.example` on `/src/environments/environment.prod.ts` and fill the template information and set the production flag to true

5. Deploy your website: `$ firebase deploy`
