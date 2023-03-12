import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// type hacking
declare var process : {
    env: {
        DB_URI: string
    }
  }


const db = mongoose.connection;
const DB_URI = process.env.DB_URI;

function connectToDB() {
    mongoose.connect(DB_URI);
}

connectToDB();

