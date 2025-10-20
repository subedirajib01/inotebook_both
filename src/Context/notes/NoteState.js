import { useState } from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>{
    const s1={
        "name": "Rajib",
        "class":"6A"
    }
    const [state, setState] = useState(s1);
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name":"Raks",
                "class":"10A"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{ state, update }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;