// import { React, useState } from 'react'
import data from "./ListData.json"

export default function ExerciseList(props : any) {

    //create a new array by filtering the original array
    const filteredData = data.filter((el : any) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input) || el.exercise.toLowerCase().includes(props.input)
            // return el.exercise.toLowerCase().includes(props.input)

        }
    })

    return (
        <ul>
            {filteredData.map((item : any) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

// export default ExerciseList;