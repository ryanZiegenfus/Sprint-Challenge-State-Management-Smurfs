import React, {useState, useContext} from 'react';
import './App.css';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';


export default function SmurfInput (props) {
    const {addSmurf} = useContext(SmurfContext)
    const [stateText, setStateText] = useState('');

    const handleChange = (event) => {
        setStateText({...stateText, [event.target.name]: event.target.value});
        console.log(stateText)
    }

    // useEffect (() => {
    //console.log(stateSmurf)
    // }, [stateText])

    const submitChange = (event) => {
        event.preventDefault();
        addSmurf(stateText);
        axios.post('http://localhost:3333/smurfs', stateText)
        .then(response => console.log(response))

    }

    return(
        <form onSubmit={event => submitChange(event)}>
            <input type="text" placeholder="Name" name="name" value={stateText.name} onChange={ event => handleChange(event)}/>
            <input type="text" placeholder="Age" name="age" value={stateText.age} onChange={ event => handleChange(event)}/>
            <input type="text" placeholder="Height" name="height" value={stateText.height} onChange={ event => handleChange(event)}/>
            <button type="submit">Add Smurf</button>
        </form>
    )
}