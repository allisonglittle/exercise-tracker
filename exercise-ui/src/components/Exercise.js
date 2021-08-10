import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Exercise( exercise) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdEdit /></td>
            <td><MdDeleteForever /></td>
        </tr>
    );
}

export default Exercise;