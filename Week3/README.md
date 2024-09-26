# Week 3: Javascript in the Browser + APIs

Last week, we went over common Javascript quirks. This week, we'll see how Javascript can be applied in the browser to manipulate the DOM and HTML. Additionally, we will glimpse over APIs, the connecting glue between the frontend and backend of web applications. Note, this week's homework will be a lot of work compared to previous weeks, so start early!

# Materials

- [Day 5: Javascript in the Browser](https://docs.google.com/presentation/d/1n5f8ONJQ5FodRcK9dTs09oEFJIkLdPXk/edit?usp=sharing&ouid=117392730020260659840&rtpof=true&sd=true)
- [Day 6: APIs](https://docs.google.com/presentation/d/1wU5rm_7GkRq6HoO3oND2gHChrsA-weYe/edit?usp=sharing&ouid=117392730020260659840&rtpof=true&sd=true)
- [Postman : we will use this to call APIs, please download before you come to class Wednesday](https://www.postman.com/)

# Demo

We are going to be buliding a shopping list in Javascript and HTML, which is basically a repurposed TODO list. This demo will get you used to manipulating DOM elements in Javascript and using Javascript in the Browser. We will go over topics like DOM manipulation, event handling, and localstorage so dont miss it!

As always, we have a completed demo under the `demo/` folder and a demo video found in the [TPEO Drive](https://drive.google.com/drive/u/0/folders/1HFL9_G9fV75kmi2r5urgElj8kPPW8Whg) by EOD Wednesday.

# Homework

It's time to combine what we have learned about calling third-party APIs, HTML, CSS, and JS to create a pretty, yet functional weather app. The weather app should search for cities in the United States, allow a user to select a city, and display the weather for the city, including a five day forecast and the air pollution. The weather data will be sourced from [OpenWeather](https://openweathermap.org/). We have included some starter code for search and helper functions but feel free to modify any of the starter code to fit your needs!

## Instructions

### Prerequisites

1. Visit openweathermap.org/api and sign up to create a unique API key.
2. Open your text editor of choice inside the homework directory.
4. Open the file called `index.html`.
4. Set the `apiKey` variable to your own OpenWeather API key.

```javascript
// USE YOUR OWN API KEY
const apiKey = "YOUR_API_KEY";
```

### Design (Figma)

[Ideally, your website should look similar to this when finished.](https://www.figma.com/file/vKRFWIFsJ5WRJTvMNFXOiZ/Weather-App?node-id=2%3A213)

## Guide

First, take a look at the Figma to get an idea of what the weather web app should look like. Try to think about different elements on the page, how they are rendered, and how the layout of the page is structured.

Then, take a look at the starter code, and try running the HTML file in your browser. 

In the skeleton code, there's a very simple structure composing of two main divs: the main-container and the side-container. The main container will display the weather info. The side container contains a search bar that retrieves useful data needed to retrieve weather data.

Your first steps will be to figure out how to call the OpenWeather API to retrieve the data that you will later display.

We recommend you read the OpenWeather's API documentation before you begin writing code. In addition, we recommend on fetching data from the API and generating relevant HTML elements before beginning to style the site.

## Requirements

1. Find out how to call the OpenWeather API and retrieve weather data for the next 5 days. 
- At the end of the function `selectCity`, you can view the console logs the data sent back from OpenWeatherMap's geocoding API.
- Using a city's longitude and latitute, use OpenWeather's [One Call API](https://openweathermap.org/api/one-call-api) to get current weather conditions and a five day forecast for the city.

2. Once you've managed to make a successful API call, start to display the data as needed to match the design.
- Once you have fetched the weather data, generate HTML elements that displays the current weather and the cards for five day forecast. We recommend you use a for loop to generate the cards for the five day forecast.

3. Using a city's longitude and latitute, use OpenWeather's [Air Pollution API](https://openweathermap.org/api/air-pollution) to get current air quality index (AQI) for the city.
4.  Use the `.svg` files in the icons folder to display the relevant graphics for the weather conditions. _Note how the name of the `.svg` files correspond to the [current.weather.icon and daily.weather.icon values](https://openweathermap.org/api/one-call-api#example) in the One Call API response._ We recommend having the value of the `src` attribute of the <img> tag to change dynamically based on API response.
5. Style the website by adding CSS to the `style.css` file.

## Things to Google

Good engineers know how to learn on their own. Here are a couple of topics that might be helpful to Google:

- CSS border-radius
- Using the src attribute for the <img> tag to display .svg files

# Bonus

Flex 💪 your CSS skills by modifying the weather website to be as attractive as possible. Take a look at CSS background gradients and opacity to give your weather site a more modern look!

## Commonly Used Terminal Commands (cont.)

1. **Navigate the File Directory**:
- `ls`: List the contents of the current directory.
- `cd <directory>`: Change the current working directory.

2. **Basic Git Commands**:
- `git add <file>`: Stage a file for commit.
- `git commit -m "<message>"`: Commit the staged changes with a message.
- `git push`: Push your local commits to the remote repository.
- `git pull`: Pull the latest changes from the remote repository.

3. **(NEW) Running JavaScript files from the terminal**:
- `node <filename>`: Runs the JavaScript file. 