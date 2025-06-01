document.addEventListener("DOMContentLoaded", () => {
    const TextInput = document.querySelector(".input-text")
const AddButton = document.querySelector(".add-button")
const TodoContainer = document.querySelector(".todoList")


let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodo(){
    TodoContainer.innerHTML = ""

    todos.forEach(todo => {
        let list = document.createElement("li")
    list.innerHTML = todo.text
    let btn = document.createElement("button")
    btn.textContent = "Delete"
    btn.addEventListener("click",() => {
        TodoContainer.removeChild(list)
        todos = todos.filter(t => t.id !== todo.id)
        localStorage.setItem("todos",JSON.stringify(todos))
    })
    list.appendChild(btn)

    TodoContainer.appendChild(list)
    }) 
}

function addTodo(){
    let Tinput = TextInput.value.trim()
    if(Tinput === "") return;

    let todo = {
        id: Date.now(),
        text: Tinput,
        completed: false
    }
    todos.push(todo)
    // console.log(todos)

    localStorage.setItem("todos",JSON.stringify(todos))
    TextInput.value = ""
    renderTodo()

    
}

TextInput.addEventListener("keydown",(event) => {
    if(event.key == "Enter"){
        addTodo()
    }
})

AddButton.addEventListener("click", function(){
    addTodo()
})

renderTodo()
})

