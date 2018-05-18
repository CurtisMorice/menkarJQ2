$( document ).ready( readyNow );

class Item{
    constructor( color, name, size ){
        this.color = color;
        this.name = name;
        this.size = size;
    } // end constructor
} // end Item class

let items = [];

function readyNow(){
    // handle a click event on our "addItemButton"
    // target the button by ID
    $( '#addItemButton' ).on( 'click', addItem );
    $( document ).on( 'click', 'li', liClick );
    showItems();
} // end readyNow

function addItem(){
    console.log( 'in addItem' );
    // get user input
    // create a new item
    let newItem = new Item( $( '#colorIn' ).val(), $( '#nameIn' ).val(), $( '#sizeIn' ).val() );
    // push into an array
    items.push( newItem );
    showItems();
    // log out
    console.log( items );
} // end addItem

function liClick(){
    console.log( 'in liClick', $( this ).text() );
} // liClick

function showItems(){
    // target output list by id & save it
    let el = $( '#itemsOut' );
    // empty out current list
    el.empty();
    // loop through items array
    for ( item of items){
        // display each on DOM
        let outputString = '<li>';
        outputString += item.size;
        outputString += ' ';
        outputString += item.color;
        outputString += ' ';
        outputString += item.name;
        outputString += '</li>';
        el.append( outputString );
    } // end for
} //end showItems