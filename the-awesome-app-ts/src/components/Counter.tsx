import { useEffect, useRef, useState } from "react";
import Message from "./Message";

type CounterProps = {
  initialCount: number;
}

// <Counter initialCount={5}/>
function Counter(props: CounterProps) {

  
  const [counter, setCounter] = useState(props.initialCount);
  const noOfClicks = useRef(0);
  
  useEffect(() => {
    console.log("useEffect counter updated", counter);
  }, [counter])

  function inc() {
    //setCounter(counter + 1);
    //setCounter(counter + 1);

    setCounter(currentCount => currentCount + 1);
    setCounter(currentCount => currentCount + 1);
    //console.log("counter", counter);
    noOfClicks.current++;
    console.log("noOfClicks", noOfClicks);

  }

  function decr() {
    setCounter(counter - 1);
    noOfClicks.current++;
    console.log("noOfClicks", noOfClicks);
  }

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <div>
        <button onClick={inc}>Inc</button>&nbsp;
        <button onClick={decr}>Decr</button>
      </div>

       {counter > 5 ? <Message text={"Counter " + counter} color="blue"/> : null}   

    </div>
  );
}
export default Counter;
