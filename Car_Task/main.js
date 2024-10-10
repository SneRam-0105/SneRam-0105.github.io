let carList;
const tableContainer = document.getElementById('table-container');
//If no cars are stored in LocalStorage, ensure the application starts with an empty car list without errors.
if (localStorage.getItem("carDatabase") == null) {
    carList = [];
}
else {
    carList = JSON.parse(localStorage.getItem("carDatabase"));
    tableContainer.innerHTML = generateTable(carList);
}
// tableContainer.innerHTML = generateTable(carList); 

class car {
    constructor(licensePlate, maker, model, currentOwner, price, color, carYear, discountedPrice) {
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
        this.carYear = carYear;
        this.discountedPrice = discountedPrice;
    }


    displayCardetails() {
        return `Car Details:
    License Plate : ${this.licensePlate}
    model : ${this.model}
    Maker : ${this.maker}
    currentOwner : ${this.currentOwner}
    price : ${this.price}
    color : ${this.color}
    year: ${this.carYear}
     discountedPrice: ${this.discountedPrice}`;
    }
}
// Delete function to delete a row when the delete button is clicked. It deletes with reference to index of the array which is the carList. 
function deleteCar(index) {
    const confirmation = confirm("Are you sure you want to delete this car?");
    if (!confirmation) {
        return; // Exit if not confirmed
    }
    // Delete the car from the list
    carList.splice(index, 1)
    // Update the table with the new list of cars
    tableContainer.innerHTML = generateTable(carList);

    displayMessage("Car deleted successfully!");
    // After deleting a car, ensure the updated cars array is saved in LocalStorage
    localStorage.setItem('carDatabase', JSON.stringify(carList))
}
//This function is dynamically generated when submit button is clicked. Its called in the next function.

function generateTable(carList) {
    let table = '<table>';
    table += '<tr><th>LicensePlate</th><th>Maker</th><th>Model</th><th>CurrentOwner</th><th>Year</th><th>Color</th><th>Price</th><th></th></tr>';
    carList.forEach((item, index) => {
        let priceHtml;
        if (item.carYear <= 2014) {
            priceHtml = `<td><p class = 'OriginalPrice'>${item.price}</p><p class = 'DiscountedPrice'>${item.discountedPrice}</p></td>`

        }
        else {
            priceHtml = `<td>${item.price}</td>`
        }
        table += `<tr><td>${item.licensePlate}</td><td>${item.maker}</td><td>${item.model}</td><td>${item.currentOwner}</td><td>${item.carYear}</td><td>${item.color}</td>${priceHtml}<td><button onclick= "deleteCar(${index})" id="delete">Delete</button></td></tr>`;
    });
    table += '</table>';
    return table;
}

// Display message function to display a successfull message every time a car is added
const displayMessage = (message, type = "success") => {
    const messageElement = document.querySelector("#message");
    messageElement.textContent = message;
    messageElement.className = type;
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.className = "";
    }, 3000);
};

// This function executes when submit button is clicked
// This function adds new values(car) to the carlist in the table
document.getElementById("carForm").addEventListener("submit", function (event) {
    event.preventDefault(); //this will not allow the form to get submitted in the middle of the funtion

    const licensePlate = document.getElementById("licensePlate").value;
    const maker = document.getElementById("maker").value;
    const model = document.getElementById("model1").value;
    const currentOwner = document.getElementById("currentOwner").value;
    const price = parseInt(document.getElementById("price").value);
    const color = document.getElementById("color").value;
    const carYear = parseInt(document.getElementById("year").value);

    // Error Handling and input validation
    try {
        if (carList.find(car => car.licensePlate == licensePlate)) {
            throw new Error("Car with same licenseplate already exists");
        }

        if (isNaN(carYear) || carYear < 1886 || carYear > 2024) {
            throw new Error("Year must be between 1886 and 2024");
        }

        if (isNaN(price) || price <= 0) {
            throw new Error("Price should be positive amount");
        }



    }

    catch (error) {

        displayMessage(error.message, "error");
        return
    }

    // Using the car class we create new object with the user input details
    const discountedPrice = getDiscountedPrice(carYear, price)
    const mycar = new car(licensePlate, maker, model, currentOwner, price, color, carYear, discountedPrice);


    carList.push(mycar)
    // console.log(carList)
    // to write to local storage 
    localStorage.setItem('carDatabase', JSON.stringify(carList))
    // reset is used to clear the previous form inputs
    document.getElementById('carForm').reset();
    tableContainer.innerHTML = generateTable(carList);
    displayMessage("New car added successfully!");
    console.log(carList);



});

// There should be a new function with year and price as inputs which returns discounted price
function getDiscountedPrice(carYear, price) {
    let discount = 0;
    let discountedPrice = 0;
    if (carYear <= 2014) {
        discount = price / 100 * 15;
        discountedPrice = price - discount;
    }
    else {
        discountedPrice = 'Discount Not Applicable';
    }
    return discountedPrice;
}
// The user can search for a car by license plate and view the details of the found car
function searchcar() {
    const searchElement = document.querySelector("#searchinput").value;
    const searchResult = document.getElementById("Search");
    const car = carList.find(car => car.licensePlate === searchElement);
    if (car) {
        // const discountedPrice = getDiscountedPrice(carYear, price)
        const resultTable = `<table class = "Search">
                <thead>
                    <tr>
                        <th>License Plate</th>
                        <th>Maker</th>
                        <th>Model</th>
                        <th>Owner</th>
                        
                        <th>Color</th>
                        <th>Year</th>
                        <th>Price</th>
                         <th>Discounted Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${car.licensePlate}</td>
                        <td>${car.maker}</td>
                        <td>${car.model}</td>
                        <td>${car.currentOwner}</td>
                      
                        <td>${car.color}</td>
                         <td>${car.carYear}</td>
                           <td>${car.price}</td>
                        <td>${car.discountedPrice}</td>
                    </tr>
                </tbody>
            </table>
        `;

        searchResult.innerHTML = resultTable

    } else {
        searchResult.innerHTML = '<p>No car found with that license plate.</p>';
    }
    document.querySelector("#searchinput").value = '';

}







