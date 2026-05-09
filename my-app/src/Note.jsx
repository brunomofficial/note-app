import { useState } from "react";
import NoteAsLi from "./NoteAsLi";

function Note(){
    const [noteText, setNoteText] = useState("");

    function saveNote(){
        setNoteText(document.getElementById("text-area").value);
        alert(noteText)
    }

    return(
        <>
            <div className="note">

                <div className="note-options">
                    <button className="span">Delete</button>
                    <button className="span">Copy</button>
                    <button className="span" onClick={saveNote}>Save</button>
                </div>

                <textarea name="" id="text-area" className="text-area">
                </textarea>
            </div>
        </>
    );
}

export default Note;