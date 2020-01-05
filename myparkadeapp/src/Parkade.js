import React from "react"

class Parkade extends React.Component {

    render() {

        const myPost = <div>
            <br />
            <h2> Create a new Parkade</h2>
            <div className="jumbotron jumbotron-fluid  py-3" >
                <div className="container">
                    <a href="/parkade/listall" className="btn btn-lg btn-primary my-3 px-5" >List all itens</a>
                    <form action="/parkade/add" method="POST">
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input className="form-control" type="text" placeholder="Parkade name" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                            <textarea className="form-control" placeholder="Parkade description" id="description" name="description" />

                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input className="form-control" type="email" placeholder="Parkade email" id="email" name="email" required />
                        </div>
                        <button className="btn btn-lg btn-primary mt-2 px-5" type="submit">Create New Parkade</button>
                    </form>
                </div>
            </div>
        </div>
        return myPost

    }
}
export default Parkade