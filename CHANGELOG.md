# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.3.0] - 2022-01-01
### Added
-   Total of likes (incrementable with like toggler function).
-   Title of the current media inside lightbox.

## [0.3.0] - 2021-12-29
### Added
-   Sorting system (by number of likes, date or title).

## [0.2.1] - 2021-12-28
### Added
-   Like counter.

## [0.2.0] - 2021-12-27
### Added
-   Display medias inside lightbox.
-   Mouse navigation inside lightbox.

## [0.1.9] - 2021-12-23
### Added
-   Rectangle containing total of likes and pricing of photographer.
-   Sorting buttons (not functionnal yet).

## [0.1.8] - 2021-12-20
### Added
-   Completed contact form basic display and validation.

## [0.1.7] - 2021-12-16
### Changed
-   Refactor : better organisation of fetching functions (no duplicated code).

### Added 
- experiments.topLevelAwait: true, to webpack.config.js to enable variables export.

## [0.1.6] - 2021-12-15
### Changed
-   Refactor : fetching data script in a separate file (api.js).

## [0.1.5] - 2021-12-14

### Added
-   Display photographer media in photographer page.

## [0.1.4] - 2021-12-13
### Changed
-   Use a single "index.js" to import all scripts.
-   Use factoty pattern to display individual photographer profile

## [0.1.3] - 2021-12-08
### Added
-   Fetch photographer data and filter them according to the current photographer "ID".
-   Display number of likes of the first current photographer media (Work in progress. Needs to refactor with "Factory pattern).

## [0.1.2] - 2021-12-08
### Added
-   Display photographer profile data on photographer page (Two methods available).
-   Enable return to homepage by clicking on website logo.

## [0.1.1] - 2021-12-07
### Added
-   Display photographer profile data on photographer page (Work in progress).

## [0.1.0] - 2021-12-07
### Fixed
-   Setup webpack dev server. All dependencies now working.

## [0.0.12] - 2021-12-06
### Added
-   Custom URL for each photographer

## [0.0.11] - 2021-12-05
### Added
-   Display error message inside the page if the data can't be retrieved.

### Fixed
-   fetch data inside "try" condition.

## [0.0.10] - 2021-12-03
### Added
-   New dependencies : webpack-dev-server.

### Changed
-   Update file structure.

## [0.0.9] - 2021-12-02
### Added
-   Config dependencies : Husky, lint-staged.

## [0.0.8] - 2021-12-02
### Added
-   Config dependencies : ESLint.

## [0.0.7] - 2021-12-02
### Added
-   Config dependencies : Prettier.

## [0.0.6] - 2021-12-01
### Added
-   New dependencies : webpack.

## [0.0.5] - 2021-12-01
### Added
-   Photographers profile pictures in assets folder.
-   Photographers profile picture, location, motto and prince on main page.

## [0.0.4] - 2021-11-30
### Added
-   Fetch photographer data and display photographer names on index page.

## [0.0.3] - 2021-11-25
### Added
-   Fetch photographer data.

## [0.0.2] - 2021-11-24
### Fixed
-   Typo in JS script name called in index.html.
-   Directory location in photographer.js.

## [0.0.1] - 2021-11-24
### Added
-   CHANGELOG.

### Removed
-   Duplicated CSS.
-   Commitizen dependency.
