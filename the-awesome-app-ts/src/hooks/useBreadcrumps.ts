import { useContext, useEffect, useRef } from "react";
import { Breadcrumb } from "../model/Breadcrumb";
import { BreadcrumbsContext } from "../context/BreadcrumbsContext";

export function useBreadcrump(crump: Breadcrumb){

    const context = useContext(BreadcrumbsContext);;
    const idempotentRef = useRef(false);
    useEffect(() => {

        if(!idempotentRef.current){
            idempotentRef.current = true;
            context.addBreadcrumb({label: crump.label, path: crump.path});

        }

    }, [])

}