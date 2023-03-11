"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getMovies_1 = require("../controllers/getMovies");
const movieRouter = (0, express_1.Router)();
movieRouter.get('/', getMovies_1.getMovies);
exports.default = movieRouter;
