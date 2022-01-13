![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge)
![Made with SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Made with NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

# Fisheye

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of content

-   [Live demo](#live-demo)
-   [List of dependencies](#list-of-dependencies)
-   [Installation](#installation)
-   [How to use](#how-to-use)
    -   [JavaScript](#javascript)
    -   [Styling](#styling)

## Live demo

Use this link to try the project : https://leoncik.github.io/LeonardWojcik_6_24112021/

## List of dependencies

-   Sass
-   Webpack
-   Eslint
-   Prettier

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
