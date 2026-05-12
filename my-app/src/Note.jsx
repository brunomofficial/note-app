import { useEffect, useState } from "react";

function Note({note, onSave, onDelete}){
 
    const [text, setText] = useState("");

    useEffect(() => {
        setText(note ? note.content : "");
    }, [note]);

    if(!note) return <div className="note">
        <span className="no-note-msg">Select a note to edit or add a new note</span>
    </div>

    return(
        <>
            <div className="note">

                <div className="note-options">
                    <button className="span" onClick={onDelete}>Delete</button>
                    <button className="span" onClick={()=>{onSave(text)}}>Save</button>
                </div>

                <textarea name="" className="text-area" value={text} onChange={(e) => setText(e.target.value)}>
                </textarea>
            </div>
        </>
    );
}

export default Note;