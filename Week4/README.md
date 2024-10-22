# Week 4: React

This week, we continue our progress in frontend web development with React. React is a powerful and relatively lightweight framework used to rapidly build out HTML,CSS, and Javascript user interfaces. Although it is widely used, it often has a steep learning curve which is why we're dedicating the next two weeks to flesh out the topic. Additionally, we will also briefly touch upon NodeJS and its package manager `npm` since its involved when developing React.

# Materials

- [Day 7: Introduction to React](https://docs.google.com/presentation/d/1EevvcqriaBPYuuIgp9_8FNVNSDFm1Gmk/edit?usp=sharing&ouid=109884877973910636402&rtpof=true&sd=true)
- [Day 8: React Continued](https://docs.google.com/presentation/d/1pKKDrK63zX6C9CQavguSBdjSkNE4Hefk/edit?usp=sharing&ouid=109884877973910636402&rtpof=true&sd=true)
- [React Textbook: useful to reference and lots of great examples to go over](https://drive.google.com/file/d/1TZXswwWQ4MU9oy2J5tBkWU-TNfmhplqY/view?usp=sharing)

# Debugging Session

https://codesandbox.io/s/react-bugs-ho0ttf?file=/src/App.js

The following are some examples of common mistakes made for the useEffect and useState React hooks. See if you can spot the bugs, why they occur, and any potential solutions :)

# Demo: Setting up React and create-react-app

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application from the terminal.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine - install it from https://nodejs.org/en/ if you don't already have it installed.

Then, run:

```
npx create-react-app my-app
cd my-app
npm start
```

# Homework

For homework this week, we are going to be recreating the weather app from last week, but in React! Check out the weather-app folder for further instructions.

## Commonly Used Terminal Commands (cont.)

1. **Navigate the File Directory**:
- `ls`: List the contents of the current directory.
- `cd <directory>`: Change the current working directory.

2. **Basic Git Commands**:
- `git add <file>`: Stage a file for commit.
- `git commit -m "<message>"`: Commit the staged changes with a message.
- `git push`: Push your local commits to the remote repository.
- `git pull`: Pull the latest changes from the remote repository.

3. **Running JavaScript files from the terminal**:
- `node <filename>`: Runs the JavaScript file.

## React-Specific Terminal Commands

1. **Create a New React App (with Custom Folder Location)**:
   - `npx create-react-app my-app`: Creates a new React project named "my-app" in the current directory. You can replace "my-app" with your desired folder name. Replacing "my-app" with "." creates a React project in the current folder.

2. **Start the Development Server**:
   - `npm start`: Starts the development server and opens the app in your default browser.

3. **Build for Production**:
   - `npm run build`: Builds the app for production, creating an optimized bundle.

4. **Install Dependencies**:
   - `npm install <package-name>`: Installs a specific package (e.g., `react-router-dom`).
   - If you run `npm install` without specifying a package name, it installs all dependencies listed in your `package.json` file.
  
5. **Terminate the Server**:
   - If you're in the terminal where the development server is running, press `Ctrl + C` (or `Cmd + C` on macOS). This will terminate the server process.
