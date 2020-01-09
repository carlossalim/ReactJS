import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import displyaAuthors from './DisplayAuthors'
import { LIST_ALL_BOOK, ADD_BOOK } from '../queries/queries'

function AddBook() {
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const [addBook, { loading: mutationLoading, error: mutationError },] = useMutation(ADD_BOOK);

    return <div>
        <form onSubmit={e => {
            e.preventDefault();
            //USING Variables to  AddBook
            //Using refetchQueries to update book list
            addBook({ variables: { name, genre, authorId }, refetchQueries: [{ query: LIST_ALL_BOOK }] })
        }}>
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
        </form>
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error :( Please try again</p>}
    </div>


}
export default AddBook;