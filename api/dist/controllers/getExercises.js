"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExercises = void 0;
function getExercises(req, res) {
    const exercises = [
        {
            "name": "Bench Press - Close Grip (Barbell)",
            "equipment": "Barbell",
            "primary": "Triceps",
            "img": "",
            "style": "Weight Reps",
            "secondary": ["Chest", 'Shoulders']
        },
        {
            "name": "Chin Up (Assisted)",
            "equipment": "Machine",
            "primary": "Lats",
            "img": "",
            "style": "Weight Reps",
            "secondary": ["Upper Back", 'Biceps']
        },
        {
            "name": "Chest Dip (Assisted)",
            "equipment": "Machine",
            "primary": "Chest",
            "img": "",
            "style": "Weight Reps",
            "secondary": ["Triceps", 'Shoulders']
        }
    ];
    var id = 0;
    res.send(exercises.map((e) => [id++, e]));
    // res.send({
    //       name: "Bench Press - Close Grip (Barbell",
    //       equipment: "Barbell",
    //       primary: "Triceps",
    //       img: "",
    //       style: "Weight Reps",
    //       secondary: ["Chest", 'Shoulders']
    // });
    // res.send({
    //   users:[
    //   {id: 1, name: 'How to train your dragon' },
    //   {id: 2, name: 'Queen of Katwe'},
    //   ]
    // });
}
exports.getExercises = getExercises;
