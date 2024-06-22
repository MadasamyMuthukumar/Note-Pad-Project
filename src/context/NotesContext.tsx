import React, { createContext, useContext,useEffect } from "react";
import { initialState,reducer } from "../components/ReducerComp";
import { useReducer } from "react";
import { Note } from "../models/note.model";
import { actionType } from "../models/note.model";
type NotesContextProviderProps={
    children:React.ReactNode
}

type NotesContextType={
    state:Note[],
    dispatch:React.Dispatch<actionType>
}
const LOCAL_STORAGE_KEY = "notes";

const getInitialNotes=()=>{
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedState ? JSON.parse(savedState) : initialState;
}
  
export const notesContext = createContext<NotesContextType>({} as NotesContextType);
// console.log(initialState, reducer);

export const NotesContextProvider=({children}:NotesContextProviderProps)=>{
    const [state,dispatch] = useReducer(reducer,getInitialNotes());
    //  console.log(state,dispatch);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      }, [state]);
     
    const value={
        state:state,
        dispatch:dispatch,
    }
// console.log(value);

    return(
        <notesContext.Provider value={ value }> 
            {children}
        </notesContext.Provider>
    );
}

export const useNotesContext=()=>{
    const context = useContext(notesContext);
    if (context === undefined) {
      throw new Error("useNotesContext must be used within a NotesContextProvider");
    }
    return context;
}