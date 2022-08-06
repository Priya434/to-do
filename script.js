// @ts-check

// global constants
const input = document.querySelector("#input_text");
const addBtn = document.querySelector("#add_btn");
const list = document.querySelector("#list");

// event listener
addBtn.addEventListener("click", addItem);
window.addEventListener("keydown", eventCheck);

// function for event listener
function eventCheck(event) {
    if (event.type = "keydown") {
        if (event.key === "Enter") addItem();
    }
}

// function to check if input is empty
function addItem() {
    const inputTxt = document.querySelector("#input_text");

    if (inputTxt.value !== "") addListItem(inputTxt.value);

    inputTxt.value = "";
    inputTxt.focus();
}

// function to add list item
function addListItem(text) {
    const listItem = document.createElement("li");
    const listItemTxt = document.createTextNode(text);
    listItem.appendChild(listItemTxt);

    const list = document.querySelector("#list");
    list.appendChild(listItem);
}

// on opening window
window.onload = () => {
    const inputTxt = document.querySelector("#input_text");
    // inputTxt.focus();
};