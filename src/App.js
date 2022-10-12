import React from 'react';
import Envelope from './components/Envelope/Envelope.js';
import imgSrc from "./favicon.ico";

const receiver = {
    name: 'Vanissa Medea',
    add1: '34387 Monaco',
    add2: 'Bigstr. 32a'
}
const sender = {
    name: 'Penelope Milano',
    add1: '95316 Vienna',
    add2: 'Sesamestr. 21'
}

export default function App() {
    return (
        <Envelope toPerson={receiver} fromPerson={sender} stamp={imgSrc} />
    )
};