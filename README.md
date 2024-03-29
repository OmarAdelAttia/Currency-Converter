# CurrencyConverter

This project depends on an API from fixer.io which gets all the currencies converted from 1 EUR.

The project consists of 3 components (navbar, currency exchanger, historical graph), 1 model & 1 service.

I used routing in this project to navigate between pages.

The packages that are used are fixer (out of the angular core).

The model contains the elements that are used on the DOM and can be sent to the server side (backend).

The service contains all the APIs and the elements that need to be shared between the components (I avoided using (@Input) to pass the data between the components.

The only life cycle hook that is used is OnInit.

I used destructuring, and array methods (from ES6), and tried to write clean code as much as I could.

In currency-exchanger:-

1) OnInit() => Set default values
2) convertCurrency() => declare the amount
3) convertCurrency() => set the data (currency, amount)
4) convertCurrency() => Remove the currency that is converted from the dashboard (if it exists)
5) creatingDashboard() => Calculate the data to display it on the dashboard.
6) sawpBtn() => swap the currencies (from & to) and calculate them.
7) The only API used is the one that gets all the latest updates in the currencies.

In historical-rate-chart:-

1) Using an API to get the full name (it is a restricted API so it is not working)
2) getTodayTime() => Set the date (in the required way) to use it with getHistorcalRate API (historical API is not working since it is restricted)
3) Get the currencies from the service (did not use @Input to pass the data between components)
4) Disabling the conversion from currency.

# CurrencyConverter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artefacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need first to add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
#   C u r r e n c y - C o n v e r t e r 
 
 
