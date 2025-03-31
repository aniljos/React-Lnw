import {useEffect} from 'react';

function Message(props){


    // api call
    console.log("props", props);

    //useEffect(setUpFn, [dependencies])

    //Mount -useEffect(setUpFn, [empty dependency array])
    useEffect(() => {
        console.log("Message component mounted...");

        return () => {
            console.log("Message component unmounted...");
        }

    }, [])


    const myJSX = <div>Testing</div>
    return (
        <div style={{border : `2px solid ${props.color}`, margin: "3px", padding: "2px"}}>
            <h3>Message: {props.text}</h3>
            <p>This is a functional component</p>
            <p>Expression: {5 + 7} </p>
            <div>Expression: {myJSX} </div>

            <p>Created at: {new Date().toLocaleString()}</p>
        </div>
    )
}

export default Message;

