import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  // Used in bugs 1 and 2
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [time, setTime] = useState(0);

  // Used in bug 3
  const [name, setName] = useState({
    fname: "Clark",
    lname: "Kent"
  });

  // 1. Counter increased by more than one because we included counter in the dependency array.
  // this causes a feedback loop in which the first update updates counter, which triggers the
  // useEffect to run, which updates counter, etc.
  useEffect(() => {
    setCounter(counter + 1);
  }, []); //used to have counter here

  // 2. You won't see the update until AFTER some time; it takes time for the change to actually
  // be displayed in React
  const setCountValue = () => {
    setCounterTwo(counterTwo + 1);
    // console.log("Counter Two Value is ", counterTwo); // Bug 2: It logs the old state value
  };

  //This will trigger and print out the new value on counterTwo's change 
  useEffect(() => {
    console.log("Counter Two Value is ", counterTwo);
  }, [counterTwo]);

  //3. You shouldn't change the internal values of a state variable directly; Use the set function
  //you created with useState!
  const changeName = () => {
    // Bug 3: Directly trying to modify the state object
    //name.fname = "Bruce";
    //name.lname = "Wayne";
    //setName(name);
    setName({ fname: "Bruce", lname: "Wayne" });
  };


  // 4. Tricky! In the previous example, when we created the callback function, we actually
  //take a snapshot of what the value of time was at the point. So, everytime setInterval is called,
  //it just uses the very first value of time. To make sure that the time variable changes every second,
  //we use the form (variable) => (something done to variable) to create a rule that React uses to
  //update our variable
  useEffect(() => {
    const interval = setInterval(() => {
      //Bug 4: setTime(time + 1)
      setTime((prevTime) => prevTime + 1); // Use the functional update form
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Bug Hunting: React Edition</h1>
      <button onClick={setCountValue}>Increase Count Two</button>
      <button onClick={changeName}>Change Name</button>
      {/* 5. Why does the following code cause an infinite loop ? */}
      <button onClick={() => setCounter(counter + 1)}>
        Stupid Button
      </button>{" "}
      <h3>Counter One: {counter}</h3>
      <h3>Counter Two: {counterTwo}</h3>
      <h3>Name is : {name.fname + " " + name.lname}</h3>
      <h3>Time is : {time}</h3>
    </div>
  );
}
