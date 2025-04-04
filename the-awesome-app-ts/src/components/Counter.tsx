import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { withBorder } from "../hoc/withBorder";
import { Button, Input } from "crest-ui-library";

type CounterProps = {
  initialCount: number;
}

// <Counter initialCount={5}/>
function Counter(props: CounterProps) {

  
  const [counter, setCounter] = useState(props.initialCount);
  const noOfClicks = useRef(0);
  const btnRef = useRef<HTMLButtonElement>(null);
  const msgRef = useRef(null);
  
  useEffect(() => {
    console.log("useEffect counter updated", counter);
    //console.log("btnRef", btnRef);
    //console.log("msgRef", msgRef);
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
        <button ref={btnRef} onClick={inc}>Inc</button>&nbsp;
        <button onClick={decr}>Decr</button>
      </div>
      <br />
      <div>
        <Input placeholder="Crest Input" value={counter} onChange={(e:any) => setCounter(e.target.value)}/>&nbsp;
        <Button text="Crest Button++" onClick={inc} />
      </div>

       {counter > 5 ? <Message ref={msgRef} text={"Counter " + counter} color="blue"/> : null}   

    </div>
  );
}

export default withBorder(Counter);
