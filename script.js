let id = 0;
let tempArray
let storageArray = []
let deletedArray = []
let index = 0;

const title = document.getElementById("title")
const note = document.getElementById("note")
const addButton = document.getElementById("add-btn")
const taskSection = document.getElementsByClassName("section")


/* Event Listener */

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

     /*   set local storage */

     brwStorage(storageArray)



}


function brwStorage(array) {

    localStorage.setItem("array", JSON.stringify(array))
    
}


function generatingTasks() {
     
// use beforeUnload option to listen to tab close or window close . At that time mark task index = 0
 /*

  <!-- <div class="body-container">

                <div >
                    <h6 class="title">
                        Title
                    </h6>
                </div>

                <difv >
                    <p class="body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>

                <div  class="btn " >
                    <button class="open-btn">Open</button>
                </div>

                <div class="btn">
                    <button class="delete-btn" >Delete</button>
                </div>
            </div> -->




*/
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


        // Attaching event handler to delete btn
        const deleteButton = document.getElementsByClassName("delete-btn")

       for (let index = 0; index < deleteButton.length; index++) {
        deleteButton[index].addEventListener("click", deleteTask)
        
       }

    };


    function deleteTask(e) {
        let deleteIndex = e.target.id;
        deletedArray = [...deletedArray, storageArray.splice(deleteIndex, 1)];
        index--

        deleteLocalStorage(deleteIndex )
      
        let parentElement = e.target.parentElement;
        let grandparentElement = parentElement.parentNode;
        // Access the grandparent element and perform operations
      
        // Example: Remove the parent element from the DOM
        grandparentElement.className = "delete-task"
      }


      function deleteLocalStorage(deleteIndex) {

        let array = localStorage.getItem("array")
        console.log(array)
        
      }
