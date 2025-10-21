import { useState } from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>{

const notesInitial=[
    {
    "_id": "68f4feeff2f6726844815c62",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.754Z",
    "__v": 0
    },
    {
    "_id": "68f4feeff2f6726844815c64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    }
]

const [notes,setNotes]=useState(notesInitial)

    return (
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;