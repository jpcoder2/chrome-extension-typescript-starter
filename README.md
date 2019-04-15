# Chrome Extension TypeScript Starter

[![Build Status](https://travis-ci.org/chibat/chrome-extension-typescript-starter.svg?branch=master)](https://travis-ci.org/chibat/chrome-extension-typescript-starter)

Chrome Extension, TypeScript and Visual Studio Code

## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Option

* [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

* TypeScript
* Webpack
* Moment.js
* jQuery
* Example Code
    * Chrome Storage
    * Options Version 2
    * content script
    * count up badge number
    * background

## Project Structure

* src: TypeScript source files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

### Install gulp cli if you don't already have it

```
npm install --global gulp-cli
```

### Install other local packages

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
gulp build
```

## Build in watch mode

### terminal

```
gulp watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Package for Chrome app store

This will increment the build number in the manifest.json and create the .zip file needed for the app store.

### terminal

```
gulp package
```
