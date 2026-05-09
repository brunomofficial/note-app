import NoteAsLi from "./NoteAsLi";

function NoteList({notes, onSelectNote, onAddNote}) {
 
  return (
    <>
        <div className="note-list">
            <button className="new-note-btn" 
                        onClick={onAddNote}>
                            +
            </button>

            {
                  notes.map((note, index) =>
                     (
                      <div key={index} onClick={()=>onSelectNote(index)}>
                        <NoteAsLi noteContent={note.content} dateCreated={note.date}>
                    
                        </NoteAsLi>

                      </div>
                     )
                
                  )
            }
            
        </div>
    </>
  )
}

export default NoteList