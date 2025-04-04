

//withBorder is a HOC
//
export function withBorder(Component: any){

    //return a new component
    return function(props: any){
        return (
            <div style={{border: "2px solid blue", margin: "4px", padding: "4px"}}>
                  <Component {...props}/>  
            </div>
        )
    }
}