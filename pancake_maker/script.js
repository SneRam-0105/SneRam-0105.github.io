const pancakeTypeElement = document.getElementById('type');
const nutsCheckboxElement = document.getElementById('nuts');
const bananasCheckboxElement = document.getElementById('bananas');
const syrupCheckboxElement = document.getElementById('syrup');
const whippedCreamCheckboxElement = document.getElementById('whippedCream');
const iceCreamCheckboxElement = document.getElementById('iceCream');
const customerNameElement = document.getElementById('fname');
const eatIn = document.getElementById('EatIN');
const pickUp = document.getElementById('Pick Up');
const delivery = document.getElementById('Delivery');
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let button = document.getElementById("Confirmbutton")


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let orderDetailsElement = document.getElementById('oderDetails')

// Calculates totalPrice based on User inputs and returns total price
function computePrice() {


    let totalPrice = 0;
    totalPrice += parseInt(pancakeTypeElement.value);
    if
        (nutsCheckboxElement.checked) {
        totalPrice++
    }
    if (bananasCheckboxElement.checked) {
        totalPrice++
    }
    if (syrupCheckboxElement.checked) {
        totalPrice++
    }
    if (whippedCreamCheckboxElement.checked) {
        totalPrice += 2
    }
    if (iceCreamCheckboxElement.checked) {
        totalPrice += 3
    }
    if (delivery.checked) {
        totalPrice += 5
    }
    // console.log(totalPrice)
    return totalPrice;
}

//  It iterates through all the elements with id=totalPrice and updates inner html with totalPrice
function updateTotalPrice() {
    let price = computePrice()

    const totalPriceElements = document.querySelectorAll("[id='totalPrice']")

    totalPriceElements.forEach((element) => {

        element.innerHTML = `$${price}`;

    });
}
updateTotalPrice();

// Adding event listeners to html input elements 
pancakeTypeElement.addEventListener('change', updateTotalPrice)
nutsCheckboxElement.addEventListener('change', updateTotalPrice)
bananasCheckboxElement.addEventListener('change', updateTotalPrice)
syrupCheckboxElement.addEventListener('change', updateTotalPrice)
whippedCreamCheckboxElement.addEventListener('change', updateTotalPrice)
iceCreamCheckboxElement.addEventListener('change', updateTotalPrice)
delivery.addEventListener('change', updateTotalPrice)



// When the user clicks the button, open the modal 
btn.onclick = function () {


    modal.style.display = "block";

    let customerName = `Customer Name: ${customerNameElement.value}<br/>`
    if (customerNameElement.value === '') {
        customerName = ``;
    }
    let pancakeDetails = `Pancake Type is :`
    if (pancakeTypeElement.value == "5") {
        pancakeDetails = pancakeDetails + 'classic'

    }
    if (pancakeTypeElement.value == "6") {
        pancakeDetails = pancakeDetails + 'Chocolate'

    }
    if (pancakeTypeElement.value == "7") {
        pancakeDetails = pancakeDetails + 'Blueberry'

    }
    // Method 2 using Array.join()

    let toppingElements = []
    let toppingDetails = ``;

    if (nutsCheckboxElement.checked) {
        toppingElements.push('Nuts')
    }
    if (bananasCheckboxElement.checked) {
        toppingElements.push('Bananas')
    }
    if (syrupCheckboxElement.checked) {
        toppingElements.push('Syrup')
    }
    if (whippedCreamCheckboxElement.checked) {
        toppingElements.push('Cream')
    }
    if (iceCreamCheckboxElement.checked) {
        toppingElements.push('iceCream')
    }
    if (toppingElements.length != 0) {
        toppingDetails = `Toppings and Extras : ${toppingElements.join(', ')} <br />`
    }

    let options = `I would like to :`
    if (eatIn.checked) {
        options += 'Eat-In'
    }
    if (pickUp.checked) {
        options += 'Pick-Up'
    }
    if (delivery.checked) {
        options += 'Delivery'
    }
    console.log(computePrice())
    orderDetailsElement.innerHTML = `${customerName}${pancakeDetails}<br />${toppingDetails}${options}`


    // To do: create a class and a variable to push the order details to a new array and create a button back to order to edit the order.

    //Stores Orders in an Array:
    let items = [customerName,
        pancakeDetails,
        toppingDetails,
        options,

    ]
    console.log(items)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

button.onclick = function () {
    modal.style.display = "none";
    alert("Yoour order is confirmed");
}

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

goBackBtn.onclick = function () {
    modal.style.display = "none";

}



