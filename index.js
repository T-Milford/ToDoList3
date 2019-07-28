// Goals:

// Use DOM manipulation and traversal to dynamically add and 
// remove HTML elements and apply styles.

// App should allow:

// -enter items they need to purchase by entering text and hitting "Return"  
// or clicking "Add item" button
    
// My thought process:
    // 1) use '.submit' method on button class which runs function that:
    //  a) activates preventDefault for button
    //  b) userInput = button input 
    //  c) append properly-classed HTML containing userInput to js container


// -check and uncheck items on the list by clicking the "Check" button
// -permanently remove items from the list

// Use this and event delegation
// and some other useful methods: 

// submit()
// preventDefault() 
// toggleClass() 
// closest()

// and, Tobie thinks,:
// .click()
// .keyPress (see example from lesson)

$(function () {
    $('#js-Shopping-List-Form').submit(event => {
        event.preventDefault();
        console.log('test');
        let userInput = $(this).find(input[name="shopping-list-entry"]);
        console.log(userInput);
        $('containerOfListItems').append(userInput);
    });





});