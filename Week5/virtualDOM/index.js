function tick() {

  // JAVASCRIPT DOM MANIPULATION
  // with vanilla Javascript, every time you type something, the text gets 
  // erased after 1 second (whenever tick() is called again) because the entire DOM 
  // is being replaced every time
  document.getElementById("container1").innerHTML =
    "<div><h1>JS DOM Rendering</h1><input type=text/><p>It is " +
    new Date().toLocaleTimeString() +
    ".</p></div>";

  // REACT DOM MANIPULATION
  // with React's virutal DOM, only the element that has changed is being updated (the time), 
  // therefore the user input remains unless the input element itself was changed
  const element = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "React"),
    React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text" }) // your input will remain
    ),
    React.createElement("p", null, "It is " + new Date().toLocaleTimeString()) // this is the only element being updated
  );

  ReactDOM.render(element, document.getElementById("container2")); // rendering container2 with React's DOM
}

// the tick function is called every second
setInterval(tick, 1000);
