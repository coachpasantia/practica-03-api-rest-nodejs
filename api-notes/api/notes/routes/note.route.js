import express from "express";
import { NoteContreller } from "../controller/note.ctl.js";


const noteController = new NoteContreller();

const routerNote = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Notes:
 *          type: object
 *          properties:
 *              title: 
 *                type: string
 *                description: title of note
 *              content: 
 *                type: string
 *                description: content of note
 *              status: 
 *                 type: boolen
 *                 description: status of note
 *          required:
 *              - title
 *              - content
 *              - status
 *          example:
 *              title: first note
 *              content: my first note
 *              status: false
 */

/**
 * @swagger
 * /api/v1/note:
 *  get:
 *    summary: return all notes
 *    tags: [note]   
 *    responses:
 *      200:
 *        description: all notes!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *                    
 */
routerNote.get("/",noteController.getAllNotes)

/**
 * @swagger
 * /api/v1/note/{id}:
 *  get:
 *    summary: return one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id   
 *    responses:
 *      200:
 *        description: all notes!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: note not found                 
 */
routerNote.get("/:id",(req,res)=>{
    res.json({message:"I am route Get one note"})
})

/**
 * @swagger
 * /api/v1/note:
 *  post:
 *    summary: create a new note
 *    tags: [note]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notes'
 *    responses:
 *      200:
 *        description: new note created!
 *      500: 
 *        description: Inter Server Error
 *                    
 */
routerNote.post("/",noteController.createNewNote);
/**
 * @swagger
 * /api/v1/note/{id}:
 *  put:
 *    summary: update one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Notes'   
 *    responses:
 *      200:
 *        description: note updated!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: user not found                 
 */
routerNote.put("/:id",(req,res)=>{
    res.json({message:"I am route create New note"})
})

/**
 * @swagger
 * /api/v1/note/{id}:
 *  delete:
 *    summary: return one note
 *    tags: [note]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the note id   
 *    responses:
 *      200:
 *        description: note is deleted!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Notes'
 *      404:
 *        description: note not found and not deleted                
 */
routerNote.delete("/:id",(req,res)=>{
    res.json({message:"I am route create New note"})
})

export default routerNote;