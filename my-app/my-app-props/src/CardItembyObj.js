import React from 'react';

function CardItembyObj(props) {
    return (
        <div>
            <img src={props.contact.imgurl} alt="User" /><br /><br />
            <label>Name: {props.contact.name}</label> <br />
            <label>Email: {props.contact.email}</label> <br />
            <label>Phone: {props.contact.phone}</label> <br />
        </div>
    );

}

export default CardItembyObj;