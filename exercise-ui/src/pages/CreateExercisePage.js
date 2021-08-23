import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExerciseDetails from '../components/ExerciseDetails';

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
        } else {
            alert(`Exercise created successfully.`);
        }
        // return to home page
        history.push("/");
    };
    return (
        <div>
            <h1>Add exercise</h1>
            <ExerciseDetails name={name} setName={setName} reps={reps} setReps={setReps} weight={weight} setWeight={setWeight} unit={unit} setUnit={setUnit} date={date} setDate={setDate} />
            <button className="submitButton"
                onClick={addExercise}
            >Submit</button>
        </div>
    );
}
// {/* <label className="inputLabel">Unit: 
//                     <input className="numericInput" type="text" value={unit} onChange={e => setUnit(e.target.value)} />
//                 </label> */}
//<input className="numericInput" type="text" value={unit} onChange={e => setUnit(e.target.value)} />
export default CreateExercisePage;