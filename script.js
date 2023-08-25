let input = document.querySelector('input');
let addButton = document.querySelector('#add');
let todobox2 = document.querySelector(".todoBox2");
let deletebtn = document.querySelector(".Delete");
let myBox = document.querySelectorAll(".box1 button");


addButton.addEventListener("click", function(){
    let box1 = document.createElement("div");
    box1.classList.add("box1");
    box1.classList.add("font");
    console.log("hello");
    todobox2.appendChild(box1);

    let item = document.createElement("div");
    item.classList.add("item");
    item.classList.add("font");
    item.innerText = input.value;
    box1.appendChild(item);

    let Dbtn = document.createElement("button");
    Dbtn.classList.add("Delete");
    Dbtn.classList.add("font");
    Dbtn.innerText = "Delete";
    box1.appendChild(Dbtn); 

    input.value = "";
});

todobox2.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON") {
      let deleted = event.target.parentElement;
      deleted.remove();
  } 
  console.log(event);
});
