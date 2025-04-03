import { createContext } from "react";
import { Breadcrumb } from "../model/Breadcrumb";

type BreadcrumbsContextState = {
    breadcrumps: Breadcrumb[]
}
export const initialState: BreadcrumbsContextState = {
    breadcrumps: [
        { label: "Home", path: "/" },
        { label: "Counter", path: "/counter" },
        { label: "Login", path: "/login" }
    ]
}
export const BreadcrumbsContext = createContext(initialState);