import React from "react";
import './Envelope.css';

function Envelope(props) {
    return (
        <div className="container">
            <header>
                <AddressLabel person={props.fromPerson} />
                <div className="imgDiv">
                    <img src={props.stamp} alt="" />
                </div>
            </header>
            <AddressLabel person={props.toPerson} />
        </div>
    );
}

function AddressLabel(props) {
    return (
        <div>
            <p>{props.person.name}</p>
            <p>{props.person.add1}</p>
            <p>{props.person.add2}</p>
        </div>);
}

export default Envelope;