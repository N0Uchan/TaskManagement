import './MainTask.css';
import TaskList from './TaskList';
import EntryPage from './EntryPage';
import { useRef } from 'react';

export default function MainTask({dialogRef , setTasks, pageId , tasks , subTasks , setSubTasks}) {
  const taskIndex = pageId-1;
  const subTField = useRef();

  var pageBody; var taskList;
  // console.log(tasks[taskIndex].title);
  // console.log('taskIndex:'+taskIndex);
  

  function addSubTask(event){
    event.preventDefault();
    if(subTField.current.value===''){
      subTField.current.className="invalidField";
      setTimeout(()=>{subTField.current.className=""},250)
    }else{
    const subT = subTField.current.value;
    setSubTasks((prev)=>{
      var newTasks= {...prev}
      var innerTasks = newTasks[taskIndex];
      innerTasks  = [...innerTasks, {subT:subT,done:false}];
      newTasks = {...newTasks, [taskIndex]:innerTasks};
      return {...newTasks}
    })
    subTField.current.value='';
  }}


  if(taskIndex>=0){ 
    var date = tasks[taskIndex].date.split('-');
    date = date[2]+'-'+date[1]+'-'+date[0];
    pageBody = <>      
      <div>
        <h2>{tasks[taskIndex].title}</h2>
        <h5>Due Date : { date }</h5>
      </div>
      
      <p id="mainDescr" >{tasks[taskIndex].descr}</p>      

      <h3>Tasks</h3>

      <form id="tasksForm">

        <input ref={ subTField }
          id="taskInput" type="text" placeholder="Task Name..." />

        <button id="addBtn" onClick={addSubTask} >Add</button>

      </form>

      <div id="tabBtns" >
          <button id="pendingBtn" className='tabSelectedBtn' >Pending</button>
          <button id="completedBtn" className='tabBtn' >Completed</button>
      </div>
      <ul id="tasksList">
        
        <TaskList subTasks={subTasks} taskIndex={taskIndex} id="pendingList" />
        {/* <TaskList id="completedList" /> */}
      </ul>
    </> 

  } 
  else {pageBody = <h3 style={{marginTop:"15dvh" }} >Select a Quest To View Its Details  </h3>}


  return (
    <section id="mainTask" className="mainDisplay0" >
      <EntryPage setTasks={setTasks} ref={dialogRef} /> 
      {pageBody}

      
    </section>
    
  );
}
