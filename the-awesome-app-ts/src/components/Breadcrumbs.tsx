import { Link } from "react-router-dom";
import { useContext } from "react";
import { BreadcrumbsContext } from "../context/BreadcrumbsContext";

function Breadcrumbs() {

    // const breadcrumps: Breadcrumb[] = [
    //     { label: "Home", path: "/" },
    //     { label: "Counter", path: "/counter" },
    //     { label: "Login", path: "/login" }
    // ]

    const breadcrumpsContext = useContext(BreadcrumbsContext);
    const breadcrumps = breadcrumpsContext.breadcrumps;

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {/* <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Library</li> */}
                {breadcrumps.map((item, index) => (
                    <li key={index} className="breadcrumb-item active"><Link to={item.path}>{item.label}</Link></li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumbs;