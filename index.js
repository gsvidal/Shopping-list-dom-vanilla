const list = document.querySelector("ul");
const input = document.querySelector("input");
const buttonAdd = document.querySelector("button");

buttonAdd.addEventListener("click", addItem);

function addItem() {
  const inputVal = input.value;
  if(inputVal != ""){
    input.value = "";
    //Creating 3 new elements
    const listItem = document.createElement("li");
    const spanItem = document.createElement("span");
    const buttonItem = document.createElement("button");

    listItem.appendChild(spanItem);
    listItem.appendChild(buttonItem);
    spanItem.textContent = inputVal;
    buttonItem.textContent = "Delete";

    list.appendChild(listItem);

    buttonItem.setAttribute("class", "button button--delete-item");

    buttonItem.addEventListener("click", removeItem);
    

    function removeItem(element) {
      list.removeChild(listItem);
    }
    input.focus();
  }
}

