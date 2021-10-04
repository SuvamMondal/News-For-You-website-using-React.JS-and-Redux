import { Component, useState } from "react";
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import {addPost} from '../actions/postactions'


const AddPost = ({addPost}) => {
   
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    console.log (addPost);
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, body); // For checking //
        let post=[{
            title:title,
            body:body
        }]
         addPost(post);     
        setTitle('');
        setBody('');
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Post Title" value = {title} 
            onChange = {(e)=>setTitle(e.target.value)} required/>
            <input type="text" placeholder="Post Body" value = {body} 
            onChange = {(e)=>setBody(e.target.value)} required/>   
            <input type = "submit" value = "Add Post" />        
        </form>

    );
}

const mapDispatchToProps = (dispatch) => {

    return {  addPost: (post) => dispatch(addPost(post))  } //Object goes to props//
  
  }
 
export default connect(null, mapDispatchToProps )(AddPost);