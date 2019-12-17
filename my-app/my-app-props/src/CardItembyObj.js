import React from 'react';

function CardItembyObj(props) {
    console.log(props);
    return (
        <div>
            <img src={props.contact.imgurl} />
            <label>Title: {props.contact.title}</label> <br />
            <label>Email: {props.contact.email}</label> <br />
            <label>Phone: {props.contact.phone}</label> <br />
        </div>
    );

}

export default CardItembyObj;