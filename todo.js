const container = document.querySelector('.root')
let id = 0

function makeTodo(event){
    event.preventDefault()
    const text = document.querySelector('#todo').value;
    container.innerHTML +=`
        <div id=${id}>
            <p>${text}</p>
            <button onclick="deleteTodo(${id})" type="button">Delete</button>
            <button onclick="editTodo(${id})" type="button">Edit</button>
        </div>
    `
    id++;
    document.querySelector('#todo').value = ' ';
}

function deleteTodo(id){
    const allChildren = container.children
    for(child of allChildren){
        if(child.id == id){
            child.remove()
        }
    }
}