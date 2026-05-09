import Note from './Note.jsx';
import NoteAsLi from "./NoteAsLi";
import NoteList from './NoteList.jsx';
import { useState, useEffect } from 'react';

function Frame(){

    const [notes, setNotes] = useState(()=>{
        const savedNotes = localStorage.getItem("my-notes");
        try{
            const parsed = savedNotes ? JSON.parse(savedNotes) : [];

            return Array.isArray(parsed) ? parsed : [];
        }
        catch(e){
            console.error("Failed to parse notes from storage", e)
        }
        return [];
    });

    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(()=>{
        localStorage.setItem("my-notes", JSON.stringify(notes));
    }, [notes]);

    const activeNote = activeIndex !== null ? notes[activeIndex] : null;

    const saveNoteContent = (newContent) => {
        if(activeIndex === null) return;
        const updateNotes = [...notes];

        updateNotes[activeIndex] = {...updateNotes[activeIndex], content: newContent};

        setNotes(updateNotes);
    }

    const addNote = () => {
        const newNote = {
            content : "",
            date: new Date().toLocaleDateString()
        }

        setNotes([...notes, newNote])

        setActiveIndex(notes.length);
    } 


    return(
        <>
            <div className="frame">
                <span id="logo">NOTES APP</span>
                <div className="profile">U</div>

                <div className="note-section">
                    <span id="all-notes-lbl">All Notes</span>
                    <div className="all-notes">
                        

                        <NoteList notes={notes}
                        onSelectNote = {setActiveIndex}
                        onAddNote = {addNote}
                        ></NoteList>
                    </div>

                    <span id="note-display-lbl">Edit Note</span>
                    <div className="note-display">
                        <Note note={activeNote}
                        onSave = {saveNoteContent}/>
                    </div>
                </div>
                
                
            </div>
        </>
    );
    

}

export default Frame