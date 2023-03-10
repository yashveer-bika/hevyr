// import { React, useState } from 'react'
import data from "./ListData.json"
import ExerciseRow from "./ExerciseRow";

export default function ExerciseList(props : any) {

    //create a new array by filtering the original array
    const filteredData = data.filter((el : any) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.lift.toLowerCase().includes(props.input) && el.muscle.toLowerCase().includes(props.input)
            // return el.exercise.toLowerCase().includes(props.input)

        }
    })

    const exerciseRows = filteredData.map((item : { lift: string; muscle: string; imgPath: string; id: number; }) => (
        <ExerciseRow lift={item.lift} 
                muscle={item.muscle} 
                imgPath={item.imgPath} 
                id={item.id} 
                addable={false}
                addToScreen={()=>null} 
        />
    ));

    return (
        <div className="exercise-list">
            {/* <ul>
                {filteredData.map((item : any) => (
                    <li key={item.id}>
                        <ExerciseRow props={item}></ExerciseRow>
                    </li>
                ))}
            </ul> */}

                {exerciseRows}
        </div>
        
    )
}

// export default ExerciseList;