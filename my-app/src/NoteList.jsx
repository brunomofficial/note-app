import { useState } from "react";
import NoteAsLi from "./NoteAsLi";

function NoteList() {


    let example = {"content":"Hello there", "date":"1-1-2000"}
    let example2 = {"content":"Hello there again", "date":"2-1-2000"}

    const [notes, setNotes] = useState([example,example2]);

    function addNote(){
        const newNote = {
            "content":"",
            "date":new Date().toLocaleDateString()
        };

        setNotes([...notes,newNote]);
    }
  return (
    <>
        <div className="note-list">
            <button className="new-note-btn" 
                        onClick={addNote}>
                            +
            </button>
            {
                notes.map((note, index)=>
                <NoteAsLi key={index} noteContent={note.content} dateCreated={note.date}>
                    
                </NoteAsLi>
            )
            }
            
        </div>
    </>
  )
}

export default NoteList