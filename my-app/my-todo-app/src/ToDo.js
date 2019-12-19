import React from 'react';

function ToDo(props) {
    //console.log('Todo', props);

    return (
        <div>
            <input type="checkbox" checked={props.item.checked}
                onChange={() => props.handleChange(props.item.id)} />
            <label>{props.item.taskName}</label> <br />
        </div >
    );
}

export default ToDo

