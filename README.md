![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge)
![Made with SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Made with NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

# Fisheye

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of content

-   [Description](#description)
-   [Live demo](#live-demo)
-   [File structure](#file-structure)
-   [List of dependencies](#list-of-dependencies)
-   [Installation](#installation)
-   [How to use](#how-to-use)
    -   [JavaScript](#javascript)
    -   [Styling](#styling)

## Description

Fisheye is a fictional website to display the work of various freelance photographers.

This project has two main constraints :

-   Accessibility : the website must be fully usable with a keyboard and be accessible for people with impaired vision (the website must be tested with a screen reader).
-   Factory pattern : It is required to use a [Factory pattern](https://en.wikipedia.org/wiki/Factory_method_pattern) to create the different pages.

## Live demo

Use this link to try the project : https://leoncik.github.io/LeonardWojcik_6_24112021/

## File structure

`assets/`, contains all medias needed for the project (icons, profile pictures, media pictures and videos).

`dst/`, is where webpack will be building the project's script.

`pages/photographer-pages/`, contains a single HTML page that is mostly created dynamically and contains the works of each photograph.

`src/` :

-   `data/`, contains a JSON file that is used for fetching all information needed for this project.
-   `scripts/`, contains all JavaScript files.
    -   `api/`, contains the functions used to fetch the JSON data file.
    -   `factories/`, the heart of this project. Contains factories used to create most elements of the pages.
    -   `pages/`, contains the functions used to initialize the pages.
    -   `utils/`, contains generic functions and miscellaneous variables.
-   `scss/`, contains all SCSS files. Their organisation follow the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern).

## List of dependencies

-   [Babel](https://babel.dev/) — A JavaScript transpiler.
-   [Eslint](https://eslint.org/) — A JavaScript linter.
-   [Husky](https://typicode.github.io/husky) — Git hooks manager.
-   [lint-staged](https://www.npmjs.com/package/lint-staged) — Run linters against staged git files.
-   [Prettier](https://prettier.io/) — A code formatter.
-   [Sass](https://sass-lang.com/) — A CSS preprocessor.
-   [Webpack](https://webpack.js.org/) — A JavaScript bundler.

## Installation

1. Clone this repository or fork It.

```sh
git clone https://github.com/leoncik/LeonardWojcik_6_24112021
```

2. Install the dependencies using yarn (using npm would cause bugs) :

```sh
yarn install
```

3. You are ready to do !

## How to use

### JavaScript

If you want to work on the JavaScript part of this project, first make sure that you are in "Development mode" by uncommenting the "Production scripts" in both index.html and photographer.html :

```html
<!-- JavaScript (development) -->
<script src="/polyfill.bundle.js" defer></script>
<script src="/app.bundle.js" defer></script>
<!-- JavaScript (production) -->
<!-- <script src="dist/polyfill.bundle.js" defer></script>
<script src="dist/app.bundle.js" defer></script> -->
```

Then, you can use webpack-dev-server with the command :

```sh
yarn start
```

After editing you scripts, you can build the project with :

```sh
yarn build
```

### Styling

If you want to work on the styling part of this project, make sure that you are in "Production mode" by uncommenting the "Development scripts" in both index.html and photographer.html :

```html
<!-- JavaScript (development) -->
<!-- <script src="/polyfill.bundle.js" defer></script>
<script src="/app.bundle.js" defer></script> -->
<!-- JavaScript (production) -->
<script src="dist/polyfill.bundle.js" defer></script>
<script src="dist/app.bundle.js" defer></script>
```

Then, you can run :

```sh
npm run sass
```

to watch SASS and work on styling.

[⬆ Back to top](#fisheye)
