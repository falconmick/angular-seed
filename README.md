# Angular2 Seed

### About
This is a seed heavily based upon [Angular.io](https://angular.io/docs/ts/latest/guide/webpack.html)'s tutorial on webpack.
Key replacements include:
* styles are now scss + page wide styles are applied via `src/app/site.scss` inside of `src/app/app.component.ts`
* using TS2.0's project.json ability to get typings via `@types/` which make updating typings much easier

### Versions of this seed
* [base angular 2 seed](https://github.com/falconmick/angular-seed)
* [angular 2 seed with Materialize-Css](https://github.com/falconmick/angular-seed/tree/materializecss)

### Features
* Karma + Jasmin test runner
* Webpack

### Quick start
```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/falconmick/angular-seed.git

# change directory to our repo
cd angular-seed

# install the repo with npm
npm install

# start the server
npm start
```
go to [http://0.0.0.0:8080](http://0.0.0.0:8080) or [http://localhost:8080](http://localhost:8080) in your browser


## Other commands
### run tests
```bash
npm run test
```

### build files
```bash
# production
npm run build
```

# Configuration
Configuration files live in `config/` we are currently using webpack and karma for different stages of your application

# Thanks
Thanks [AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter) for a great readme to base this one off. If your looking for a more kitchen sink seed, this has all the goodies