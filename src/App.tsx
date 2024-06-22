import React, { useContext, useReducer, useState } from 'react';
import { Note } from './models/note.model';
import './App.css';
import { Header } from './components/Header';
import { NotesList } from './components/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { actionType } from './models/note.model';
import { NotesContextProvider , notesContext,useNotesContext } from './context/NotesContext';
function App() {
  
  // const dummy={
  //   id:(new Date).toString(),
  //   title:"hello",
  //   text:"This is note",
  //   color:"skyblue",
  //   date:(new Date).toString()
  
  // }

  // const [notes,setNotes]=useState<Note[]>([dummy])

  return (
    <>
    <BrowserRouter>
    <Header />
    <NotesContextProvider>
      <Container className="mt-5">
    <Routes>
    {/* <Container className="mt-5"> */}
      {/* <Row> */}
        {/* <Col> */}
        <Route path="/" element={<NotesList />} />        
        {/* </Col> */}
      {/* </Row> */}

      {/* <Row> */}
        {/* <Col> */}
        <Route path="/add" element={<CreateNotes />} />       
        {/* </Col> */}
      {/* </Row>      */}
    {/* </Container> */}
    </Routes>
       </Container>
       </NotesContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
