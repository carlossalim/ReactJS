import React from 'react';

function CardItem(props) {
    console.log(props);
    return (
        <div>
            <img src={props.imgurl} />
            <label>Title: {props.title}</label> <br />
            <label>Email: {props.email}</label> <br />
            <label>Phone: {props.phone}</label> <br />
        </div>
    );

}

export default CardItem;