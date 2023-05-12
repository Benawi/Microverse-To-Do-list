<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)

- [📝 License](#license)


# 📖 To-do list Microverse! Project <a name="about-project"></a>

To-do list Microverse! project is a repository consisting of the following files:
- HTML file 
- CSS file 
- JS files
- Html,CSS and JS linters file


The repository also contains files for setting up linters and validators.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


  <ul>
    <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">HTML</a></li>
    <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">CSS</a></li>
       <li><a href="https://microverse.notion.site/HTML-CSS-Get-a-head-start-275eb85fd34b4416aa06ec635d69cdaf">JS</a></li>
  </ul>


### Key Features <a name="key-features"></a>
## To Do list: [add & remove](https://github.com/microverseinc/curriculum-javascript/blob/main/todo-list/m3_add_remove.md)
### Features Added:
- Set up a new project with webpack 
- Create an index.html file and 
- To Do List placeholder (div or ul element).
- The index.html file must be set as a template using the HTML Webpack Plugin.
- Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object  contain three keys:
   - description [string].
   - completed [bool].
   - index: [number].
- A function to iterate over the tasks array and populate an HTML list item element for each task.
- On page load render the dynamically created list of tasks in the dedicated placeholder. The list  appear in order of the index values for each task.
- Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. 
-All hardcoded items deleted from the tasks array. List structure #1 .
- A new JavaScript file for the new functionality created.
- A function for adding a new task is implemented
- A function for deleting a task is implemented
- A function for editing task descriptions. implemented
- By default new tasks wil have the property completed set to false and the property index set to the value of the new array length (i.e. if you're adding a 5th task to the list, the index of that task will be equal to 5).
- Deleting a task will update all remaining items' indexes, so they represent the current list order and are unique(i.e. if you're deleting the first task index 1 from the list, the index of the next task(2) will set to 1)..
- A new JavaScript file is added and imported as a module:
     - It contain methods related to the status updates (completed: true / false).
 - Add event listener to the checkbox (change).
 - Items object's value for completed key will updated upon user actions.
- A function for the "Clear all completed" is implemented - button (filter() method used).
- The updated array of items will be stored in local storage, so the user gets the correct list of values after the page reloads (which means that any changes made to the list will be preserved).
- The output of the app
![image](https://github.com/Benawi/Microverse-To-Do-list/assets/21217148/41aff895-051a-4b9b-bddd-623c1a107dbf)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo](https://benawi.github.io/Microverse-To-Do-list/dist/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Setup

Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:myaccount/my-project.git

### Prerequisites

In order to run this project you need:

- gitHub account;
- git installed on your OS.

### Install
> https://github.com/microverseinc/linters-config/tree/master/html-css-js
- Installations required to run this project:
### Install the webpack-cli. 
- Run the following command:
```
npm install webpack webpack-cli --save-dev
```
### Install the plugin and adjust the webpack.config.js file
- Run the following command:
```
npm install --save-dev html-webpack-plugin
```
### In order to import a CSS file  add the style-loader and css-loader to your module configuration
- Run the following command:
```
npm install --save-dev style-loader css-loader
```
### webpack-dev-server
- Run the following command:
```
npm install --save-dev webpack-dev-server
```
### Webhint installation. 
- Run the following command:
```
npm install --save-dev hint@7.x
```
### Stylelint installation.
- Run the following command:
```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
### ESLint
- Run
```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
### Usage

You can use this project by cloning it to your folder and changing index.html and styles.css files.

### Run tests

To run tests, run the following commands:

To track linter errors locally follow these steps:  

Download all the dependencies run:
```
npm install
```
Track HTML linter errors run:
```
npx hint .
```
Track CSS linter errors run:
```
npx stylelint "**/*.{css,scss}"
```
Track JavaScript linter errors run:
```
npx eslint .
```

### Deployment

You can redeploy this project by adding new lines of code to source files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

### 👤 Habtamu Alemayehu 
- GitHub: [Benawi](https://github.com/Benawi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

To Do list: interactive list [this](https://github.com/microverseinc/curriculum-javascript/blob/main/todo-list/m2_interactive_list.md) will be added.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

Give me ⭐️ If you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- I would like to thank Microverse program for providing me this great chance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
