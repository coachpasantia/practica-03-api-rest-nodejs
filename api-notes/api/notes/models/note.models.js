import fs from "fs";


class Note {
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