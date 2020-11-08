//creating the variables for the id
const quantity1 = document.getElementById("quantity-1");
const quantity3 = document.getElementById("quantity-3");
const quantity6 = document.getElementById("quantity-6");
const quantity12 = document.getElementById("quantity-12");
let currentCount = 0;

//Upon clicking on quantity 1, it will change it white and all others will remain the same color (light purple)
quantity1.onclick = function () {
    console.log("clicked")
    quantity1.style.backgroundColor = "whitesmoke";
    quantity3.style.backgroundColor = "#E0B8DC";
    quantity6.style.backgroundColor = "#E0B8DC";
    quantity12.style.backgroundColor = "#E0B8DC";
    currentCount = 1;

};

//Upon clicking on quantity 3, it will change it white and all others will remain the same color (light purple)
quantity3.onclick = function () {
    console.log("clicked")
    quantity1.style.backgroundColor = "#E0B8DC";
    quantity3.style.backgroundColor = "whitesmoke";
    quantity6.style.backgroundColor = "#E0B8DC";
    quantity12.style.backgroundColor = "#E0B8DC";
    currentCount = 3;

};

//Upon clicking on quantity 6, it will change it white and all others will remain the same color (light purple)
quantity6.onclick = function () {
    console.log("clicked")
    quantity1.style.backgroundColor = "#E0B8DC";
    quantity3.style.backgroundColor = "#E0B8DC";
    quantity6.style.backgroundColor = "whitesmoke";
    quantity12.style.backgroundColor = "#E0B8DC";
    currentCount = 6;

};

//Upon clicking on quantity 12, it will change it white and all others will remain the same color (light purple)
quantity12.onclick = function () {
    console.log("clicked")
    quantity1.style.backgroundColor = "#E0B8DC";
    quantity3.style.backgroundColor = "#E0B8DC";
    quantity6.style.backgroundColor = "#E0B8DC";
    quantity12.style.backgroundColor = "whitesmoke";
    currentCount = 12;

};

//creating the variables for the id
const none = document.getElementById("glaze-none");
const sugar = document.getElementById("glaze-sugar");
const milk = document.getElementById("glaze-milk");
const chocolate = document.getElementById("glaze-chocolate");
var currentGlaze = "none"

//Upon clicking on glaze-none, it will change it white and all others will remain the same color (light purple)
none.onclick = function () {
    console.log("clicked")
    none.style.backgroundColor = "whitesmoke";
    sugar.style.backgroundColor = "#E0B8DC";
    milk.style.backgroundColor = "#E0B8DC";
    chocolate.style.backgroundColor = "#E0B8DC";
    currentGlaze="none"

};

//Upon clicking on glaze-sugar, it will change it white and all others will remain the same color (light purple)
sugar.onclick = function () {
    console.log("clicked")
    none.style.backgroundColor = "#E0B8DC";
    sugar.style.backgroundColor = "whitesmoke";
    milk.style.backgroundColor = "#E0B8DC";
    chocolate.style.backgroundColor = "#E0B8DC";
    currentGlaze="sugar"

};

//Upon clicking on glaze-vanilla, it will change it white and all others will remain the same color (light purple)
milk.onclick = function () {
    console.log("clicked")
    none.style.backgroundColor = "#E0B8DC";
    sugar.style.backgroundColor = "#E0B8DC";
    milk.style.backgroundColor = "whitesmoke";
    chocolate.style.backgroundColor = "#E0B8DC";
    currentGlaze="milk"

};

//Upon clicking on glaze-chocolate, it will change it white and all others will remain the same color (light purple)
chocolate.onclick = function () {
    console.log("clicked")
    none.style.backgroundColor = "#E0B8DC";
    sugar.style.backgroundColor = "#E0B8DC";
    milk.style.backgroundColor = "#E0B8DC";
    chocolate.style.backgroundColor = "whitesmoke";
    currentGlaze="chocolate"
};

//created a new object for a genric cinnamon roll
class Selected{
    constructor(quantity, glaze) {
        this.quantity = quantity
        this.glaze = glaze
    }
}
//creating an array for the selected items to go into to
selectedArr=[]
//check if the local storage is empty, if it not empty then assign the items to the array
 if (localStorage.getItem('productsitems')!= null){
     selectedArr = JSON.parse(localStorage.getItem('productsitems'));
}

//updating the number in the shopping bag icon at the top on the product detail page
let updateNum = document.getElementById("update-num");
let addToCart = document.getElementById("addtocart");
addToCart.onclick = function () {
    // console.log(updateNum.innerHTML);
    bun = new Selected(currentCount, currentGlaze);
    // console.log(bun.glaze);
    selectedArr.push(bun)
    localStorage.setItem('productsitems', JSON.stringify(selectedArr))
    console.log("my local storage " + localStorage.getItem('productsitems'));
    let currentCart = parseInt(updateNum.innerHTML);
    let newCart;

    if (currentCart) {
        newCart = currentCart + currentCount;
        // console.log(newCart, typeof newCart)
    } else {
        newCart = currentCount;
    }
    //updating the number in the cart through innerHTML
    updateNum.innerHTML = newCart;
};







