import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import displyaAuthors from './DisplayAuthors'

function AddBook() {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const ADD_BOOK = gql`
    mutation addBook($name: String!, $genre: String!, $authorId: String!){
        addBook(name:$name, genre:$genre,  authorId:$authorId){
          name genre authorId
        }
    }
   
        `
    const [addBook, { data }] = useMutation(ADD_BOOK);
    // console.log('ADD_BOOK', ADD_BOOK)
    // console.log('name', name)
    // console.log('genre', genre)
    // console.log('authorId', authorId)

    return <form onSubmit={e => {
        e.preventDefault();
        console.log({ variables: { name, genre, authorId } })
        addBook({ variables: { name, genre, authorId } })
        // addBook({ variables: { name: { name }, genre: { genre }, authorId: { authorId } } })
    }
    }>
        <div className="field">
            <label>Name:</label>
            <input type="text" name="name" id="name" onChange={() => { setName(document.getElementById("name").value) }} required />
        </div>
        <div className="field">
            <label>Genre:</label>
            <input type="text" name="genre" id="genre" onChange={() => { setGenre(document.getElementById("genre").value) }} required />
        </div>
        <div className="field">
            <label>Author:</label>
            <select name="authorId" id="authorId" onChange={() => { setAuthorId(document.getElementById("authorId").value) }} required>
                <option value=""  > Select an author</option>
                {displyaAuthors()}
            </select>
        </div>
        <button type="submit" >Add</button>
    </form >


}
export default AddBook;