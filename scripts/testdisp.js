function displayPetNames() {
    getE('pets').innerHTML = "";
    for (let i = 0; i < salon.pets.length; i++) {
        getE('pets').innerHTML += `<p>${salon.pets[i].name}</p>`;
    }
    getE('totalPets').innerHTML = `Total`
}





function displayPetCards() {
    getE('pets').innerHTML = "";
    let card = ""
    for (let i = 0; i < salon.pets.length; i++){
        let pet = salon.pets[i];
        card += `
            <div class="petCard">
                <p>Name: ${pet.name}</p>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Type: ${pet.type}</p>
                <p>Payment Method: ${pet.payment}</p>
            
            </div>
        `;
        console.log(card);
    }
    getE('pets').innerHTML = card;
}



// function displayPetTable() {
    
// }