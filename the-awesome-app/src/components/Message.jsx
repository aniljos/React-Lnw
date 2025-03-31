function Message(props){

    console.log("props", props);

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

