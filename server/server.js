import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

// connect to the db file

import Database from "better-sqlite3";
const db = new Database("database.db");

// go and ger the existing db file

app.get("/", function (request, response) {
    response.json("You are looking at my root route.");
});

app.get("./teams", function (request, response) {
const teams = db.prepare("SELECT * FROM games").all();
response.json(teams)
})

app.listen (8080, function () {
    console.log("I am Groot 8080");
});