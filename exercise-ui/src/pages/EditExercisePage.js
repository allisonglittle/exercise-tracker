import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExerciseDetails from '../components/ExerciseDetails';

function EditExercisePage ({ exerciseToEdit }) {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status !== 200) {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        // return to homepage
        history.push("/");
    };

return (
    <div>
        <h1>Edit exercise</h1>
        <ExerciseDetails name={name} setName={setName} reps={reps} setReps={setReps} weight={weight} setWeight={setWeight} unit={unit} setUnit={setUnit} date={date} setDate={setDate} />
        <button className="submitButton"
            onClick={editExercise}
        >Save</button>
    </div>

    );
}

export default EditExercisePage;