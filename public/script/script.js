var tasks = [];
tasks.push({
    name: "Meeting 1",
    description: "Meeting 1",
    priority: "low",
    startdate: "2020-01-22",
    duedate: "2020-01-22",
    expiration: "2020-01-22",
    assignperson: "chintan soni",
});
tasks.push({
    name: "Meeting 2",
    description: "Meeting 2",
    priority: "medium",
    startdate: "2020-01-22",
    duedate: "2020-01-22",
    expiration: "2020-01-22",
    assignperson: "ketul soni",
});
tasks.push({
    name: "Meeting 3",
    description: "Meeting",
    priority: "high",
    startdate: "2020-01-22",
    duedate: "2020-01-22",
    expiration: "2020-01-22",
    assignperson: "tirth soni",
});
renderTasks();

function myFunction(e) {
    e.preventDefault();
    let taskId = document.getElementById("task-id").value;
    let newTask = {
        name: document.getElementById("task-name").value,
        description: document.getElementById("task-description").value,
        priority: document.getElementById("task-priority").value,
        startdate: document.getElementById("task-start-date").value,
        duedate: document.getElementById("task-due-date"),
        expiration: document.getElementById("task-expiration").value,
        assignperson: document.getElementById("task-assignerson").value,
    };
    if (taskId != "new") {
        tasks[taskId] = newTask;
    } else {
        tasks.push(newTask);
    }
    closeModal();
    renderTasks();
}

function clearForm() {
    document.getElementById("task-name").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-priority").value = "";
    document.getElementById("task-start-date").value = "";
    document.getElementById("task-due-date").value = "";
    document.getElementById("task-expiration").value = "";
    document.getElementById("task-assignperson").value = "";
    document.getElementById("task-id").value = "new";
}

function openModal(title) {
    let modalTitle = document.getElementById("modal_card_title");
    modalTitle.innerHTML = title;
    let modal = document.getElementById("modal");
    modal.classList.add("show-modal");
}

function closeModal(title) {
    clearForm();
    let element = document.getElementById("modal");
    element.classList.remove("show-modal");
}

function editTask(e) {
    let taskId = e.target.getAttribute("task-id");
    document.getElementById("task-name").value = tasks[taskId].name;
    document.getElementById("task-description").value = tasks[taskId].description;
    document.getElementById("task-priority").value = tasks[taskId].priority;
    document.getElementById("task-start-date").value = tasks[taskId].startdate;
    document.getElementById("task-due-date").value = tasks[taskId].duedate;
    document.getElementById("task-expiration").value = tasks[taskId].expiration;
    document.getElementById("task-assignperson").value =
        tasks[taskId].assignperson;
    document.getElementById("task-id").value = taskId;
    openModal("Edit " + tasks[taskId].name);
}

function removeTask(e) {
    let taskId = e.target.getAttribute("task-id");
    tasks.splice(taskId, 1);
    renderTasks();
}

function getCard(index) {
    let card = document.createElement("div");
    card.classList.add("card");

    let cardText = getCardText(index);
    let cardPriority = getCardPriority(index);
    let cardDescription = getCarddesc(index);
    let cardstartdate = getstartdate(index);
    let cardduedate = getduedate(index);
    let cardenddate = getenddate(index);
    let cardassignperson = getcardassignperson(index);

    let cardActions = getCardActions(index);

    card.appendChild(cardText);
    card.appendChild(cardDescription);
    card.appendChild(cardPriority);
    card.appendChild(cardstartdate);
    card.appendChild(cardduedate);
    card.appendChild(cardenddate);
    card.appendChild(cardassignperson);

    card.appendChild(cardActions);

    return card;
}

function getCardText(index) {
    let cardText = document.createElement("div");
    cardText.classList.add("card_text");
    let textnode = document.createTextNode(tasks[index].name);
    cardText.appendChild(textnode);
    return cardText;
}

function getCarddesc(index) {
    let carddesc = document.createElement("div");
    carddesc.classList.add("card_desc");
    let textnode = document.createTextNode(tasks[index].description);
    carddesc.appendChild(textnode);
    return carddesc;
}

function getstartdate(index) {
    let cardstartdate = document.createElement("div");
    cardstartdate.classList.add("card_startdate");
    let textnode = document.createTextNode(tasks[index].startdate);
    cardstartdate.appendChild(textnode);
    return cardstartdate;
}

function getduedate(index) {
    let cardduedate = document.createElement("div");
    cardduedate.classList.add("card_startdate");
    let textnode = document.createTextNode(tasks[index].duedate);
    cardduedate.appendChild(textnode);
    return cardduedate;
}

function getenddate(index) {
    let cardenddate = document.createElement("div");
    cardenddate.classList.add("card_startdate");
    let textnode = document.createTextNode(tasks[index].expiration);
    cardenddate.appendChild(textnode);
    return cardenddate;
}

function getCardPriority(index) {
    let cardPriority = document.createElement("div");
    cardPriority.classList.add("card_priority");
    let priority = document.createElement("div");
    priority.classList.add("priority");
    priority.classList.add(tasks[index].priority);
    let priorityText = document.createTextNode(tasks[index].priority);
    priority.appendChild(priorityText);
    cardPriority.appendChild(priority);
    return cardPriority;
}

function getcardassignperson(index) {
    let cardassignperson = document.createElement("div");
    cardassignperson.classList.add("cardassignperson");
    let textnode = document.createTextNode(tasks[index].assignperson);
    cardassignperson.appendChild(textnode);
    return cardassignperson;
}

function getCardActions(index) {
    let cardActions = document.createElement("div");
    cardActions.classList.add("card_actions");
    let editButton = document.createElement("button");
    editButton.onclick = editTask;
    editButton.setAttribute("task-id", index);
    editButton.classList.add("button");
    editButton.classList.add("default");
    editButton.classList.add("edit");
    let editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);
    let deleteButton = document.createElement("button");
    deleteButton.onclick = removeTask;
    deleteButton.setAttribute("task-id", index);
    deleteButton.classList.add("button");
    deleteButton.classList.add("danger");
    let deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText);
    cardActions.appendChild(editButton);
    cardActions.appendChild(deleteButton);
    return cardActions;
}

function renderTasks() {
    const listBody = document.getElementById("list-body");
    listBody.innerHTML = "";
    for (const index in tasks) {
        let card = getCard(index);
        listBody.appendChild(card);
    }
}