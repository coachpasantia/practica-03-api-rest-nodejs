import fs from "fs";


export class Note {
    constructor(title, content, status) {
            this._id = 0;
            this._title = title;
            this._content = content;
            this._status = status;
        }

    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }

    get content() {
        return this._content;
    }

    get status() {
        return this._status;
    }

    set id(id){
        this._id=id;
    }
    set title(title){
        this._title = title
    }

    set content(content){
        this._content=content;
    }
    set status(status){
        this._status=status;
    }

}


export class NoteModel{
    constructor(){
        this._name='db';
        this._dataDir = 'db';
        this._dataPath = 'db/db.json';
    }

    readJsonFile(){
        let contentFile = fs.readFileSync(this._dataPath,'utf-8');
        if(contentFile){
            return JSON.parse(contentFile)
        }
        return [];
    }

    writeJsonFile(data){
      let jsonData = JSON.stringify(data,null,'');
      fs.writeFileSync(this._dataPath,jsonData);
    }

    generatePk(){
      let items = this.readJsonFile();
      let lastItem = items.pop();

      if(lastItem){
         return ++lastItem._id;
      }
      return 1;
    }


    async save(note){
      try {
        let notes = this.readJsonFile();
        note._id = this.generatePk();
        notes.push(note);
        await this.writeJsonFile(notes);
        return note._id;
            
      } catch (error) {
        console.log(error)
        return 0;        
      }
    }

    all(){
        return this.readJsonFile();
    }

    findByID(id){
      let items = this.readJsonFile();
      return items.find((item)=> item._id === parseInt(id));
    }

    update(item){
        let items = this.readJsonFile();
        let updateItems = items.map(currentItem => {
            if(currentItem._id == item._id){
                return currentItem = item;
            }
            return currentItem;
        });

        this.writeJsonFile(updateItems);
        return item._id;
    }

    destroy(id){
        let items = this.readJsonFile();
        let filterdItems = items.filter(currentItem => currentItem._id != parseInt(id));
        
        this.writeJsonFile(filterdItems);
        return "ok";
    }


}
