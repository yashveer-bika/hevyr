import mongoose from 'mongoose';
import { Log, LogRow } from "../api/types/Data"

interface logModelInterface extends mongoose.Model<any> {
    build(attr: LogRow) : any
}

// TODO: see if this is enough, change required parameter if needed
const logSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    exercise_title: {
        type: String,
        required: true
    },
    superset_id: {
        type: String,
        required: false
    },
    exercise_notes: {
        type: String,
        required: false
    },
    set_index: {
        type: String,
        required: false
    },
    set_type: {
        type: String,
        required: false
    },
    weight_lbs: {
        type: String,
        required: false
    },
    reps: {
        type: Number,
        required: false
    },
    distance_miles: {
        type: Number,
        required: false
    },
    duration_seconds: {
        type: Number,
        required: false
    }
})

logSchema.statics.build = (attr : LogRow) => {
    // console.log(`Type of attr.secondary: ${typeof attr.secondary}`)
    // const secondary : Muscle | Muscle[] = attr.secondary; 
    // const abs : Muscle = ("Abdominals")
    // const absList : Muscle[] = ["Abdominals", "Adductors"]

    // let secondaryString;
    // if (typeof secondary == typeof abs) {
    //     secondaryString = secondary.toString();
    // }

    return new logModel({
        title: attr.title,
        startTime: attr.startTime,
        endTime: attr.endTime,
        description: attr.description,
        exercise_title: attr.exercise_title,
        superset_id: attr.superset_id,
        exercise_notes: attr.exercise_notes,
        set_index: attr.set_index,
        set_type: attr.set_type,
        weight_lbs:	attr.weight_lbs,
        reps: attr.reps,
        distance_miles: attr.distance_miles,
        duration_seconds: attr.duration_seconds,
    });
    // return ret;
}

// compile schema to model
const logModel = mongoose.model<any, logModelInterface>('Log', logSchema, "logTable");


export {logModel};

function handleError(err: Error) {
    throw new Error('Function not implemented.');
}
