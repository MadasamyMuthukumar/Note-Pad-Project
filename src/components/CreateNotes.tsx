import * as React from 'react';
import { Container,Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Note } from '../models/note.model';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { actionType } from '../models/note.model';
import { useNotesContext } from '../context/NotesContext';
// interface IAddProps {
//     notes:Note[],
//     setNotes:React.Dispatch<actionType>
// }
const CreateNotes: React.FunctionComponent= () => {
    const { state,dispatch} = useNotesContext();
    const navigate=useNavigate();
     const [error, setError] =useState<string>("");
    const titleRef=useRef< HTMLInputElement | null>(null);
    const textRef=useRef< HTMLTextAreaElement | null>(null);
    const colorRef=useRef< HTMLInputElement | null>(null);

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(titleRef.current?.value=="" || textRef.current?.value=="" || colorRef.current?.value==""){
          setError("All fields are Mandatory!");
          return;
        }
        //otherwise
        setError("");
        const newNote:Note={
        id: (new Date()).toString(),
         title:(titleRef.current as HTMLInputElement).value,
        text:(textRef.current  as HTMLTextAreaElement).value,
        color:(colorRef.current  as HTMLInputElement).value,
         date:(new Date()).toString()

        }
        console.log(newNote);
        
        dispatch({type:"ADD",payload:newNote});
        // setNotes([...notes,{
        //     id: (new Date()).toString(),
        //     //the value of refs are possibly null so it will throw error. it defaultly infer null type. so we have to explicityly mention the type here
        //     title:(titleRef.current as HTMLInputElement).value,
        //     text:(textRef.current  as HTMLTextAreaElement).value,
        //     color:(colorRef.current  as HTMLInputElement).value,
        //     date:(new Date()).toString()

        // }]);
        (titleRef.current as HTMLInputElement).value="";
        (textRef.current  as HTMLTextAreaElement).value="";
        (colorRef.current  as HTMLInputElement).value="";
        navigate("/");

    }
  return (
    <>
    <Row>
        <Col>

        <h2 className="mt-3">Create Notes</h2>
    { error && <Alert variant="danger">{error}</Alert>}
    <Form className="mt-3 mb-3" onSubmit={(e)=>handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle" >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title..." ref={titleRef}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText" >
            <Form.Label>Text</Form.Label>
            <Form.Control as="textarea" rows={3}  placeholder="Enter your Notes..." ref={textRef}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicColor" >
            <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
            <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose color" ref={colorRef}></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">Add</Button>
    </Form>

        </Col>
    </Row>

        </>

  );
};

export default CreateNotes;
