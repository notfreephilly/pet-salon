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

let petId = 0;

function Pet(name, age, gender, breed, service, type, payment) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
    this.payment = payment;
    this.id = petId++;
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
let inputType = getE('optType');
let inputPayment = getE('optPayment');



function itsValid(aPet) {
    let validation = true;

    document.querySelectorAll('input');
    getE('txtName').classList.remove('alert-error');
    getE('txtAge').classList.remove('alert-error');
    
    if (aPet.name == "") {
        // the pet is not valid
        validation = false;
        getE("txtName").classList.add("alert-error");
    }
    if (aPet.age == "") {
        validation = false;
        getE("txtAge").classList.add('alert-error')
    }
    if (aPet.gender == "") {
        validation = false;
        getE("txtGender").classList.add('alert-error')
    }
    if (aPet.breed == "") {
        validation = false;
        getE("txtBreed").classList.add('alert-error')
    }
    if (aPet.type == "") {
        validation = false;
        getE("optType").classList.add('alert-error')
    }
    return validation;
}


function showNotifications(msg, type) {
    getE('notifications').classList.remove('hidden')
    getE('notifications').innerHTML = `<p class="${type}">${msg}</p>`
    
    setTimeout(function () {
        getE('notifications').classList.remove('hidden')
    }, 3000);
}




function register() {

    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputType.value, inputPayment.value);
    // console.log(newPet);
    
    if (itsValid(newPet) == true) {
        salon.pets.push(newPet);
        displayPetCards();
        // clcear input

        inputName.value = "";
        inputAge.value = "";
        inputGender.value = "";
        inputBreed.value = "";
        inputService.value = "";
        inputType.value = "";

        // showNotifications('Successful registration', "alert-error")
    }
    else {
        showNotifications("Oops! Looks like you're missing something. Please check again.", "alert-error");
    }
}
    

// OTHER FUNCTIONS
    

function deletePet() {
    let deleteIndex;
    for (let i = 0; i < salon.pets.length; i++){
        let pet = salon.pets[i];
        if (pet.id == petId) {
            deleteIndex = i;
            break;
        }
    }
    getE(getId).remove();
    salon.pets.splice(deleteIndex, 1);
}
    
    function init() {
        let pet1 = new Pet("Bruce", 6, "Male", "Pitbull", "Dog", "Full Service", "Debit" );
            let pet2 = new Pet("Charley", 12, "Female", "Cow", "Pasture-raised", "Behavior Training", "Credit");
            let pet3 = new Pet("Shelly", 2, "Male");
        
        salon.pets.push(pet1, pet2, pet3)
        displayPetCards();
}
        
window.onload = init;