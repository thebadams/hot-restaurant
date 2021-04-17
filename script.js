// fetch logic here
const {Reservation, reservations} = require("./server")


tablesURL = "/api/tables";
waitListURL = "/api/waitlist";

function getTablesInfo(){
    fetch(tablesURL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
          })
          .catch((error) => {
            console.error(error);
          })
}

function getWaitListInfo(){
    fetch(waitListURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'applicaiton/json',
        },
    })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>console.error(error))
}

function addReservation(reservations){
    let reservation = new Reservation()
    fetch(tablesURL, {
        method: 'POST',
       headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCharacter),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
    }