// Created a function called addingEventListener(). 
// Inside the parent function, the element with id = "button" is grabbed. 
// Grabbed the element that we want to add the event listener to and save a reference to it in the input variable.
// Call addEventListener() on that element to tell JavaScript to listen for the event.
// Pass two arguments to addEventListener(): the name of the event to listen for (in this case, click) and a callback function that will be executed when the event is "heard."

function addingEventListener() {
   
    const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}
