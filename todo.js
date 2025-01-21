const container = document.querySelector('.root')

function makeTodo(event){
    event.preventDefault()
    const text = document.querySelector('.todo').value;
    container.innerHTML =`
        <div>
            <p>${text}</p>
            <button onclick="deleteTodo()" type="button">Delete</button>
            <button onclick="editTodo()" type="button">Edit</button>
        </div>
    `

}