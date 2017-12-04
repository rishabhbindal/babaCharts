### Description
This repo contains the new react apps that are going to be built in ray.

### Tech Stack
1.  Webpack 2 for bundling client app
2.  NPM5 as package manager for node modules
3.  Babel for ES6
4.  React-router V4 for routing
5.  Redux for data-store
6.  Eslint config same as in practo-react repo
8.  Redux-saga as the middleware for Async redux
9.  Superagent as an api-client
10. Semantic-ui config and theme same as in patients
11. Semantic-ui-react is used as a react binding for semantic
12. Styled Components for styling

### Tooling:

Webpack 2 is used for client side bundling.

Bundles:
- home-hash.js (8.1kb for now)
- vendor-hash.js (270kb)
- manifest-hash.js (1.1kb, Includes only the run time code)

### Libraries
#### Styled Components 
Most of the css is bundled along with js. But for theme overrides, we have used scss for which a separate bindle is created(i.e: home-hash.css).

#### Semantic:
Semantic-ui-react as a library for creating ui components in semantic. We have a customised theme for ray

### Dev build:
Devtool as eval and source maps for making debugging easier.

### React Patterns	
The application is divided in containers and presentation components. Presentation components are view only. Containers components handles all the logic part and pass the data down to presentation components. 

All async tasks are done in saga along with data manipulation both post and pre api calls.

### Planning ahead: 
- Optimising for bundles size.
- For i18-translations: library yet to be decided.
- End to end testing.
