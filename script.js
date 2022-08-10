// @ts-check

// global constants
const addBtn = document.querySelector("#add_btn");
const resetBtn = document.querySelector("#reset_btn");
const list = document.querySelector("#list");

// global variables
let data = [];

// event listener
addBtn.addEventListener("click", inputCheck);
resetBtn.addEventListener("click", resetList);
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
    data.push(text);
    localStorage.setItem("to-do", data.join(" | "));

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

    console.log(listItem.textContent.slice(0, -6));
    const liLocalStorage = data.indexOf(listItem.textContent.slice(0, -6));
    data.splice(liLocalStorage, 1);
    localStorage.setItem("to-do", data.join(" | "));

    if (btn.classList.contains("remove-li")) {
        listItem.remove();
    }
}

// reset list
function resetList() {
    list.textContent = "";

    localStorage.clear();
    data = [];
}

// load list on site load
function loadList() {

    for (let i = 0; i < data.length; i++) {
        const listItem = document.createElement("li");

        const listItemTxt = document.createTextNode(data[i]);
        listItem.appendChild(listItemTxt);

        const listItemBtn = document.createElement("button");
        listItemBtn.setAttribute("type", "button");
        listItemBtn.setAttribute("class", "remove-li");

        const listItemBtnTxt = document.createTextNode("Remove");
        listItemBtn.appendChild(listItemBtnTxt);

        listItem.appendChild(listItemBtn);

        list.appendChild(listItem);
    }
}

// load window

window.onload = () => {
    const inputTxt = document.querySelector("#input_text");
    // inputTxt.focus();
    loadList();
};
