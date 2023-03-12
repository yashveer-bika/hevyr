"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exercise = void 0;
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
    return new exercise(attr);
};
const exercise = mongoose_1.default.model('Exercise', exerciseSchema);
exports.exercise = exercise;
