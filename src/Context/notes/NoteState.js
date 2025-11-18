
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>{
    // const host="http://localhost:5000";
const notesInitial=[
    {
    "_id": "68f4fefeff2f6726844815c62",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.754Z",
    "__v": 0
    },
    {
    "_id": "68f4feedff2f6726844815c64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    },
    {
    "_id": "68f4feeff2f672g6844815c64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    },
    {
    "_id": "68f4feeff2f672h6844815c64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    },
    {
    "_id": "68f4feehff2f6726844815c64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    },
    {
    "_id": "68f4feeff2f67268448h15c64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    },
    {
    "_id": "68f4feeff2f67h26844815c64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    },
    {
    "_id": "68f4feeff2f6726844815hc64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    },
    {
    "_id": "68f4feheff2f6726844815c64",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    },
    {
    "_id": "68f4feeff2f6726844815c6h4",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "I want to sleep",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    }
]

const [notes,setNotes]=useState(notesInitial)

// add a note
const addNote=(title,description,tag)=>{
    //ToDO:API call
    console.log("Adding a new note")
    const note={"_id": "68f4feeff2f6y726844815c6h4",
    "user": "68f30afd7370fda444dc47ce",
    "title": title,
    "description":description,
    "tag": tag,
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    };
    setNotes(notes.concat(note))
}


// delete a note 
const deleteNote=(id)=>{
    //ToDO:API call
    console.log("Deleting the note with id" + id);
    const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);
}
// edit a note
const editNote=(id, title, description, tag)=>{
    // API call
    // const response = await fetch(url,{
    //     method:'POST', headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(data)
    // });
    // return response.json();

    // logic to edit in client 

    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
        }
    }
}
    return (
        <noteContext.Provider value={{notes,addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;