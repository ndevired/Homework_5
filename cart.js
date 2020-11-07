var selectedArr = JSON.parse(localStorage.getItem('productsitems'));
// console.log("check" + selectedArr)
var subtotal = 0;
var total = 0;

var idArr=[]
//access object in local storage
if (selectedArr != null){
    for (let i=0; i<selectedArr.length; i++){
        // console.log(selectedArr)
        // console.log(selectedArr[i])
        loadProducts(i);
        
    }
}

function loadProducts(index){

    var middleSectionCart = document.createElement('div');
    middleSectionCart.setAttribute('class', 'middle-section-cart');

    var imageCart = document.createElement('div');
    imageCart.setAttribute('class', 'image-cart');

    var productImages = document.createElement('img');
    productImages.setAttribute('class', 'product-images');
    productImages.setAttribute('src','caramel-pecan.png');

    var cartDetails = document.createElement('div');
    cartDetails.setAttribute('class', 'cart-details');

    var middleSectionCart1 = document.createElement('div');
    middleSectionCart1.setAttribute('class', 'middle-section-cart-1');

    var caramelPecanCartTitle = document.createElement('h2');
    caramelPecanCartTitle.setAttribute('class', 'caramel-pecan-cart-title');
    caramelPecanCartTitle.innerHTML = "Caramel Pecan";

    var xButton = document.createElement('button');
    xButton.setAttribute('class', 'x-button');
    xButton.setAttribute("id", index)
    xButton.innerHTML = "x";

    var priceQuantityDiv = document.createElement('div');

    var priceQuantityClassPrice = document.createElement('p');
    priceQuantityClassPrice.setAttribute('class', 'price-quantity-class');
    priceQuantityClassPrice.innerHTML = "$" + (6.50 * selectedArr[index].quantity);
    subtotal += 6.5*selectedArr[index].quantity;
    // console.log(subtotal)
    // console.log("quantity is " + selectedArr[index].quantity)

    var quantityGlazeOrganizationOne = document.createElement('div');
    quantityGlazeOrganizationOne.setAttribute('class', 'quantity-glaze-organization');

    var quantityGlazeOrganizationsub = document.createElement('div');

    var priceQuantityClassQuantity = document.createElement('p');
    priceQuantityClassQuantity.setAttribute('class', 'price-quantity-class');
    priceQuantityClassQuantity.innerHTML = "Quantity";

    var cartButtonsOrganizationQuant = document.createElement('div');
    cartButtonsOrganizationQuant.setAttribute('class', 'cart-buttons-organization');

    var minusButton = document.createElement('div');

    var minusCartButtons= document.createElement('button');
    minusCartButtons.setAttribute('class', 'cart-buttons');
    minusCartButtons.innerHTML = "-";

    var one = document.createElement('div');
    // console.log(selectedArr[index])
    one.innerHTML = selectedArr[index].quantity;

    var addButton = document.createElement('div');

    var addCartButtons= document.createElement('button');
    addCartButtons.setAttribute('class', 'cart-buttons');
    addCartButtons.innerHTML = "+";

    var quantityGlazeOrganizationTwo= document.createElement('div');
    quantityGlazeOrganizationTwo.setAttribute('class', 'quantity-glaze-organization');

    var priceQuantityClassTitle= document.createElement('div');

    var priceQuantityClassGlaze = document.createElement('p');
    priceQuantityClassGlaze.setAttribute('class', 'price-quantity-class');
    priceQuantityClassGlaze.innerHTML = "Glaze";

    var cartButtonsOrganizationGlaze = document.createElement('div');
    cartButtonsOrganizationGlaze.setAttribute('class', 'cart-buttons-organization');

    var lessButton = document.createElement('div');

    var lessCartButtons = document.createElement('button');
    lessCartButtons.setAttribute('class', 'cart-buttons');
    lessCartButtons.innerHTML = "&lt;";

    var nameButton = document.createElement('div');
    nameButton.innerHTML = selectedArr[index].glaze;

    var moreButton = document.createElement('div');

    var moreCartButtons = document.createElement('button');
    moreCartButtons.setAttribute('class', 'cart-buttons');
    moreCartButtons.innerHTML = "&gt;";

    // Add cart images
    imageCart.appendChild(productImages)
    middleSectionCart.appendChild(imageCart)

    // Add title and x button
    middleSectionCart1.appendChild(caramelPecanCartTitle)
    middleSectionCart1.appendChild(xButton)
    cartDetails.appendChild(middleSectionCart1)

    //Add price
    priceQuantityDiv.appendChild(priceQuantityClassPrice)
    cartDetails.appendChild(priceQuantityDiv)

    //Add Quantity
    quantityGlazeOrganizationsub.appendChild(priceQuantityClassQuantity)
    quantityGlazeOrganizationOne.appendChild(quantityGlazeOrganizationsub)

    minusButton.appendChild(minusCartButtons)
    cartButtonsOrganizationQuant.appendChild(minusButton)
    cartButtonsOrganizationQuant.appendChild(one)
    addButton.appendChild(addCartButtons)
    cartButtonsOrganizationQuant.appendChild(addButton)
    quantityGlazeOrganizationOne.appendChild(cartButtonsOrganizationQuant)
    cartDetails.appendChild(quantityGlazeOrganizationOne)

    priceQuantityClassTitle.appendChild(priceQuantityClassGlaze)
    quantityGlazeOrganizationTwo.appendChild(priceQuantityClassTitle)
    
    
    lessButton.appendChild(lessCartButtons)
    cartButtonsOrganizationGlaze.appendChild(lessButton)
    cartButtonsOrganizationGlaze.appendChild(nameButton)

    moreButton.appendChild(moreCartButtons)
    cartButtonsOrganizationGlaze.appendChild(moreButton)
    quantityGlazeOrganizationTwo.appendChild(cartButtonsOrganizationGlaze)
    cartDetails.appendChild(quantityGlazeOrganizationTwo)

    // Add cart details
    middleSectionCart.appendChild(cartDetails)

    document.getElementById("cart-products").appendChild(middleSectionCart)
}

total = subtotal+3.00
document.getElementById("subtotal").innerHTML= "$" + subtotal
document.getElementById("total").innerHTML= "$" + total

var removeListItems=document.getElementsByClassName("x-button");
for (let i=0; i<removeListItems.length; i++){
    removeListItems[i].addEventListener("click", function(){ 
        var currentId=removeListItems[i].id;
        selectedArr.splice(i,1);
        localStorage.setItem('productsitems',JSON.stringify(selectedArr));

        location.reload()
     });
}



















