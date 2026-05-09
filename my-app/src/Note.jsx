import { useEffect, useState } from "react";

function Note({note, onSave}){
 
    const [text, setText] = useState("");

    useEffect(() => {
        setText(note ? note.content : "");
    }, [note]);

    if(!note) return <div className="note">
        Select a note to edit
    </div>

    return(
        <>
            <div className="note">

                <div className="note-options">
                    <button className="span">Delete</button>
                    <button className="span">Copy</button>
                    <button className="span" onClick={onSave(text)}>Save</button>
                </div>

                <textarea name="" className="text-area" onChange={(e) => setText(e.target.value)}>
                </textarea>
            </div>
        </>
    );
}

export default Note;