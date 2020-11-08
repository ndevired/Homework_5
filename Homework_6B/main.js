//get cart quantity from session storage and updated number of items in the cart icon
var totalCartQuantity;

if (sessionStorage.getItem('cartTotals')!= null){
    totalCartQuantity = sessionStorage.getItem('cartTotals');
}
else {
    totalCartQuantity = 0
}

document.getElementById ("update-num").innerHTML = totalCartQuantity;