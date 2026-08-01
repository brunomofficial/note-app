import NotePreview from "../NotePreview/NotePreview";
import './NoteList.css'

function NoteList({notes, onSelectNote, onAddNote, onDeleteNote, mediaVisible}) {
 
  return (
    <>          
        <div className={`note-list ${mediaVisible ? 'visible' : 'hidden'}`}>    

          <button 
          className="new-note-btn" 
          onClick={onAddNote}
          title="add new note">
          +
          </button>

          {
            notes.map((note, index) =>
              (
              <div key={index} onClick={()=>onSelectNote(index)}>
              <NotePreview 
                noteContent={note.content} 
                dateCreated={note.date}
                onDelete={() => onDeleteNote(index)} />
              </div>
                )
            )         
          }
            
        </div>
    </>
  )
}

export default NoteList