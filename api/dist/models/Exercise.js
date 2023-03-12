"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exerciseModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// TODO: setup up exerciseDoc type
const exerciseSchema = new mongoose_1.default.Schema({
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
        type: String,
        required: false
    }
});
exerciseSchema.statics.build = (attr) => {
    console.log(`Type of attr.secondary: ${typeof attr.secondary}`);
    const secondary = attr.secondary;
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
};
// compile schema to model
const exerciseModel = mongoose_1.default.model('Exercise', exerciseSchema, "exerciseTable");
exports.exerciseModel = exerciseModel;
function handleError(err) {
    throw new Error('Function not implemented.');
}
