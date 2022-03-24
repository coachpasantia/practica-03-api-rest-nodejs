import express from "express";

const routerNote = express.Router();


/**
 * ruta de para obtener todas las notas.
 */
routerNote.get("/",(req,res)=>{
    res.json({message:"I am route GET"})
})

/**
 * ruta para obtener un sola nota
 */

routerNote.get("/:id",(req,res)=>{
    res.json({message:"I am route Get one note"})
})

/**
 * ruta para crear una nueva nota
 */

routerNote.post("/",(req,res)=>{
    res.json({message:"I am route create New note"})
})

routerNote.put("/:id",(req,res)=>{
    res.json({message:"I am route create New note"})
})

routerNote.delete("/:id",(req,res)=>{
    res.json({message:"I am route create New note"})
})


export default routerNote;