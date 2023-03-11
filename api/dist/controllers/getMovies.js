"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = void 0;
function getMovies(req, res) {
    res.send({
        users: [
            { id: 1, name: 'How to train your dragon' },
            { id: 2, name: 'Queen of Katwe' },
        ]
    });
}
exports.getMovies = getMovies;
