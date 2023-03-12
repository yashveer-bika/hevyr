import mongoose, { Collection } from "mongoose";
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

export function connectToDB() {
    mongoose.connect(DB_URI);

    // When successfully connected
    mongoose.connection.on('connected', () => {
        console.log('Connection to database established successfully');
    });

    // If the connection throws an error
    mongoose.connection.on('error', (err) => {
        console.error(`Error connecting to database: ${err}`);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });
}


// // TODO: write a good type for the callback function
// export function find (name : string, query : mongoose.mongo.Filter<mongoose.mongo.BSON.Document> , cb : any) {
//     mongoose.connection.db.collection(name, (err : any, collection : any) {
//        collection.find(query).toArray(cb);
//    });
// }

// connectToDB();

