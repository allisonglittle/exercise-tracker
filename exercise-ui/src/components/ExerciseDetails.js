import React from 'react';

function ExerciseDetails({ name, setName, reps, setReps, weight, setWeight, unit, setUnit, date, setDate }) {
    return (
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
    );
}

export default ExerciseDetails;