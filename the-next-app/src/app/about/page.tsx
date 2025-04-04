import { headers } from "next/headers";

export const dynamic = 'force-dynamic'; 
            // This will make the page dynamic and not cache it
async function AboutPage(){


    const contentHeader = (await headers()).get("content-type");
    console.log("content-type: ", contentHeader);


    console.log("rendering about page...");
    // Simulate the delay
    //await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <div>
            <h3>About</h3>
            <p>This is a Next.js application</p>
        </div>
    )
}

export default AboutPage