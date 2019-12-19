import React from 'react';

function CardItem(props) {
    return (
        <div>
            <img src={props.imgurl} alt="User" /><br /><br />
            <label>Name: {props.name}</label> <br />
            <label>Email: {props.email}</label> <br />
            <label>Phone: {props.phone}</label> <br />
        </div>
    );

}

export default CardItem;