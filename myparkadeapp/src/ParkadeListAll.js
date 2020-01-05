import React from "react"

const urlListall = `http://localhost:3000/api/parkade/listall/`;

class ParkadeListAll extends React.Component {

    state = {
        isLoading: false,
        error: null,
        parkades: []
    };


    constructor() {

        super();
        // this.state = {
        //     progressValue: 0,
        // };
        // this.handleProgress = this.handleProgress.bind(this);
    }

    componentDidMount() {
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
    }

    render() {
        const { parkades } = this.state;
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
            (<div className="center">No Post</div>)
        return myPost



    }
}
export default ParkadeListAll