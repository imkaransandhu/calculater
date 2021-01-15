import React from 'react';


function Textarea(props) {
    return (
        <div>
            <input className={props.class} placeholder={props.numberToShow} />
        </div>
    )
}


export default Textarea;