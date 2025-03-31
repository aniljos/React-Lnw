
// <Counter initialCount={5}/>
function Counter(props){

    let counter = props.initialCount;

    function inc(){
       counter++;
       console.log("counter", counter);
    }

    function decr(){

    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={decr}>Decr</button>
            </div>
        </div>
    )
}
export default Counter;