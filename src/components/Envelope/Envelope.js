import React from "react";
import './Envelope.css';

function Envelope(props) {
    return (
        <div className="container">
            <header>
                <div className="sender">
                    <p>{props.fromPerson.name}</p>
                    <p>{props.fromPerson.add1}</p>
                    <p>{props.fromPerson.add2}</p>
                </div>
                <div className="imgDiv">
                    <img src={props.stamp} alt="" />
                </div>
            </header>
            <div className="receiver">
                <p>{props.toPerson.name}</p>
                <p>{props.toPerson.add1}</p>
                <p>{props.toPerson.add2}</p>
            </div>
        </div>
    );
}

export default Envelope;