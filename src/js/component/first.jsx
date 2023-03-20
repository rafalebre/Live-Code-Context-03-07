import React from "react";
import { Second } from "./second.jsx";

export function First (props) {
    return (<>
        <h1>Hello First Component </h1>
            <Second mydata={props.mydata}/>
        </>
    )
}