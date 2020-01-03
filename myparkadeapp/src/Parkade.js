import React from "react"
import axios from 'axios';

class Parkade extends React.Component {

    state = { parkades: [] }


    constructor() {
        super();
        // this.state = {
        //     progressValue: 0,
        // };
        // this.handleProgress = this.handleProgress.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/api/parkade/listall`)
            .then(parkades => {
                // const parkade = res.data;
                this.setState({ parkades: parkades.data });
                console.log('parkades', parkades.data);
            })
            .catch(err => console.log(err))
    }

    render() {
        const { parkades } = this.state;
        const postList = (parkades.length) ? (
            parkades.map(parkade => {
                return (
                    <div className="card" key={parkade.id}>
                        {parkade.name} </div>
                )
            })
        )
            :
            (<div className="center">No Post</div>)
        return postList

        {/* 
        return (
            <div className="container"><br /><div className="jumbotron">
                <br></br>
                <a Link className="btn btn-lg btn-primary mb-2" to="/parkade/listall"> List all Itens</a>
                               for parkade in parkades
             <div className="container" id={parkade.id}>
                    <br />
                    <a Link className="btn btn-primary" to='/parkade/{parkade.id}' > Details</a>
                    <span> {parkade.name} - email: (!{parkade.email})</span>
                </div>
                   
                
                    

        // if (error_msg != "")
        //       .alert.alert - danger(id = 'alertBox') #{ error_msg }
        // block content
        // if (parkades && !isDetail)
        //     h1.mb - 3!{ title }  
        //         .jumbotron.jumbotron - fluid
        // for parkade in parkades
        //     .container(id = parkade.id)
        //               p.parkade.mb - 4
        // a.btn.btn - primary(href = '/parkade/' + parkade.id) Details
        //     |
        //     button.btn.btn - primary(onClick = `deleteParkade('${parkade.id}')`) Delete Json / Ajax
        //         |
        //         span!{ parkade.name } - email: (!{ parkade.email })
        //       else if (parkades && isDetail)
        //     h1.mb - 3!{ title }  
        //         .jumbotron.jumbotron - fluid
        // for parkade in parkades
        //     .container
        //               form(action = '/parkade/update/' + parkade.id method = 'POST')
        // div.form - group
        // label(for= 'item_name' ) Name
        // input.form - control(type = 'text' placeholder = 'Parkade name1' id = 'name' name = 'name' value = parkade.name required = true)
        // div.form - group
        // label(for= 'item_description') Description
        // textarea.form - control(placeholder = 'Parkade description' id = 'description' name = 'description' required = false)!{ parkade.description }
        // div.form - group
        // label(for= 'item_email') Email
        // input.form - control(type = 'email' placeholder = 'Parkade email' id = 'email' name = 'email'  value = parkade.email required)
        // p
        // a.btn.btn - lg.btn - primary.mb - 2(href = '/parkade/del/' + parkade.id) Delete Parkade
        //     |
        //     button.btn.btn - lg.btn - primary.mb - 2(type = 'Submit') Update Parkade
        //       else
        // p Create a new Parkade
        //     .jumbotron.jumbotron - fluid
        //         .container
        // form(action = '/parkade/add' method = 'POST')
        //     .form - group
        // label(for= 'name' ) Name
        // input.form - control(type = 'text' placeholder = 'Parkade name' id = 'name' name = 'name' required)
        //     .form - group
        // label(for= 'description') Description
        // textarea.form - control(placeholder = 'Parkade description' id = 'description'  name = 'description')
        //     .form - group
        // label(for= 'email') Email
        // input.form - control(type = 'email' placeholder = 'Parkade email' id = 'email' name = 'email' required)
        // button.btn.btn - lg.btn - primary.mt - 2(type = 'submit') Create New Parkade
        // script(src = '/javascripts/jquery-3.2.1.min.js')
        // script(src = '/javascripts/myscript.js')   
            </div></div>
  )
             */}


    }
}
export default Parkade