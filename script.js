// @ts-check

// global constants
const addBtn = document.querySelector("#add_btn");
const list = document.querySelector("#list");

// event listener
addBtn.addEventListener("click", inputCheck);
window.addEventListener("keydown", eventCheck);
list.addEventListener("click", removeListItem);

// check event listener type
function eventCheck(event) {
    if (event.type = "keydown") {
        if (event.key === "Enter") inputCheck();
    }
}

// check if input is empty
function inputCheck() {
    const inputTxt = document.querySelector("#input_text");

    if (inputTxt.value !== "") addListItem(inputTxt.value);

    inputTxt.value = "";
    inputTxt.focus();
}

// add list item
function addListItem(text) {
    const listItem = document.createElement("li");

    const listItemTxt = document.createTextNode(text);
    listItem.appendChild(listItemTxt);

    const listItemBtn = document.createElement("button");
    listItemBtn.setAttribute("type", "button");
    listItemBtn.setAttribute("class", "remove-li");

    const listItemBtnTxt = document.createTextNode("Remove");
    listItemBtn.appendChild(listItemBtnTxt);

    listItem.appendChild(listItemBtn);

    list.appendChild(listItem);
}

// remove list item
function removeListItem(event) {
    const btn = event.target;
    const listItem = event.target.parentElement;

    if (btn.classList.contains("remove-li")) {
        listItem.remove();
    }
}

// load window
/*
window.onload = () => {
    const inputTxt = document.querySelector("#input_text");
    inputTxt.focus();
};
*/