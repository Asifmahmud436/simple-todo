const container = document.querySelector('.root')

function generateEpicId(){
    let arbitaryArray = `0123456789qwertyuioplkjhagsdfmznxbcv`
    let beatifulId = ''
    for(let i = 0; i < 13;i++){
        beatifulId += arbitaryArray[Math.floor(Math.random()*26)]
    }
    return 'a' + beatifulId
}

function makeTodo(event){
    event.preventDefault()
    let id = generateEpicId()
    const text = document.querySelector('#todo').value;
    container.innerHTML +=`
        <div id=${id}>
            <p>${text}</p>

            <form onsubmit="editForm(${id},event)" style="display: none;">
                <input type="text" name="newTodo" id=${id} placeholder="edit the todo">
                <input type="submit" value="Save">
            </form>

            <button onclick="deleteTodo(${id})" type="button">Delete</button>
            <button onclick="editTodo(${id})" type="button">Edit</button>
        </div>
    `
    document.querySelector('#todo').value = ' ';
}

function deleteTodo(element){
    const allChildren = container.children
    for(child of allChildren){
        if(child.id == element.id){
            child.remove()
            
        }
    }
}

function editTodo(element){
    const allChildren = container.children
    for(child of allChildren){
        if(child.id == element.id){
            child.children[1].style.display = 'block'
        }
    }
}

function editForm(element,event){
    event.preventDefault()
    const allChildren = container.children
    for(child of allChildren){
        if(child.id == element.id){
            child.children[0].innerText = child.children[1][0].value
            child.children[1].style.display = 'none'
        }
    }
}