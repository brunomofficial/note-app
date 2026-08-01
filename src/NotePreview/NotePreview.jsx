import { useState } from 'react';
import './NotePreview.css';

export default function NotePreview(props){

    
    return(
        <>
            <div className="note-preview">

                <div className="note-content">
                    {props.noteContent}
                </div>           

                <div className="date-created">
                    {props.dateCreated}               
                </div>
                
            </div>
        </>
    );
    //⮝
}
