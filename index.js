// Goals:

// Use DOM manipulation and traversal to dynamically add and 
// remove HTML elements and apply styles.



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
    
    //DONE Goal #1: enter items they need to purchase by entering text and hitting "Return"  
    // or clicking "Add item" button 
    
    // My thought process:
    // 1) use '.submit' method on button class which runs function that:
    //  a) activates preventDefault for button
    //  b) userInput = button input 
    //  c) append properly-classed HTML containing userInput to js container
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

        
    // Goal 2: check and uncheck items on the list by clicking the "Check" button.  
    
        // Outline:
        // 1) Upon .click of button element, .toggleClass .shopping-item__checked 
        // 2) Use .closest to target text of item above button being clicked
        // 3) What about buttons that didn't exist when jQuery was run?
            //    ex.  (ul).on(‘click’, ‘li’, function{ })
        // 4) 

        $('.shopping-list').on('click', '.shopping-item-toggle', function() {
            event.preventDefault();
            $(event.target).closest("li").find(".shopping-item").toggleClass("shopping-item__checked", 'true');
            // $(event.target).closest("span.shopping-item").toggleClass("shopping-item__checked"); Why 
            //doesn't this work?
            // console.log($(event.target).closest("span.shopping-item")); printing span.button-label?!
        });
         
         
    // Goal 3: permanently remove items from the list
        $('.shopping-list').on('click', '.shopping-item-delete', function() {
            $(event.target).closest("li").remove("li");
        });
    
});
