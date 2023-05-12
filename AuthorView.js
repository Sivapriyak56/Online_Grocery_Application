import React, { Component } from 'react'
import * as authorActions from '././actions/createAuthorAction';
import authorStore from './stores/authorStore'

export class AuthorView extends Component {

    constructor() {
      super()
    
      this.state = {
         authors:authorStore.getAllAuthors()
      }
      this.ref=React.createRef();
      

      this.getAuthors=this.getAuthors.bind(this);
      
    }

    componentDidMount(){
        authorStore.on("AuthorChanged",this.getAuthors);
    }
    getAuthors(){
        this.setState({
            authors:authorStore.getAllAuthors()
        })
    }
    createAuthor(event){
        authorActions.createAuthorAction(this.refs.authorName.value);
    }
  render() {
    const author=this.state.authors;
    var authorlist=author.map((author)=><li>{author.authorName}</li>)

    return (
      <div> 

        <label>Enter AuthorName:</label>
        <input type="text" ref="authorName"/>
        <button onClick={(event)=>this.createAuthor(event)}>Add Author</button>


      {authorlist}





      </div>
    )
  }
}

export default AuthorView