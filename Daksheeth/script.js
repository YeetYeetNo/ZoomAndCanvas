

function save() {
    var item = document.getElementById("inputText");
    localStorage.setItem("storedItem", item.value);
    var storedItem = localStorage.getItem("storedItem");
   console.log(storedItem);
}

function load() {
    var storedItem = localStorage.getItem("storedItem");
    alert(storedItem);
}