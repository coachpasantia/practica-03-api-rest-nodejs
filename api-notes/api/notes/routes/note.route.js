import express from "express";
import { NoteContreller } from "../controller/note.ctl.js";


const noteController = new NoteContreller();

const routerNote = express.Router();


/**
 * ruta de para obtener todas las notas.
 */
routerNote.get("/",noteController.getAllNotes)

/**
 * ruta para obtener un sola nota
 */

routerNote.get("/:id",(req,res)=>{
    res.json({message:"I am route Get one note"})
})

/**
 * ruta para crear una nueva nota
 */

routerNote.post("/",noteController.createNewNote);

routerNote.put("/:id",(req,res)=>{
    res.json({message:"I am route create New note"})
})

routerNote.delete("/:id",(req,res)=>{
    res.json({message:"I am route create New note"})
})


export default routerNote;