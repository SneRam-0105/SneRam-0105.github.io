
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document
    .querySelector("form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from submitting in the default way
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;


        alert("Thank you for your message, " + name + "!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });



let modal = document.getElementById("myModal");


let carBtn = document.getElementById("carReadMore");
let bchBtn = document.getElementById("bchReadMore");
let gitBtn = document.getElementById("gitReadMore");
let catBtn = document.getElementById("catReadMore");

let modalBody = document.getElementById("modalBody");


let span = document.getElementsByClassName("close")[0];



// When the user clicks the button, open the modal 
carBtn.onclick = function () {
    modal.style.display = "block";
    modalBody.innerHTML = `
    <h2 class="modal-heading">Car Database</h2>
    <p>
    Car task is a website to maintain a database of cars where we can add, search or delete cars from the car database. There is a form for adding cars to the car database with input validations for each field. Once the car is added to the database, it is displayed in a table and stored in local storage in the browser to persist the data between page reloads. A discount is applied on the price if the car is older than 10 years. A car can be deleted from the database using the delete button for each car, the database in the local storage gets updated accordingly. A search functionality is provided to look up cars based on the license plate number.  
    </p >
    <div class="modal-link" >
    <a href="https://sneram-0105.github.io/Car_Task/"
    >Live demo</a>
    </div>`
}

bchBtn.onclick = function () {
    modal.style.display = "block";
    modalBody.innerHTML = `
    <h2 class="modal-heading">Pancake project</h2>
    <p>
    The pancake task is an online food ordering website where you can customize your pancakes with your choices and place orders. The webpage generates a total amount based on selections before placing the order. The order details with the total amount is displayed in a modal. The order can either be confirmed or edited if the customer changes his choices. List of confirmed orders are maintained in an array. 
    </p >
    <div class="modal-link" >
    <a href="https://sneram-0105.github.io/pancake_maker/">Live demo</a>
     </div>`
}

gitBtn.onclick = function () {
    modal.style.display = "block";
    modalBody.innerHTML = `
    <h2 class="modal-heading">Github project</h2>
    <p>
        List of github repositories created during my studies in Business Colege Helsinki. These include smaler projects created during the course and assignments.
        Technologies used include Javascript, HTML, CSS, React, NodeJS and MariaDB. 
    </p >
    <div class="modal-link" >
     <a href="https://github.com/SneRam-0105?tab=repositories">Github link</a>
     </div>`
}

catBtn.onclick = function () {
    modal.style.display = "block";
    modalBody.innerHTML = `
    <h2 class="modal-heading">Cat contacts</h2>
    <p>
        In this task we created a webpage where we fetch user data from the given API work with the response and display them as cards on the webpage. We used cat avatars for each user from another API and displayed them on their cards. 
    </p >
    <div class="modal-link" >
     <a href="https://sneram-0105.github.io/Task_Persons/">Live demo</a>
     </div>`
}




span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



