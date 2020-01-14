import React from "react"

const urlListall = `http://localhost:3000/api/parkade/listall/`;

class ParkadeListAll extends React.Component {


    constructor(props) {
        super(props);
        console.log('props', props.state, this.props)
        console.log('prostateps', this.state)
        this.state = {
            id: '',
            name: '',
            description: '',
            email: '',
            isLoading: true,
            parkades: [],
        }
        this.listAllItens = this.listAllItens.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(this.state)
        if (id) {
            this.deleteItem(id)
        } else {
            this.listAllItens({ success: null, error: null, isLoading: false })
        }

    }

    listAllItens(myState) {
        let { isLoading, error, success } = myState
        if (this.props.location.state) { success = this.props.location.state.success }
        this.setState({ isLoading, error, success })
        fetch(urlListall)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error("Error fetching parkades!")
                }
            })
            .then(parkades => {
                // Setting STATE for parkades 
                this.setState({ parkades: parkades });
            })
            .catch(err => console.log(err))
        this.setState({ isLoading: false })
    }

    deleteItem(id) {
        this.setState({ isLoading: true, error: null, success: null })
        fetch(`http://localhost:3000/api/parkade/del/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
            .then((res) => {
                if (!res.ok) {
                    this.setState({ error: res.data.msg, isLoading: false })
                    throw Error('Error deleting parkade!')
                }
                //Change URL from /del/:id to /listall
                this.props.history.push({
                    pathname: '../listall',
                    state: { success: 'Parkade deleted sucessfully!', error: 'DORGA!' }
                })
                //Reload Itens - Send error
                this.listAllItens({ success: 'Parkade deleted sucessfully!', error: null, isLoading: false })

            })
            .catch(err => {
                console.log(err)
            })
        this.setState({ isLoading: false })



    }

    render() {
        const { parkades, error, success } = this.state;
        const myPost = (parkades.length) ? (
            parkades.map(parkade => {
                return (
                    <div className="jumbotron py-2 my-3" key={parkade.id}>
                        <div className="container">
                            <div className="row py-3 d-flex align-items-center">
                                <a href={"/parkade/detail/" + parkade.id} className="btn btn-lg btn-primary px-5 mx-3 "> Details </a>{parkade.name} ({parkade.email})
                            </div>
                        </div>
                    </div>
                )
            })
        )
            :
            (<div className="center">Loading ...</div>)
        return <div><br /><h1>Parkades</h1>

            <div className="alert alert-danger" style={{ display: error ? 'block' : 'none' }} id='alertBox'> {error} </div>
            <div className="alert alert-success" style={{ display: success ? 'block' : 'none' }} id='alertBox'> {success} </div>
            {myPost}
        </div>


    }
}
export default ParkadeListAll