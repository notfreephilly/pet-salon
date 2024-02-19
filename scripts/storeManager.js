function saveArr(item) {
    let itemsArr = readItems();
    itemsArr.push(item);
    let val = JSON.stringify(itemsArr);

    localStorage.setItem('services', val);
}

function readItems() {
    let data = localStorage.getItem('services');

    if (!data) {
        return [];
    }
    else {
        let list = JSON.parse(data)
        return list;
    }
}