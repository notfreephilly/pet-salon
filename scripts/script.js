// function displayFooterInfo() {
//     document.getElementById('info').innerHTML = `
//     <p>Welcome to ${salon.name}. Happy to have you</p>`
// }
// displayFooterInfo();



var globalVariable = "I'm in a global scope";

function myFunction() {
    // This function can access globalVariable
    console.log(globalVariable);
}
myFunction();


function myFunction2() {
    var localVariable = "I'm in a local scope";
    console.log(localVariable);

    if (true) {
        let blockVariable = "I'm in a block scope";
        console.log(blockVariable);
    }
}
// Accessing blockVariable here would result in an error
myFunction2();


function planeTicket(destination, price) {
    console.log("Traveling to " + destination);
    return price * 1.11;
}


function calculateProfits() {
    var price1 = planeTicket("Hawaii", 550);
    var price2 = planeTicket("Argentina", 1200);
    var price3 = planeTicket("Germany", 800);
    
    console.log(price1 + price2 + price3);
}
calculateProfits();



