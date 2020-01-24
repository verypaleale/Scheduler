$(document).ready(function () {

  var currDay = moment().format("MMM Do YY");
  
  $("#currentDay").text(currDay); //display in jumbotron

var textInput = [];
//An array if I want to make all time blocks DOMs later
//var agendaHourly = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//stored();


    for (let i = 0 ; i < 9 ; i++){ 
        $('.row')[i].children[0].children[0].id;
            
        agendaHour = i + 9;
        
        if (agendaHour < Number(now)) {// If the timeblock is before what time it is now, make "past" styling take effect
            //console.log(agendaHour < now)
            $($(".col-10")[i]).addClass("past");
        }
        else if (agendaHour > Number(now)) {// If the timeblock is after what time it is now, make "future" styling take effect
            //console.log(agendaHour > now)
            $($(".col-10")[i]).addClass("future");
        }
        else if (agendaHour === Number(now)) {// If the timeblock is what time it is now, make "present" styling take effect
            //console.log(agendaHour === now)
            $($(".col-10")[i]).addClass("present");
        }        
    }
})

for (let i = 0 ; i < 9 ; i++){ // Have the save button store the appropriate user input to the proper key(timeblock)
    $('.row')[i].children[2].children[0].addEventListener('click', function(){//
        var userInputOrigin = $('.row')[i].children[1].children[0].value;
        console.log(userInputOrigin + " is the userInputOrigin")
        var keyStorage = i + 9; // add to time if I need a refernce "UTC/GMT -5 hours"       
        localStorage.setItem( keyStorage, userInputOrigin);//Store the user input into local storage
    })
}

function stored() {
    var storedTextInput = JSON.parse(localStorage.getItem( keyStorage, userInputOrigin));
    console.log(storedTextInput + " is the storedTextInput")
    if (storedTextInput !== null) {
        textInput = storedTextInput;
    }
}

// When form is submitted...
todoForm.addEventListener("click", function(event) {
    event.preventDefault();
  
    textInput = userTextInput.value.trim();
    console.log("The textInput is " + textInput)
  
    // Return from function early if submitted todoText is blank
    if (textInput === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    textInput.push(storedTextInput);
    storedTextInput.value = "";

    stored();//repeat for each event added to Day Planner
});