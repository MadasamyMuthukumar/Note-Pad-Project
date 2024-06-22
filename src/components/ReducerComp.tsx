
import { Note } from "../models/note.model";
import { actionType } from "../models/note.model";
export const initialState:Note[] = []
  
  
  export function reducer(state:Note[],action:actionType ):Note[]{
    switch(action.type){
      case "ADD":
        return [...state,action.payload];
        case "DELETE":
          return state.filter(note=>note.id!==action.payload)
      default:
        return state
    }
  
  }
  