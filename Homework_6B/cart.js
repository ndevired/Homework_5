//getting items from local storage and assigning to the array
var selectedArr = JSON.parse(localStorage.getItem('productsitems'));
//set the subtotal and total to 0
var subtotal = 0;
var total = 0;

//create an array
var idArr=[]
//access object in local storage
if (selectedArr != null){
    //loop through the items in array starting from the first, increasing by 1, for the full length of the array
    for (let i=0; i<selectedArr.length; i++){
        // console.log(selectedArr)
        // console.log(selectedArr[i])
        //call on function
        loadProducts(i);
        
    }
}

//create a function for all of the HTML attributes
function loadProducts(index){
    //Add Middle Section of the cart
    var middleSectionCart = document.createElement('div');
    middleSectionCart.setAttribute('class', 'middle-section-cart');

    //Add the image
    var imageCart = document.createElement('div');
    imageCart.setAttribute('class', 'image-cart');

    //Add the product images
    var productImages = document.createElement('img');
    productImages.setAttribute('class', 'product-images');
    productImages.setAttribute('src','caramel-pecan.png');

    //Add the cart details
    var cartDetails = document.createElement('div');
    cartDetails.setAttribute('class', 'cart-details');

    //add the middle section cart 1
    var middleSectionCart1 = document.createElement('div');
    middleSectionCart1.setAttribute('class', 'middle-section-cart-1');

    //add the caramel pecan cart title
    var caramelPecanCartTitle = document.createElement('h2');
    caramelPecanCartTitle.setAttribute('class', 'caramel-pecan-cart-title');
    caramelPecanCartTitle.innerHTML = "Caramel Pecan";

    //add the x button
    var xButton = document.createElement('button');
    xButton.setAttribute('class', 'x-button');
    xButton.setAttribute("id", index)
    xButton.innerHTML = "x";

    //add the price and quantitiy entire division
    var priceQuantityDiv = document.createElement('div');

    //add the price
    var priceQuantityClassPrice = document.createElement('p');
    priceQuantityClassPrice.setAttribute('class', 'price-quantity-class');
    //update the html
    priceQuantityClassPrice.innerHTML = "$" + (6.50 * selectedArr[index].quantity);
    //update the subtotal
    subtotal += 6.5*selectedArr[index].quantity;
    // console.log(subtotal)
    // console.log("quantity is " + selectedArr[index].quantity)

    //update the first organization of buttons
    var quantityGlazeOrganizationOne = document.createElement('div');
    quantityGlazeOrganizationOne.setAttribute('class', 'quantity-glaze-organization');

    var quantityGlazeOrganizationsub = document.createElement('div');
    
    //update the quanitity
    var priceQuantityClassQuantity = document.createElement('p');
    priceQuantityClassQuantity.setAttribute('class', 'price-quantity-class');
    priceQuantityClassQuantity.innerHTML = "Quantity";
    
    //add the organization fo the quant buttons
    var cartButtonsOrganizationQuant = document.createElement('div');
    cartButtonsOrganizationQuant.setAttribute('class', 'cart-buttons-organization');

    //add the minus button div
    var minusButton = document.createElement('div');

    //add the minus buttom
    var minusCartButtons= document.createElement('button');
    minusCartButtons.setAttribute('class', 'cart-buttons');
    minusCartButtons.innerHTML = "-";

    //add the quant
    var one = document.createElement('div');
    // console.log(selectedArr[index])
    one.innerHTML = selectedArr[index].quantity;
    
    // add the addition button div
    var addButton = document.createElement('div');

    //add the addition button
    var addCartButtons= document.createElement('button');
    addCartButtons.setAttribute('class', 'cart-buttons');
    addCartButtons.innerHTML = "+";

    //add the organization of the second
    var quantityGlazeOrganizationTwo= document.createElement('div');
    quantityGlazeOrganizationTwo.setAttribute('class', 'quantity-glaze-organization');

    //add the price quantity class title
    var priceQuantityClassTitle= document.createElement('div');

    //add the glaze class
    var priceQuantityClassGlaze = document.createElement('p');
    priceQuantityClassGlaze.setAttribute('class', 'price-quantity-class');
    priceQuantityClassGlaze.innerHTML = "Glaze";

    //add the organization
    var cartButtonsOrganizationGlaze = document.createElement('div');
    cartButtonsOrganizationGlaze.setAttribute('class', 'cart-buttons-organization');

    //add the less division for button
    var lessButton = document.createElement('div');

    //add the less division button
    var lessCartButtons = document.createElement('button');
    lessCartButtons.setAttribute('class', 'cart-buttons');
    lessCartButtons.innerHTML = "&lt;";

    //create a button for the name
    var nameButton = document.createElement('div');
    nameButton.innerHTML = selectedArr[index].glaze;

    //create button division for more
    var moreButton = document.createElement('div');

    //create button for more
    var moreCartButtons = document.createElement('button');
    moreCartButtons.setAttribute('class', 'cart-buttons');
    moreCartButtons.innerHTML = "&gt;";

    //Appending all of the children to the parent
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
    
    //Add minus and addition buttons to the parent
    minusButton.appendChild(minusCartButtons)
    cartButtonsOrganizationQuant.appendChild(minusButton)
    cartButtonsOrganizationQuant.appendChild(one)
    addButton.appendChild(addCartButtons)
    cartButtonsOrganizationQuant.appendChild(addButton)
    quantityGlazeOrganizationOne.appendChild(cartButtonsOrganizationQuant)
    cartDetails.appendChild(quantityGlazeOrganizationOne)
    
    //add the price quantity class glaze and title to their parent
    priceQuantityClassTitle.appendChild(priceQuantityClassGlaze)
    quantityGlazeOrganizationTwo.appendChild(priceQuantityClassTitle)
    
    //add less button to the child
    lessButton.appendChild(lessCartButtons)
    cartButtonsOrganizationGlaze.appendChild(lessButton)
    cartButtonsOrganizationGlaze.appendChild(nameButton)

    //add more button to the child
    moreButton.appendChild(moreCartButtons)
    cartButtonsOrganizationGlaze.appendChild(moreButton)
    quantityGlazeOrganizationTwo.appendChild(cartButtonsOrganizationGlaze)
    cartDetails.appendChild(quantityGlazeOrganizationTwo)

    // Add cart details
    middleSectionCart.appendChild(cartDetails)
    //find child to parent appending step
    document.getElementById("cart-products").appendChild(middleSectionCart)
}

//updating the total and the subtotal
total = subtotal+3.00
document.getElementById("subtotal").innerHTML= "$" + subtotal
document.getElementById("total").innerHTML= "$" + total

//for loop to remove items using the x button
var removeListItems=document.getElementsByClassName("x-button");
for (let i=0; i<removeListItems.length; i++){
    removeListItems[i].addEventListener("click", function(){ 
        var currentId=removeListItems[i].id;
        selectedArr.splice(i,1);
        localStorage.setItem('productsitems',JSON.stringify(selectedArr));

        location.reload()
     });
}



















