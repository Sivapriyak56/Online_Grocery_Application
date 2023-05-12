
import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/appDisptacher'
 

 class authorStore extends EventEmitter{

    constructor(){
        super();
        this.authors=[
            {
                authorName:'Samuel'
            },
            {
                authorName:'Michael'
            },
            {
                authorName:'Steve'
            }
        
        ];
    }

    createAuthor(authorName){
        this.authors.push({authorName});
        this.emit("AuthorChanged");
    }


    getAllAuthors(){
        return this.authors;
    }

    handleAction(action){
        switch(action.type){

            case "CREATE_AUTHOR":{
                this.createAuthor(action.authorName);
                break;
            }

        }
    }
}

const authstore=new authorStore();
Dispatcher.register(authstore.handleAction.bind(authstore));

export default authstore;
