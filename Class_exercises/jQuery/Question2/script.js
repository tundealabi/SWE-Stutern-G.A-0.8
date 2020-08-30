class TodoClass {
    constructor(){
        //set new instance property
        //if there is a TASKS item in the localStorage, set taskS to equal it else equal an empty array
        this.tasks = JSON.parse(localStorage.getItem("TASKS")) || [];
       //create and immediately run loadTasks method once instance has been created 
     this.loadTasks();
    }
   //Load the Dom
    loadTasks(){
        //add to localStorage
        localStorage.setItem("TASKS", JSON.stringify(this.tasks))
        //loop through the tasks array and call the generateTaskHtml method and return one HTML string
        let tasksHtml = this.tasks.reduce((html,task,index)=>{
            return html += this.generateTaskHtml(task,index)
        }, "");
        $("#taskList").html(tasksHtml);
    }
    //generate the HTML
    generateTaskHtml(task,index){
        return ` <li class="list-group-item checkbox">
        <div class="row">
            <div class="col-md-1 col-xs-1 ol-lg-1 col-sm-1">
                <label><input type="checkbox" id="toggleTaskStatus" onchange="toDo.toggleTaskStatus(${index})"
                ${task.isComplete ? "checked" : ""} ></label>
            </div>
            <!-- text for the checkbox -->
            <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 ${task.isComplete ? "completed" : ""}">
                ${task.task}
            </div>
            <!-- end of text -->
            <!-- delete icon -->
            <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1" onclick="toDo.deleteTask(${index})">
                <i class="fa fa-trash delete"></i>
            </div>
            <!-- end of delete icon -->
        </div>
    </li>`

    }
     //method to call add a new task and empty the input field
    addTaskClick() {
        //call the addTask method and pass the input value to it
        toDo.addTask($("#add-task").val())
        //set the input field empty
        $("#add-task").val("");
    }
    //add new task(object) to the tasks array
    addTask(task) {
        let newTask = {
            //Object short notation
            task,
            isComplete:false
        }
        //add the new object to the tasks array
        this.tasks.push(newTask);
        //load the DOM
        this.loadTasks();
    }
     //check and uncheck checkbox method
    toggleTaskStatus(index){
        //switch the isComplete property
        this.tasks[index].isComplete = !this.tasks[index].isComplete;
        this.loadTasks();
    }
   //delete item method
    deleteTask(index){
        this.alertMsg("Item deleted","warning");
        //remove the item from the tasks array
         this.tasks.splice(index,1);
         //load the DOm
         this.loadTasks();
    }
   //alert method
    alertMsg(msg,type){
        $("h2").after($(
            `<div class="alert alert-${type}" role="alert">
            ${msg}
          </div>`
        ))
        setTimeout(()=>{
            $(".alert").remove();
        },2000)      
    }
}

let toDo;

//wait for the Dom to load completely
$(()=>{
    //instantiate toDo class
    toDo = new TodoClass();
    
    //add event listener on the add button
    $("button").on('click',()=>{
        //validate
    if($("#add-task").val().length > 10){
        //call the method to add the input
        toDo.addTaskClick();
        toDo.alertMsg("Todo input added successfully", "success");
    }else{
        toDo.alertMsg("Your input must be atleast 10 characters long", "danger");
    }
})
    })
