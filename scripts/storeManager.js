

function saveArr(item, key) {
    let itemsArr = readItems();
    itemsArr.push(item);
    let val = JSON.stringify(itemsArr);

    localStorage.setItem(key, val);
}

function readItems(key) {
    let data = localStorage.getItem(key);

    if (!data) { //not Data?
        return []; //create the  array
    }
    else {
        //if we have data
        let list = JSON.parse(data) // parse the data back
        return list;
    }
}