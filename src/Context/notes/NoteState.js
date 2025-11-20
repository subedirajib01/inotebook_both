import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [
        {
    "user": "691dac3b0f07d2a393256dc4",
    "title": "Hello Ji",
    "description": "hasais ma chikney",
    "tag": "Instagram",
    "_id": "691e8d44910248da993fee65",
    "date": "2025-11-20T03:38:44.292Z",
    "__v": 0
}
    ]
    const [notes, setNotes] = useState(notesInitial)
    const authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxZGFjM2IwZjA3ZDJhMzkzMjU2ZGM0In0sImlhdCI6MTc2MzU1MjMxNX0.dE0Ghx0wId4SOcYVxX4aQ9pzoKK1GSbpdEkxRFbyqDY"

  // Get all Notes
const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        "auth-token":authToken
    }
    });
    const json = await response.json() 
    console.log(json);
    setNotes(json)
}

  // Add a Note
    const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        "auth-token":authToken
        },
        body: JSON.stringify({title, description, tag})
    });
    console.log("Adding a new note")
    const note={"_id": "68f4feefff2f6y726844815c6h4",
    "user": "68f30afd7370ffda444dc47ce",
    "title": title,
    "description":description,
    "tag": tag,
    "date": "2025-10-19T15:08:31.918Z",
    "__v": 0
    };
    const json=await response.json();
    console.log(json);
    setNotes(notes.concat(note))
}


  // Delete a Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        "auth-token":authToken
        },
    });
    const json = await response.json(); 
    console.log("Updated note:", json);

        console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
    }


  // Edit a Note
    const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        "auth-token":authToken
        },
        body: JSON.stringify({title, description, tag})
    });
    const json = await response.json(); 
    console.log("Updated note:", json);

        let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag; 
    }
    }  
    setNotes(newNotes);
}


return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
    {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;