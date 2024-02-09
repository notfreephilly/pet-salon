// Initializing the salon object
let salon = {
    name: "Furry Cutz",
    phone: "123-234-3423",
    address: {
        street: "Woof Paw Rd",
        number: "393",
        zip: "40282",
    },
    pets: [] 
}

// constructor

function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}



function getE(id) {
    return document.getElementById(id);
}



// get elements 
let inputName = getE('txtName');
let inputAge = getE('txtAge');
let inputGender = getE('txtGender');
let inputBreed = getE('txtBreed');
let inputService = getE('txtService');
let inputType = getE('txtType');

function register() {
    let newPet = new Pet(
        inputName.value,
        inputAge.value,
        inputGender.value,
        inputBreed.value,
        inputService.value,
        inputType.value
        )
    salon.pets.push(newPet);
    
    displayPetCards();
        
        // clear the input

        
}
    

// OTHER FUNCTIONS
    
    
    function init() {
            let pet1 = new Pet("Bruce", 6, "Male");
            let pet2 = new Pet("Charley", 12, "Female");
            let pet3 = new Pet("Shelly", 2, "Male");
        
        salon.pets.push(pet3, pet4, pet5, pet6)
        displayPetCards();
}
        
