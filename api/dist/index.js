"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes/");
const Exercise_1 = require("./models/Exercise");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// // Basic homepage
// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server is running');
// });
app.use('/exercises', routes_1.exerciseRouter);
// a document instance
const plank = Exercise_1.exerciseModel.build({
    "name": "Plank",
    "equipment": "None",
    "primary": "Abdominals",
    "img": "default",
    "style": "Duration",
    "secondary": []
}).save();
// save model to database
// TODO: add all my routes here
// Listen command is required
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
exports.default = app;
