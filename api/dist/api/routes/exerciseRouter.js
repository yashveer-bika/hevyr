"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exerciseRouter = void 0;
const express_1 = require("express");
const getExercises_1 = require("../controllers/getExercises");
exports.exerciseRouter = (0, express_1.Router)();
exports.exerciseRouter.get('/', getExercises_1.getExercises);
