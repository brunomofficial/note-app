import Note from './Note.jsx';
import NoteAsLi from "./NoteAsLi";
import NoteList from './NoteList.jsx';

function Frame(){

    return(
        <>
            <div className="frame">
                <span id="logo">NOTES APP</span>
                <div className="profile">U</div>

                <div className="note-section">
                    <span id="all-notes-lbl">All Notes</span>
                    <div className="all-notes">
                        

                        <NoteList></NoteList>
                    </div>

                    <span id="note-display-lbl">Edit Note</span>
                    <div className="note-display">
                        <Note/>
                    </div>
                </div>
                
                
            </div>
        </>
    );
    

}

export default Frame