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

    if(cart.length > 2) {
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
console.log(viewCart())