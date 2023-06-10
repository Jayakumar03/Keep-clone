let id = 0;
let tempArray
let storageArray = []
let index = 0;

const title = document.getElementById("title")
const note = document.getElementById("note")
const addButton = document.getElementById("add-btn")
let taskSection = document.getElementsByClassName("section")




// Event Listener

addButton.addEventListener("click", addTask)



/* function */

function addTask(e){
    e.preventDefault();

    if(title.value == "" && note.value == "") alert(`please enter title or task `);
    else{

        storage(title.value, note.value, e )
        generatingTasks()

        title.value = ''
        note.value= ''

    }
   
   
}



function storage(taskTitle = "empty", taskBody = "Please enter an task", e){
    e.preventDefault()

    tempArray = [id,taskTitle,taskBody]
    storageArray = [...storageArray, tempArray]
    id++
    console.table(storageArray)

}


function generatingTasks() {
     
// use beforeUnload option to listen to tab close or window close . At that time mark task index = 0


        let newBody = document.createElement("div")
        newBody.classList.add("body-container")

        let taskTitle = document.createElement("div")
        let textContextTitle = document.createElement("h6")
        textContextTitle.classList.add("title")
        textContextTitle.textContent = storageArray[index][1]

        // appending
        taskTitle.appendChild(textContextTitle)
        newBody.appendChild(taskTitle)



        let taskBody = document.createElement("div")
        let textContextBody = document.createElement("p")
        textContextBody.classList.add("body")
        textContextBody.textContent = storageArray[index][2]

        taskBody.appendChild(textContextBody)
        newBody.appendChild(taskBody)


        let taskOpenBtn = document.createElement("div")
        taskOpenBtn.classList.add("btn")
        let openBtn = document.createElement("button")
        openBtn.classList.add("delete-btn")
        openBtn.textContent = "Open"


        taskOpenBtn.appendChild(openBtn)
        newBody.appendChild(taskOpenBtn)

        let taskDeleteBtn = document.createElement("div")
        taskDeleteBtn.classList.add("btn")
        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete-btn")
        deleteBtn.id =  `${storageArray[index][0]}`
        deleteBtn.textContent = "Delete"

        taskDeleteBtn.appendChild(deleteBtn)
        newBody.appendChild(taskDeleteBtn)


        taskSection[0].appendChild(newBody)

        index++
        
    };