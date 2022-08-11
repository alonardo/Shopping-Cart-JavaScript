function shoppingCart(expr, item, cart = []) {
    let myCart = cart.slice()
    switch (expr){
        case 'add':
            console.log(`Adding ${JSON.stringify(item.desc)}`)
            myCart.push(item)
            return myCart;
            
        case 'removeSingle':
            console.log(`Removing one of ${JSON.stringify(item.desc)}`)
            indexOfItem = myCart.indexOf(item)
            myCart.splice(indexOfItem, 1)
            return myCart;

        case 'removeAllSingle':
            while(myCart.includes(item)){
                console.log(`Removing ${JSON.stringify(item.desc)}`)
                indexOfItem = myCart.indexOf(item)
                myCart.splice(indexOfItem, 1)
            };
            return myCart;

        case 'clearCart':
            console.log('Emptying cart.')
            return myCart = [];
        
        default:
            console.log('Invalid input.')
        }
    }
item = [
    {
        id: 1,
        desc: 'pizza'
    },
    {
        id: 2,
        desc: 'rice'
    },
    {
        id: 3,
        desc: 'bread'
    }
];

// Adding items to cart
tempCart = shoppingCart('add', item[0]);
tempCart = shoppingCart('add', item[1], tempCart);
tempCart = shoppingCart('add', item[1], tempCart);
tempCart = shoppingCart('add', item[1], tempCart);
console.log(tempCart)

// Removing a single item from cart, leaving others if there is more than one
tempCart = shoppingCart('removeSingle', item[1], tempCart);
console.log(tempCart);

// Removing all quantitiy of a single item
tempCart = shoppingCart('removeAllSingle', item[1], tempCart);
console.log(tempCart);

// Removing all items from cart
tempCart = shoppingCart('clearCart', null, tempCart);
console.log(tempCart);

// Testing error handling when given invalid input
tempCart = shoppingCart('testing!', null, tempCart);
console.log(tempCart);


JavaScript function that edits the contents of a cart out of place.