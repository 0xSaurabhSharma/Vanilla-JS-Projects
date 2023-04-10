// set initial count
let count = 0;

// we can either set eventListners to each btn or collectively to all and loop over with foreach
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // here btns is a nodelist,

console.log(btns);
// NodeList(): something like an array. Can loop over it.
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // is btn here an even object ??
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#063251";
    }
    value.textContent = count;
  });
});

// what is forEach
// what is "callbackfun" and thisArg in forEach
// what is nodeList
// what is btn in forEach fun, how can we add eventListener
// what is "event object" i.e. e and "currentTarget" and "classList"

/*
    ANSWERS FROM GPT:
    In JavaScript, a NodeList is an object that represents a collection of nodes in the DOM (Document Object Model). It is similar to an array, but has a limited set of methods and properties.

The forEach() function is a method that can be called on a NodeList object, which allows you to loop through each element in the NodeList and execute a provided function on each iteration. The function that is provided is known as a callback function, which is a function that is passed as an argument to another function and is called when the first function has completed its execution.

The forEach() method takes two optional parameters: a callback function and a thisArg value. The callback function is called on each iteration of the loop and is passed three arguments: the current element being iterated, the index of the current element, and the NodeList object itself. The thisArg value is used as the value of the this keyword inside the callback function.

An event object is an object that is created by the browser when an event is triggered on an element in the DOM. It contains information about the event, such as the type of event, the target element, and any additional data that is associated with the event.

The current target in the event object refers to the element that the event is currently being processed on. This is different from the target property, which refers to the element that originally triggered the event.

The classList property of an element in the DOM is an object that represents the classes that are applied to the element. It has a set of methods that allow you to add, remove, toggle, and check for the presence of classes on the element. In the context of the current target in the event object, the classList property can be used to manipulate the classes of the element that the event is currently being processed on.
*/
