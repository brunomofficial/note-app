import { useEffect, useState } from "react";
import "./Note.css"

function Note({note, onSave, onDelete, onAddNewNote, mediaVisible}){
 
    const [text, setText] = useState("");
    useEffect(() => {
        setText(note ? note.content : "");
    }, [note]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
                e.preventDefault();
                onSave(text);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }

    }, [text, onSave]);

    if(!note) return <div className="note">
        <span className="no-note-msg">Select a note to edit or <a onClick={onAddNewNote}>add a new note</a></span>
    </div>

    return(
        <>
            <div className={`note ${mediaVisible ? 'visible' : 'hidden'}`}>
                <div className="note-options">
                    <button className="deleteNoteBtn" onClick={onDelete}>Delete</button>
                    <button className="saveNoteBtn" onClick={()=>{onSave(text)}}>Save</button>
                </div>

                <textarea id="textArea" className="text-area" value={text} onChange={(e) => setText(e.target.value)}>
                </textarea>
            </div>
        </>
    );
}

export default Note;