let services = [];


$(document).ready(function () {

    // add hook events
    $('#btnService').click(addService);
});

function Service(description, price) {
    this.description = description;
    this.price = price;
}




function addService() {
    let inputService = $('#txtService').val();
    let inputPrice = $('#txtPrice').val();

    let newService = new Service(inputService, inputPrice);
    services.push(newService);
    saveArr(newService)
    displayItems(services);

}


function displayItems(items) {
    let displayList = $('#services');
    displayList.html("");
    let li;
    
    for (let i = 0; i < items.length; i++){
        let item = items[i];
        li = `<li>${item.description}</li>
        <li>${item.price}</li>
        `
        displayList.append(li);
    }
}
