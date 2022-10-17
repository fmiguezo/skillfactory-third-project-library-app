# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Avalith Skill Factory React - Checkpoint #3

## Main goal: Develop a responsive library app. 

#### Requirements:


  ✅ Create the project using React CRA CLI.

  ✅ Use Redux Toolkit for state management.

  ✅ Include CRUD actions: create, read, update and delete books.

  ✅ Show the following book information: title, author(s), year of publication, cover image, description and ISBN.

  ✅ Use Responsive Design (either applying Mobile First or Web First).

  ✅ Use a style library such as Toastify or Sweet Alert.

  ✅ Use ECMA6 coding style, using functions, destructuring and others.

  ✅ Implement SCRUM methodology.

  ✅ Design the UI for the Login and Register


## How did we work?
Since the time we had to develop this app was rather reduced, organization was a key factor for the group, so we implemented the SCRUM methodology. We had dailies in the morning and defined two Sprints. To manage the Product Backlog we chose Trello. Each member of the team was assigned tasks they were required to complete for each sprint. Some members focused on the UI while others worked on the functionality.

<img src="public/Screenshot_45.png">

## Installation and dependencies
We started the project by creating a react app using

``` 
npx create-react-app skillfactory-third-project-library-app  
```



Then we installed the following dependencies:

• React Redux with 
```
npm install react-redux 
```
• Redux Toolkit with 
```
npm install @reduxjs/toolkit
```

• React Router Dom 6 with 
```
npm install react-router-dom@6
```
• React-Toastify with 
```npm install react-toastify
```
• uuid with 
```
npm install uuid
```

## Developing the app
As the first step, we defined the MVP and designed the UI for our library app. We then created the repository in Github and each member forked the project.

<img src="public/Screenshot_46.png">

 The goal of the first Sprint was to have the CRUD ready, to keep working on improving the UI on the second Sprint.



The members of the team who were focused on the graphics began laying out the app and styling it with CSS and Bootstrap. They created components for some sections, such as, the NavBar, the Footer and the Search Box. People working on the functionality had the task to create all necessary book components, their routes, and all  slicers and reducers. At this point we also had to define how book IDs would be managed. For this we chose to use uuid. Once the CRUD was ready we started working on form validations using mostly RegEx.
During the second stage, we implemented React-Toastify to show warning, success and error messages in the CRUD actions. We also worked on improving the Responsive UI by adding hamburger buttons and modals.






### How can you use this app?
#### 1. Cloning the React App

##### Creating a New Folder
First create a new folder. You can name it whatever you want.

##### Getting the Code URL
In the React app's GitHub repo, click on the button, Code. A drop down will appear where you can copy the code URL.

##### Cloning the React app's GitHub Repo
Now, open the git bash window for the new folder you just created by right clicking on the folder and clicking Git bash here.
On your git bash window, type `git clone`, paste the code URL of the GitHub repo, then run the command by pressing enter.
`git clone ` ********PONER EL LINK DEL REPO!!!********
At the end of the process, if you did everything correctly, you won't encounter any errors meaning the cloning process was completed successfully.

#### 2. Configuring the Cloned App

Once you’ve completed the previous step, you need to create your own `package-lock.json` file and `node_modules` folder. You don’t need to manually create these, as the following commands we run will create them.
Press `ctrl + j` on Windows or `command + j` on Mac to open your terminal on VSCode.
On your terminal, change your directory to the name of the cloned folder.
Let’s say the cloned folder name is ‘my-cloned-app’
`cd my-cloned-app`
Once that is done successfully, you need to run `npm install` . This will take some time to finish running.
If you did everything correctly, at the end of the process, you will see words along these lines on your terminal.

```
run `npm fund` for details.
found ..... severity vulnerability
run `npm audit fix` to fix them or `npm audit` for details
```

You will also see your `package-lock.json` file and `node_modules` folder at the left side of the window.

### 3. Starting the React app

So, run `npm start` on your terminal.
Make sure you are in the right directory before running this command to avoid errors.
If you are not or if you are not sure you are, cd to the right directory.
Once the command is done running, your React app will open on your local host on your default browser.
`https:// localhost:3000`
_Congratulations, you've successfully cloned and started your React app._
