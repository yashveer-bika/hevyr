// THIS IS SAMPLE CODE THAT WILL ADD TO MY DB

import { MongoClient } from "mongodb";
import BaseExercises from "./baseExercises.json" assert { type: "json" };

// Replace the following with your Atlas connection string                                                                                                                                        

// TODO: put your own username and password
const url = `mongodb+srv://${username}:${password}@hevy-clone.nnu3be0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
 
// The database to use
const dbName = "test";
                    
async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("base-exercises");

        //  // Construct a document from json file                                                                                                                                                             
        //  let personDocument = {
        //      "name": { "first": "Alan", "last": "Turing" },
        //      "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        //      "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
        //      "contribs": [ "Turing machine", "Turing test", "Turingery" ],
        //      "views": 1250000
        //  }

         let baseExercisesDocument = BaseExercises;

         

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertMany(baseExercisesDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
    finally {
        await client.close();
    }
}

run().catch(console.dir);
