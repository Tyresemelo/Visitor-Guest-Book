import Database from "better-sqlite3";
const db = new Database("database.db")
// creates a database or gets an exisiting one
// create the teams table
db.exec(`
CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    year INTEGER NOT NULL,
    imgUrl TEXT
    )
`);

//Fill the games table
const insertTeam = db.prepare(`
INSERT INTO teams (name, year, imgUrl) VALUES (?,?,?)
`);

insertTeam.run(
    "Liverpool",
1892,
"https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" 
)
insertTeam.run(
    "Barcelona",
    1899,
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/800px-FC_Barcelona_%28crest%29.svg.png"
)
insertTeam.run(
    "AC Milan",
    1899,
"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png"
)
insertTeam.run(
    "Paris Saint Germain",
    1970,
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/640px-Paris_Saint-Germain_F.C..svg.png"
)
insertTeam.run(
    "Bayern Munich",
    1900,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
)