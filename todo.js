const container = document.querySelector('.root')
let id = 0

function makeTodo(event){
    event.preventDefault()
    const text = document.querySelector('#todo').value;
    container.innerHTML +=`
        <div id=${id}>
            <p>${text}</p>
            
            <form onsubmit="editForm(event)" style="display: none;">
                <input type="text" name="editTodo" id="editTodo" placeholder="edit the todo">
                <input type="submit" value="Save">
            </form>
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

function editTodo(id){
    const allChildren = container.children
    for(child of allChildren){
        if(child.id == id){
            console.log(child.children[2].style.display = 'block')
        }
    }
}