import React from "react"
import ParkadeListAll from './ParkadeListAll'

class Parkade extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            email: '',
            isLoading: false
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {


    }
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({ isLoading: true, error: null })
        fetch('http://localhost:3000/api/parkade/add', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
            .then((res) => {
                if (!res.ok) {
                    this.setState({ error: res.statusText, isLoading: false })
                    throw Error('Error saving parkade!')
                }
                this.props.history.push({
                    pathname: '/parkade/listall',
                    state: { success: 'Parkade created sucessfully!' }
                })
                //ParkadeListAll.listAllItens({ success: 'Parkade created sucessfully!', error: null, isLoading: false })
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        const { name, description, email, error, success } = this.state
        const myPost =
            <div>
                <br />
                <h1>Create a new Parkade</h1>
                <br />
                <div className="alert alert-danger" style={{ display: error ? 'block' : 'none' }} id='alertBox'> {error} </div>
                <div className="alert alert-success" style={{ display: success ? 'block' : 'none' }} id='alertBox'> {success} </div>
                <div className="jumbotron jumbotron-fluid  py-2" >
                    <div className="container">
                        <a href="/parkade/listall" className="btn btn-lg btn-primary my-3 px-5" >List all itens</a>
                        <form onSubmit={this.submitHandler} method="POST">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" type="text" placeholder="Parkade name" id="name"
                                    name="name" onChange={this.changeHandler} value={name} required />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control" placeholder="Parkade description" id="description"
                                    name="description" onChange={this.changeHandler} value={description} />

                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" placeholder="Parkade email" id="email"
                                    name="email" onChange={this.changeHandler} value={email} required />
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