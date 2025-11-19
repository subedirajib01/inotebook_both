import React, { useContext, useEffect } from 'react';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import noteContext from '../Context/notes/noteContext'; // Adjust path if needed

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context; // Assuming no loading/error yet; add if implemented

    useEffect(() => {
    getNotes();
  }, []); // Empty deps for mount-only

    return (
    <>
        <AddNote />
        <div className="row my-3">
        <h1>Your Notes</h1>
        {/* Optional: Add if you implement loading/error in context */}
        {/* {loading && <p>Loading notes...</p>} */}
        {/* {error && <p className="text-danger">Error: {error}</p>} */}
        {notes.map((note) => (
            <Noteitem key={note._id} note={note} />
        ))}
        </div>
    </>
    );
};

export default Notes;