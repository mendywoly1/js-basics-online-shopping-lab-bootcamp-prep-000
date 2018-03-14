/* v ar cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
<<<<<<< HEAD
 // write your code here
   var atcao = new Object();
  atcao.itemName = `${item}`,
  atcao.itemPrice = Math.floor((Math.random() * 100) + 1);
  cart.push(atcao)
  return  `${item} has been added to your cart.`
=======
  var atcao = new Object();
  atcao.itemName = `${item}`,
  atcao.itemPrice = "20"
  cart.push(atcao)

>>>>>>> 6e8854def8e911fe1b678160af001026cf4ecc2e
}

function viewCart() {
  // write your code here
<<<<<<< HEAD
  if(cart.length  === 0){
    return "Your shopping cart is empty."
  }

   if(cart.length === 1){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice} and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }else if(cart.length > 2) {
    var text = "In your cart, you have "
    for (var i = 0; i < getCart().length; i++) {
      if (i === getCart().length - 1) {
        text = text + `and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
      }else if (i === getCart().length - 2) {
        text = text + `${getCart()[i].itemName} at $${getCart()[i].itemPrice} `
      } else {
        text = text + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
      }
    }
    return text
  }
=======
>>>>>>> 6e8854def8e911fe1b678160af001026cf4ecc2e
}

function total() {
  // write your code here
<<<<<<< HEAD
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total = total +cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (getCart()[i].itemName === item) {
    var removed = cart.splice(i , 1)
    return getCart()
  }else if(getCart()[i].itemName !== item) {
    console.log("im a ashnneb")
  }
  }
=======
}

function removeFromCart(item) {
  // write your code here
>>>>>>> 6e8854def8e911fe1b678160af001026cf4ecc2e
}

function placeOrder(cardNumber) {
  // write your code here
}

<<<<<<< HEAD
addToCart("vanilla");
addToCart("watermelon");
addToCart("yams");





console.log(`this isi your ${total()}`);
=======
 addToCart("cheese")
 console.log(cart)

*/
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
   var atcao = new Object();
  atcao.itemName = `${item}`,
  atcao.itemPrice = Math.floor((Math.random() * 100) + 1);
  cart.push(atcao)
  return  `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length  === 0){
    return "Your shopping cart is empty."
  }

   if(cart.length === 1){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice} and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }else if(cart.length > 2) {
    var text = "In your cart, you have "
<<<<<<< HEAD
    for (var i = 0; i < getCart().length; i++) {
      if (i === getCart().length - 1) {
        text = text + `and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
      }else if (i === getCart().length - 2) {
        text = text + `${getCart()[i].itemName} at $${getCart()[i].itemPrice} `
      } else {
        text = text + `${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `
=======
    for (var i = 0; i < cart.length; i++) {
      if (i = 0) {
          text = text + `${cart[i].itemName} at $${cart[i].itemPrice},`
      } else {
        text = text + `${cart[i].itemName} at $${cart[i].itemPrice},`
>>>>>>> 6e8854def8e911fe1b678160af001026cf4ecc2e
      }
    }
    return text
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total = total +cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (getCart()[i].itemName === item) {
    var removed = cart.splice(i , 1)
    return getCart()
  }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  var temptotal = total()
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }else{
    cart = []
    return `Your total cost is $${temptotal}, which will be charged to the card ${cardNumber}.`
  }
}
addToCart("Apples")
addToCart("Oranges")

console.log(cart);
