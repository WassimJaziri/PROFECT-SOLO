console.log("a")
var todoInput=document.querySelector(".todo-input"); 
var todoButton=document.querySelector(".todo-button");
var todoList=document.querySelector(".todo-List");
var input=document.getElementById("input")

document.getElementById("b1").addEventListener("click", function(event){event.preventDefault()}); //attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

$(".todo-button").click(addTodo);
$(".todo-List").click(deleteAndCheck);



function addTodo(){
    var para=document.createElement("li")
    var node= document.createTextNode(input.value);
    para.appendChild(node);
    var  element = document.getElementById("list");
   element.appendChild(para);

    // eviter le refraichement 
// var para = document.createElement("div");
//     para.classList.add(" todo ") 
// var input=document.createElement("li")
//     input.innerText=todoInput.value
//     para.classList.add("todo-item"); // ajouter à la class Liste 
//     element.appendChild(para); // ajouter noeud 
}

function deleteAndCheck(){}

