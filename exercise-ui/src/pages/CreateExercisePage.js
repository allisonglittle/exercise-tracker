import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateExercisePage() {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        // create object with user's exercise parameters
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status !== 201) {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        // return to home page
        history.push("/");
    };
    return (
        <div>
            <h1>Add exercise</h1>
            <div>
                <label className="inputLabel">Name: 
                    <input className="textInput" type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <label className="inputLabel">Reps:
                    <input className="numericInput" type="number" value={reps} onChange={e => setReps(e.target.value)} />
                </label>
                <label className="inputLabel">Weight:
                    <input className="numericInput" type="number" value={weight} onChange={e => setWeight(e.target.value)} />
                </label>
                <label className="inputLabel">Unit: 
                    <input className="numericInput" type="text" value={unit} onChange={e => setUnit(e.target.value)} />
                </label>
                <label className="inputLabel">Date: 
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                </label>
            </div>
            <button
                onClick={addExercise}
            >Submit</button>
        </div>
    );
}

export default CreateExercisePage;