import React, {useState} from "react"

function ToDoList(){

    const [tasks ,seTasks] = useState(["Eat Dinner" ,"Walikng" , "Watching Movie" ,"Learning React"]);
    const [newTask ,setNewTask] = useState("");

    function handleIpcnge(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        
        if(newTask.trim() !== "") {
            seTasks(t => [...tasks , newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){

        const updatedTasks =tasks.filter((element , i)=> i !== index);
        seTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index > 0){
             const updatedTasks = [...tasks];
             [updatedTasks[index] , updatedTasks[index-1]] = 
             [updatedTasks[index-1] , updatedTasks[index]];  
             
             seTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index+1]] = 
            [updatedTasks[index+1] , updatedTasks[index]];  
            
            seTasks(updatedTasks);
       }
    }

    return(
    <div className="to-do-list">

        <h1>To-Do-List</h1>
        <div>
            <input
            type="text"
            placeholder="Enter a Task..."
            value={newTask}
            onChange={handleIpcnge}/>
        
            <button className="btn-add"
                onClick={addTask}>
                Add 
            </button>
        </div>

        <ol>
            {tasks.map((task , index) => 
            <li key={index}>
                <span className="text">{task}</span>

            <button 
                className="btn-del"
                onClick={() => deleteTask(index)}>
                Delete
            </button>

            <button 
                className="btn-move-up"
                onClick={() => moveTaskUp(index)}>
                ⬆️
            </button>
            <button 
                className="btn-move-down"
                onClick={() => moveTaskDown(index)}>
                ⬇️
            </button>
            </li>   
        )}
        </ol>
    </div>
    );
}

export default ToDoList