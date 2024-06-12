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

  // 1. We want to increase the counter by one on render, why does it increase by more than one?
  useEffect(() => {
    setCounter(counter + 1);
  }, [counter]);

  // 2. We want to log out the value of counterTwo after we increase it, why doesn't it log the new value?
  // How would you log the new value rather than the old one?
  const setCountValue = () => {
    setCounterTwo(counterTwo + 1);
    console.log("Counter Two Value is ", counterTwo); // Bug 2: It logs the old state value
  };

  // Fix Bug 1 first!
  // 3. Here, we have a function to change the "name" state variable, why doesn't it work?
  // 3.1. Bonus: if you click "Change name" then click "Increase Count Two", the name changes magically
  const changeName = () => {
    // Bug 3: Directly trying to modify the state object
    name.fname = "Bruce";
    name.lname = "Wayne";
    setName(name);
  };

  // 4. We want to increase the counter by one every second, but it displays NaN
  useEffect(() => {
  const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

  return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Bug Hunting: React Edition</h1>
      <button onClick={setCountValue}>Increase Count Two</button>
      <button onClick={changeName}>Change Name</button>
      {/* 5. Why does the following code cause an infinite loop ? */}
      {/* <button onClick={setCounter(counter + 1)}>
        Stupid Button
      </button>{" "} */}
      <h3>Counter One: {counter}</h3>
      <h3>Counter Two: {counterTwo}</h3>
      <h3>Name is : {name.fname + " " + name.lname}</h3>
      <h3>Time is : {time}</h3>
    </div>
  );
}
