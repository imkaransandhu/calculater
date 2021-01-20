import React from 'react';










function Button(props) {
    return (
        <button
            onClick={() => {props.clicked(props.value)}}
            value={props.value}
            className="btn cal-btn" id={props.specialButton}>
            {props.value}
        </button>
    )
}


export default Button;