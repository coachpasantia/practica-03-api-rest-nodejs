import {Note,NoteModel} from "../models/note.models.js";
import {response} from "../../../response/response.js";


const noteModel = new NoteModel();

export class NoteContreller{
  constructor(){}

  //metodo para responder la ruta obtener todas las notas
  getAllNotes(req,res){
    try {
      let allNotes = noteModel.all();
     // let dataJson = JSON.parse(allNotes);
      response.succes(req,res,allNotes,200);
    } catch (error) {
      console.log(error);
      response.error(req,res,null,500);
    }
  }

   // crear nueva nota 
  async createNewNote(req,res){
    let {title,content,status} = req.body;
    if(title !== undefined && content !== undefined && status !== undefined){
      try {
        const newNote = new Note(title,content,status);
        let result =  await noteModel.save(newNote);
        if(result === 0){
          let message="No se creo la nota";
          response.error(req,res,message,500)
        }else{
          let messageOk = "Se ha creado una nueva nota"; 
          response.succes(req,res,messageOk,200)
        }
        
      } catch (error) {
        console.log(error)
        response.error(req,res,null,500); 
      }
    }else{
      let messageError="complete todos los datos";
      response.error(req,res,messageError,500)
    }
  }

  getOneNote(req,res){
    let id = req.params.id;
    let resultNote = noteModel.findByID(id);
    if(resultNote){
      response.succes(req,res,resultNote,200);
    }else{
      let messageNotFound="la nota no existe";
      response.error(req,res,messageNotFound,404)
    }
  }

  updateNote(req,res){
    //let {id,title,content,status} = req.body;
    let result = noteModel.update(req.body);
    if(result){
      response.succes(req,res,result,200)
    }
  }

  deleteNote(req,res){
    let id = req.params.id;
    let result = noteModel.destroy(id);
    if(result){
      response.succes(req,res,result,200);
    }
  }


}