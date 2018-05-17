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
    removeFromItems( $( this ).text() );
} // liClick

function removeFromItems( itemToRemove ){
console.log( 'in item to remove:', itemToRemove );

    // loop through items array
    for( let i=0; i<items; i++ ){
        // if itemToRemove matches this item's name
        if( item[i].size + ' ' + item[i].color + ' ' + item[i].name == itemToRemove ){
            // remove this item from array
            items.splice( i, 1 );
            showItems();
            return true;
        }
    }
    return false;
} // end removeFromItems

function showItems(){
    // target output list by id & save it
    let el = $( '#itemsOut' );
    // empty out current list
    el.empty();
    // loop through items array
    for ( item of items){
        // display each on DOM
        el.append( '<li>' + item.size + ' ' + item.color + ' ' + item.name + '</li>' );
    } // end for
} //end showItems