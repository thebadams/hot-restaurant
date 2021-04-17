const Express = require("express");
const Path = require("path")


const app = express()
const PORT = 8080

class Reservation{
    constructor(name, id, phone, email){
        this.name = name,
        this.id = id,
        this.phone = phone,
        this.email = email,
        this.routeName = this.name.replace(/\s/g, '').toLowerCase()
    }
}

const reservations = []

const waitList = []
//app.get logic here
    //get routes: /api/tables; /api/waitlist
    

//app.post logic here
//post routes: //api/tables; /api/waitlist


//html display routes:

// root: display home.html

app.get("/", sendFile("./home.html"))
// "/reserve": display reserve.html
app.get("/reserve", sendFile("./reserve.html"))
// "/tables": display tables.html
app.get("/tables", sendFile("./tables.html"))

module.exports = {Reservation, reservations}