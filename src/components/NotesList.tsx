import { Container, Row, Col, Button } from "react-bootstrap";
import { Note } from "../models/note.model";
import Notes from "./Notes";
import { Link } from "react-router-dom";
import { actionType } from "../models/note.model";
import { useNotesContext } from "../context/NotesContext";
// interface NoteListProp {
//     notes:Note[]
//     setNotes:React.Dispatch<actionType>
// }

export const NotesList:React.FunctionComponent=()=>{

  const { state,dispatch} = useNotesContext();
  // console.log(state);
  
    const handleDelete=(id:string)=>{
       
      dispatch({type:"DELETE",payload:id});
    }
    const renderNotes = ():JSX.Element[]=>{
      // console.log(notes);
      
        return state.map(note=>{
           return <Notes key={note.id} note={note} handleDelete={handleDelete} />
        })
    }  //aray of jsx elements(nodes)
    return(
      <>
      <Row>
        <Col>
        <div className="d-flex justify-content-between align-items-center">
        <h2 className="mt-3">Notes</h2>
        <Link to="/add">
        <Button className="mt-3 mb-2" variant="primary">ADD</Button>
        </Link>
        </div>
        
        <div>{state.length>0 ? renderNotes():"Add your Notes...."}</div>
        
        </Col>
      </Row>
      </>
    );
}