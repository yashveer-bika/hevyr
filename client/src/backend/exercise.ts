import { Db } from "mongodb";
import { Exercise } from "../types/Data";
import { callDatabase } from "./dbConnect"

export function addToExerciseTable(exercise : Exercise) {
    // connect to db


    async function updateTable(db : Db) {
        // insert document into base-exercises table
        // Use the collection "people"
        const col = db.collection("base-exercises");

        // create document from the exercise object
        let exerciseDocument = exercise;

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(exerciseDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);
    }

    callDatabase("test", updateTable)


    // disconnect from db
}