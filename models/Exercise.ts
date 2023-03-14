import mongoose from 'mongoose';
import { Exercise, Muscle } from "../api/types/Data"

interface exerciseModelInterface extends mongoose.Model<any> {
    build(attr: Exercise) : any
}

// TODO: setup up exerciseDoc type

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    equipment: {
        type: String,
        required: true
    },
    primary: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    secondary: {
        type: String, // TODO: Muscle | Muscle[]
        required: false
    }
})

exerciseSchema.statics.build = (attr : Exercise) => {
    // console.log(`Type of attr.secondary: ${typeof attr.secondary}`)
    const secondary : Muscle | Muscle[] = attr.secondary; 
    // const abs : Muscle = ("Abdominals")
    // const absList : Muscle[] = ["Abdominals", "Adductors"]

    // let secondaryString;
    // if (typeof secondary == typeof abs) {
    //     secondaryString = secondary.toString();
    // }

    return new exerciseModel({
        name: attr.name,
        equipment: attr.equipment,
        primary: attr.primary,
        img: attr.img,
        style: attr.style,
        secondary: attr.secondary.toString()
    });
    // return ret;
}

// compile schema to model
const exerciseModel = mongoose.model<any, exerciseModelInterface>('Exercise', exerciseSchema, "exerciseTable");


export {exerciseModel};

function handleError(err: Error) {
    throw new Error('Function not implemented.');
}
