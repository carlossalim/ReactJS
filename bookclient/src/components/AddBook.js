import React, { useState } from 'react';
// import { useQuery, gql } from '@apollo/client';
import displyaAuthors from './DisplayAuthors'

function AddBook() {

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");
    console.log(name, genre, authorId)
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         description: '',
    //         email: '',
    //         isLoading: false
    //     }

    //     this.changeHandler = this.changeHandler.bind(this);
    // }
    // changeHandler = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    return <form>
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
        <button onClick={() => { console.log(name, genre, authorId) }} >Add</button>
    </form>


}
export default AddBook;