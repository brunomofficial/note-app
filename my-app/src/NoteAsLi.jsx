function NoteAsLi(props){
    return(
        <>
            <div className="note-as-li">
                <div className="note-content">{props.noteContent}</div>
                <div className="note-as-li-btns">
                    <button>edit</button>
                    <button class="del-li-note">del</button>
                </div>
                <div className="date-created">
                    {props.dateCreated}
                </div>
            </div>
        </>
    );
}

export default NoteAsLi;