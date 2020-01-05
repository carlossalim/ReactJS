import React from "react"

import { withRouter } from "react-router";



class ParkadeDetail extends React.Component {

    state = { parkades: [] }



    constructor(props) {
        super(props);
        this.getDetailParkade = this.getDetailParkade.bind(this);
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
                console.log('parkades', parkades)
                this.setState({ parkades: parkades });
            })
            .catch(err => console.log(err))
    }


    render() {
        const { parkades } = this.state;
        const myPost = (parkades.length) ? (parkades.map(parkade => {
            return (
                <div className="card" key={parkade.id}>
                    <br />
                    <div className="jumbotron py-3 my-0" >
                        <a href="/parkade/listall" className="btn btn-lg btn-primary px-5 my-3" >List all itens</a>
                        <div className="container">
                            <div className="row">
                                <label for="name">Name</label>
                                <input className="form-control" type="text" id="name" value={parkade.name} />
                            </div>
                            <div className="row">
                                <label for="description">Description</label>
                                <textarea id="description" className="form-control" value={parkade.description} />
                            </div>
                            <div className="row">
                                <label for="email">Email</label>
                                <input type="text" id="email" className="form-control" value={parkade.email} />
                            </div>
                        </div>
                    </div>
                </div>
            )

        })) :
            (<div className="center">No Post</div>)
        return myPost
    }
}


export default ParkadeDetail