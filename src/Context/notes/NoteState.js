
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState=(props)=>{
    const host="http://localhost:5000";
const notesInitial=[
    {
    "_id": "68f4fefeff2f6726844815c62",
    "user": "68f30afd7370fda444dc47ce",
    "title": "My title",
    "description": "Hello! My name is Rajib Subedi and I am under water HEHEHEHEHE.....",
    "tag": "personal",
    "date": "2025-10-19T15:08:31.754Z",
    "__v": 0
    }
]
const [notes,setNotes]=useState(notesInitial);
const authToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkxZGFjM2IwZjA3ZDJhMzkzMjU2ZGM0In0sImlhdCI6MTc2MzU1MjMxNX0.dE0Ghx0wId4SOcYVxX4aQ9pzoKK1GSbpdEkxRFbyqDY"

const getNotes = async () => {
    try {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        "auth-token": authToken
        }
    });
    if (!response.ok) throw new Error('Failed to fetch notes');
    const json = await response.json();
    setNotes(json);
    } catch (error) {
    console.error("Error fetching notes:", error);
    }
};


// add a note
const addNote = async (title, description, tag) => {
    try {
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        "auth-token": authToken
        },
        body: JSON.stringify({ title, description, tag })
    });
    if (!response.ok) throw new Error('Failed to add note');
      const newNote = await response.json(); // Use the server's response
    setNotes(notes.concat(newNote));
    } catch (error) {
    console.error("Error adding note:", error);
    }
};


// delete a note 
const deleteNote = async (id) => {
    try {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "auth-token": authToken
        }
        });
        if (!response.ok) throw new Error('Failed to delete note');
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
    } catch (error) {
        console.error("Error deleting note:", error);
    }
    };

    
// edit a note
const editNote = async (id, title, description, tag) => {
    try {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT', // Changed to PUT for update (adjust if your backend uses POST)
        headers: {
        'Content-Type': 'application/json',
        "auth-token": authToken
        },
        body: JSON.stringify({ title, description, tag })
    });
    if (!response.ok) throw new Error('Failed to update note');
      await response.json(); // Optional: if you need the updated note from server

      // Update client state immutably
    const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
    );
    setNotes(updatedNotes);
    } catch (error) {
    console.error("Error editing note:", error);
    }
};

    return (
        <noteContext.Provider value={{notes,addNote, deleteNote, editNote,getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;