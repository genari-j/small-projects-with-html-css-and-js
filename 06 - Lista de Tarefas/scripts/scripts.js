let taskInput = document.querySelector('#inputTaskValue')
let allTasksContainer = document.querySelector('.allTasksContainer')


function handleAddNewTask() {
    let taskContainer = document.createElement('div')
    taskContainer.classList.add('taskContainer')

    let taskParagraph = document.createElement('p')
    taskParagraph.innerText = taskInput.value

    taskContainer.appendChild(taskParagraph)

    let checkOrDeleteIcons = document.createElement('div')
    checkOrDeleteIcons.classList.add('checkOrDeleteIcons')

    taskContainer.appendChild(checkOrDeleteIcons)

    let faCircleCheck = document.createElement('i')
    faCircleCheck.classList.add('fa-solid')
    faCircleCheck.classList.add('fa-circle-check')
    checkOrDeleteIcons.appendChild(faCircleCheck)

    let faTrash = document.createElement('i')
    faTrash.classList.add('fa-solid')
    faTrash.classList.add('fa-trash')
    checkOrDeleteIcons.appendChild(faTrash)

    faCircleCheck.addEventListener('click', () => handleMarkAsRead(taskParagraph))
    faTrash.addEventListener('click', () => handleDeleteTask(taskContainer))

    allTasksContainer.appendChild(taskContainer)

    taskInput.value = ""
}


function handleMarkAsRead(taskParagraph) {
    let allTasksChildren = allTasksContainer.childNodes

    for (let task of allTasksChildren) {
        if (task.firstChild === taskParagraph) {
            task.firstChild.classList.toggle('completedTask')
        }
    }
}


function handleDeleteTask(taskContainer) {
    taskContainer.remove()
}