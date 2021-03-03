/*task = [];*/
var isItImportant = false;
var detailShow = true;

function toggleDetails(){
    if(detailShow){
        $('#capture').hide();
        detailShow=false;
    }else{
        detailShow= true;
        $('#capture').show();
    }
}

function toggleImportant(){
    console.log("Icon clicked");

    if(!isItImportant){
        $('#iImportant').removeClass('far').addClass('fas');
    isItImportant = true;
    }else{
        isItImportant = false;
        $("#iImportant").removeClass('fas').addClass("far")
    }

}
function saveTask() {
    console.log("Save clicked")


var title=$("#txtTitle").val();
var date=$("#txtDnT").val();
var description=$("#txtDes").val();
var status=$("#selStat").val();
var location=$("#txtLoc").val();
var color=$("#txtColor").val();

var myTask= new Task(0, isItImportant, title, date, description, status, location, color);

console.log(myTask);
// save to server

// diplay task
displayTask(myTask);
}

function displayTask(task) {
    // create the syntax
let syntax = `<div class="mynewTask"> 
            <div class="important-container">
                         
                 <div class="task-container">
                    <h3>${task.title}</h3>
                    <i class="imp-task far fa-star"></i>
                    <p>${task.description}</p>
                 </div>
    
                 <div class="date-icon">
                    <label><b>Due Date:</b><br>
                    ${task.dueDate}</label>
                    <label><b>Location:</b><br>${task.location}</label>
                 </div>
    
                    <button type="button" class=" btnDelete btn btn-danger"><i class="far fa-trash-alt"></i></button>
                    
            </div>
    
            </div>`;
/*var syntax =
`<div>
    <h4>${task.title}</h4>
    <p>${task.description}</p>
    <label>${task.dueDate}</label>
    <i class= "far fa-star"></i> 
    </div>`;*/

//append the syntax to existing html
$('#tasks-list').append(syntax);

}

function init() {
    console.log("Task Manager");
    //event
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
    $('#tasks-list').click(deleteNewTask);
    $("#btnHnS").click(toggleDetails);
}
//mark task as important//



// delete button//
function deleteNewTask(e){
    const item = e.target;
    
    if(item.classList[0] === 'btnDelete'){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0] === 'imp-task'){
        
    item.classList.toggle('fas');
    }
}


window.onload=init;

/*
Task
-Id
-Title
-Date & Time
-Important
-Decription
-Status
-Location
-Color
*/
