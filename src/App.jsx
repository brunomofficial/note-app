import Note from './Note/Note.jsx';
import NoteList from './NoteList/NoteList.jsx';
import Navbar from './Navbar/Navbar.jsx';
import { useState, useEffect } from 'react';

function App (){

    const [notes, setNotes] = useState(()=>{
        const savedNotes = localStorage.getItem("notes");
        try{
            const parsed = savedNotes ? JSON.parse(savedNotes) : [];
            return Array.isArray(parsed) ? parsed : [];
        }
        catch(e){
            console.error("Failed to parse notes from storage", e)
        }
        return [];
    });

    const [activeIndex, setActiveIndex] = useState(null);
    const activeNote = activeIndex !== null ? notes[activeIndex] : null;

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);


    const saveNoteContent = (newContent) => {
        if(activeIndex === null) return;
        const updateNotes = [...notes];
        updateNotes[activeIndex] = {...updateNotes[activeIndex], content: newContent};
        setNotes(updateNotes);
    }

    const addNote = () => {
        const newNote = {
            content : "",
            date: new Date().toLocaleDateString()
        }
        setNotes((prevNotes) => {
            setActiveIndex(prevNotes.length);
            return [...prevNotes, newNote];
        });
    } 

    const deleteNote = (index) => {
        const updateNotes = notes.filter((_,i) => i !== index);
        setNotes(updateNotes);
        setActiveIndex(null);
    }

    return(
        <main className="container">
            <Navbar/>  
            <section className="note-section">

                <NoteList 
                    notes={notes}
                    onSelectNote = {setActiveIndex}
                    onAddNote = {addNote}
                    onDeleteNote = {deleteNote} 
                    //setNoteViewActive = {setNoteVisible}
                    mediaVisible={Boolean(activeNote) ? false : true}
                />     

                <button 
                    className={`backbtn ${activeNote ? 'visible' : 'hidden'}`}
                    onClick={() => setActiveIndex(null)}
                >
                    back
                </button>
             
                <Note 
                    note={activeNote}
                    onSave = {saveNoteContent}
                    onDelete={()=>{deleteNote(activeIndex)}}
                    onAddNewNote = {addNote} 
                    mediaVisible={Boolean(activeNote) ? true : false}
                />    
                                  
            </section>  
      </main>
            
    );
    
}

export default App