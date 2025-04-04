import { createContext, useState } from "react";
import { Breadcrumb } from "../model/Breadcrumb";

type BreadcrumbsContextState = {
    breadcrumps: Breadcrumb[],
    setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
    addBreadcrumb: (breadcrumb: Breadcrumb) => void;
    clearBreadcrumbs: () => void;
   
}
const initialState: BreadcrumbsContextState = {
    breadcrumps: [],
    setBreadcrumbs: () => {},
    addBreadcrumb: () => {},
    clearBreadcrumbs: () => {},
  
}
export const BreadcrumbsContext = createContext(initialState);

type BreadcrumpContextProviderProps = {
    children: React.ReactNode;
}

export function BreadcrumpContextProvider(props: BreadcrumpContextProviderProps) {
    const [breadcrumps, setBreadcrumbs] = useState<Breadcrumb[]>([]);

    const addBreadcrumb = (breadcrumb: Breadcrumb) => {
        setBreadcrumbs((prev: Breadcrumb[]) => [...prev, breadcrumb]);
    };

    const clearBreadcrumbs = () => {
        setBreadcrumbs([]);
    };

 

    return (
        <BreadcrumbsContext.Provider value={{ breadcrumps, setBreadcrumbs, addBreadcrumb, clearBreadcrumbs }}>
            {props.children}
        </BreadcrumbsContext.Provider>
    );

} 