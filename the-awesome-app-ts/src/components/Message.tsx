import { useEffect, useImperativeHandle} from 'react';
import { useBreadcrump } from '../hooks/useBreadcrumps';


type MessageProps = {
    text: string;
    color?: string;
    ref?: any
}
function Message(props: MessageProps){

    useImperativeHandle(props.ref, () => {

        return {
            text: props.text,
            color: props.color,
            show: ()=>{
                alert("Message: " + props.text);
            }
        }
    });

    useBreadcrump({label: "Message", path: "/"});
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

