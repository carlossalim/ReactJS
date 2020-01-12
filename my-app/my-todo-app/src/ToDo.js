import React from 'react';

function ToDo(props) {
    const className = props.item.checked ? "completed" : null
    // console.log(className);
    return (

        <div className="card-deck mx-auto" style={{ width: 18 + 'rem' }}>
            <div className="card border-primary mb-3" >
                <div className="card-body text-primary">
                    <h5 className="card-title">
                        <input type="checkbox" checked={props.item.checked}
                            onChange={() => props.handleChange(props.item.id)} ></input>
                        <span className={className}>{props.item.taskName}</span></h5>

                </div >
            </div >
        </div >

    );
}

export default ToDo

