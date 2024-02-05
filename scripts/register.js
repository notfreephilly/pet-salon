// Initializing the salon object
let salon = {
    name: "Furry Cutz",
    phone: "123-234-3423",
    address: {
        street: "Woof Paw Rd",
        number: "393",
        zip: "40282"
    },
    pets: [
        {
            name: "Bruce",
            age: 6,
            gender: "Male",
            service: false,
            breed: "Pitbull, mixed"
        },
        {
            name: "Woofy",
            age: 3,
            gender: "Male",
            service: true,
            breed: "French bulldog"
        },
        {
            name: "Charley",
            age: 7,
            gender: "Female",
            service: true,
            breed: "Golden Retriever"
        }
    ] 
}

// When a user clicks this button, it will run the totalPetsRegistered function below

let registeredResultBtn = document.getElementById('woof-btn').addEventListener('click', totalPetsRegistered)

// totalPetsRegistered function is going into the HTML, looking for an element with the ID of 'registered-result' and display the value. In this case, within the template literal is an expression that goes into the salon object and gets the length of the pets array.
// Outputs 3

function totalPetsRegistered() {
    document.getElementById('registered-result').innerHTML = `We have ${salon.pets.length} lovely pets registred with us!`;
}

// This button is listening for a user to click. When the button is clicked, getNamesDisplayBtn will exectute the displayPetNames function

let petNamesDisplayedBtn = document.getElementById('meow-btn').addEventListener('click', displayPetNames);

// Declaring and initializing furryNames 

const furryNames = document.getElementById('name-result');

// This function first initializes the variable names with an empty string
// Then it goes to the pets array and for each element with the key name "name" and returns the value to the furryNames variable. In this case it will display in the element with the ID of "name-result"

function displayPetNames() {
    let names = "";
    salon.pets.forEach(e => 
        names += `<p>${e.name}</p>`
    );
    furryNames.innerHTML = names;
}
