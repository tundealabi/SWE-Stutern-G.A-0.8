//will add comments soon
let form  = document.getElementById("formElement");
let container = document.querySelector(".item-container");
let clearBtn = document.querySelector(".clear-btn");
let todoInput = document.getElementById("todoInput");

form.addEventListener('submit',addItem);
window.addEventListener('DOMContentLoaded',setupTodoListUI);
clearBtn.addEventListener('click',clearItem);

function addItem(e){
    e.preventDefault();
  let inputValue = todoInput.value;
  const id = new Date().getTime().toString();
  if(inputValue){
    let inputChecked;
    createTodoList(id,inputValue);
    addToLocalStorage(id,inputValue,inputChecked);
  }else{
      alert("please enter an item");
  }
   todoInput.value = "";
}

function setupTodoListUI(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach((item)=>createTodoList(item.id, item.value,item.checked));
    }
}

function createTodoList(id,value,checked){
    const element = document.createElement("article");
    //add class
    element.classList.add("item-list");
     //add id
     const attr = document.createAttribute("data-id");
     const checkedAttr = document.createAttribute("checked");
     attr.value = id;
     element.setAttributeNode(attr);
    element.innerHTML = `<label for= ${value}>
      <input type="checkbox" id=${value} >${value}
      </label>
     <button class="delete-btn">delete item</button>`;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener('click',deleteItem);
    const input = element.querySelector("input");
    const label = element.querySelector("label");
    inputChecked = input.checked;
    input.addEventListener('change',()=>{
        inputChecked = input.checked;
        if(input.checked){
           label.classList.add("strike-through");
           editLocalStorage(id,inputChecked);
        }else{
            label.classList.remove("strike-through");
            editLocalStorage(id,inputChecked);
        }
    })
    if(checked){
        input.setAttributeNode(checkedAttr);
        label.classList.add("strike-through");
    }
container.appendChild(element);
}

function clearItem( ) {
    const items = document.querySelectorAll('.item-list');
    if(items.length > 0){
      items.forEach(item => container.removeChild(item));
    }
    localStorage.removeItem('list');
  }

  function deleteItem(e){
       const element = e.target.parentElement;
       const id = element.dataset.id;
       container.removeChild(element);
       removeFromLocalStorage(id);
  }

  function addToLocalStorage(id,value,checked){
    const todo = {id,value,checked};
    let items = getLocalStorage();
    items.push(todo);
    localStorage.setItem("list",JSON.stringify(items));
    // console.log("added to local storage");
}

function editLocalStorage(id,checked){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.checked = checked;
        }
        return item;
    })
    localStorage.setItem("list",JSON.stringify(items));
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id !== id){
            return item;
        }
    })
    localStorage.setItem("list",JSON.stringify(items));
}

  function getLocalStorage(){
    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
