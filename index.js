// Goals:

// Use DOM manipulation and traversal to dynamically add and 
// remove HTML elements and apply styles.

// App should allow:

// DONE enter items they need to purchase by entering text and hitting "Return"  
// or clicking "Add item" button 
    
    // My thought process:
    // 1) use '.submit' method on button class which runs function that:
    //  a) activates preventDefault for button
    //  b) userInput = button input 
    //  c) append properly-classed HTML containing userInput to js container


// 

// -permanently remove items from the list

// Use this and event delegation
// and some other useful methods: 

// submit()
// preventDefault() 
// toggleClass() 
// closest()

// and, Tobie thinks:
// .click()
// .keyPress (see example from lesson)

$(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        let userInput = $(this).find('input[name="shopping-list-entry"]').val();
        console.log(userInput);

        const userInputListItem = `<li>
            <span class="shopping-item">${userInput}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span> 
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
            </div>
        </li>`;

        $('.shopping-list').append(userInputListItem);
    });

        
    // check and uncheck items on the list by clicking the "Check" button
    
    // Outline:
    // 1) Upon .click of li element, .toggleClass .shopping-item__checked 
    // 2) Use .closest to target text of item above button being clicked
    // 3) What about buttons that didn't exist when jQuery was run?


         $('.shopping-item-toggle').click(event => {
            console.log('clicked!'); 
            event.preventDefault();
            // problem: it won't know which button-label to change.  
            // solved: use closest to travel up to the nearest shopping-item.
            $(this).closest('li.shopping-item').toggleClass('shopping-item__checked');
        });
        
    
});
