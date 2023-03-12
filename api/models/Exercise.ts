import mongoose from 'mongoose';
import { Exercise, Muscle } from "../types/Data"

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
    return new exercise(attr);
}

const exercise = mongoose.model<any, exerciseModelInterface>('Exercise', exerciseSchema);


export {exercise};