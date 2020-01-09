import React from "react"

class ParkadeDetail extends React.Component {

    constructor(props) {
        super(props);
        this.getDetailParkade = this.getDetailParkade.bind(this);
        this.state = {
            id: '',
            name: '',
            description: '',
            email: '',
            isLoading: false

        }
    }

    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.getDetailParkade('http://localhost:3000/api/parkade/listid/' + id)
    }

    getDetailParkade = function (myUrl) {
        fetch(myUrl)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error("Error fetching parkades!")
                }
            })
            .then(parkades => {
                // Setting STATE for parkades 
                parkades.map(parkade => {
                    return this.setState({ id: parkade.id, name: parkade.name, email: parkade.email, description: parkade.description })
                })
            })
            .catch(err => console.log(err))
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const { id } = this.state;
        this.setState({ isLoading: true, error: null })
        fetch(`http://localhost:3000/api/parkade/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((res) => {
                if (!res.ok) {
                    this.setState({ error: res.statusText, isLoading: false })
                    throw Error('Error saving parkade!' + res.statusText)
                }
                this.setState({ success: 'Parkade changed.', isLoading: false })
                console.log(this.state)
                return this.props.history.push('/parkade/listall')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { id, name, email, description, error, success } = this.state;
        const myPost = (id !== "") ?
            <div className="" key={id} >
                <br />
                <h1>Parkade Detail </h1>
                <div className="alert alert-danger" style={{ display: error ? 'block' : 'none' }} id='alertBox'> {error} </div>
                <div className="alert alert-success" style={{ display: success ? 'block' : 'none' }} id='alertBox'> {success} </div>

                <div className="jumbotron py-3 my-0" >
                    <a href="/parkade/listall" className="btn btn-lg btn-primary px-5 my-3" >List all itens</a>
                    <form onSubmit={this.submitHandler} method="POST">
                        <div className="container">
                            <input className="form-control" type="hidden" id="id" name="id" value={id} />
                            <div className="row">
                                <label>Name</label>
                                <input className="form-control" type="text" id="name" name="name" onChange={this.changeHandler} value={name} required />
                            </div>
                            <div className="row">
                                <label>Description</label>
                                <textarea id="description" className="form-control" name="description" onChange={this.changeHandler} value={description} />
                            </div>
                            <div className="row">
                                <label>Email</label>
                                <input type="text" id="email" className="form-control" name="email" onChange={this.changeHandler} value={email} required />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href={"/parkade/del/" + id} className="btn btn-lg btn-primary px-5 my-3" >Delete Parkade</a>
                            <button type="submit" className="btn btn-lg btn-primary px-5 my-3 " >Update Parkade</button>
                        </div>
                    </form>
                </div>
            </div>
            :
            (<div className="center">Loading ...</div>)
        return myPost
    }
}


export default ParkadeDetail