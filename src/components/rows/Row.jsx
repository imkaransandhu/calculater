import React from 'react';
import Button from "../Button";
import allRows from "../../digit";

function Row(props) {

    
    return (

        <div className="row ">
            {allRows.map((row, index) => {
                
                    if (row.value === "*" || row.value === "=" || row.value === "-" || row.value === "+" || row.value === "/") {
                       return(<div className="col-3 cal-row" key={index}>
                        <Button specialButton="operater" clicked={props.clicked} value={row.value} />
                    </div>) 
                    } else {
                        return(<div className="col-3 cal-row" key={index}>
                        <Button clicked={props.clicked} value={row.value} />
                    </div>)
                    }

                ;
            })}
        </div>


    )
}


export default Row;