// fetch logic here
const {Reservation, reservations} = require("./server")


//name
//phoneNumber
//email
//uniqueID
//add-btn
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const phoneNumEl = document.querySelector("#phoneNumber");
const uniqueIDEl = document.querySelector("#uniqueID");
const addBtnEl = document.querySelector("#add-btn");

addBtnEl.addEventListener("click", ()=>{
    nameVal = nameEl.value.trim()
    emailVal = emailEl.value.trim()
    phoneNumVal = phoneNumEl.value.trim()
    uniqueIDVal = uniqueIDEl.value.trim()
    let reservation = new Reservation(nameVal, uniqueIDVal, phoneNumVal, emailVal)
    addReservation(reservation)

})

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

function addReservation(reservation){
    fetch(tablesURL, {
        method: 'POST',
       headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservation),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
    }