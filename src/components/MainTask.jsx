import './MainTask.css';
import TaskList from './TaskList';
import EntryPage from './EntryPage';

export default function MainTask({dialogRef , setTasks, pageId , tasks}) {
  const taskIndex = pageId-1;
  

  var pageBody;
  // console.log(tasks[taskIndex].title);
  // console.log('taskIndex:'+taskIndex);

  if(taskIndex>=0){ 
    let date = tasks[taskIndex].date.split('-');
    date = date[2]+'-'+date[1]+'-'+date[0];
    pageBody = <>      
      <div>
        <h2>{tasks[taskIndex].title}</h2>
        <h5>Due Date : { date }</h5>
      </div>
      
      <p>{tasks[taskIndex].descr}</p>      

      <h3>Tasks</h3>
      <form id="tasksForm">
        <input id="taskInput" type="text" placeholder="Task Name..." />
        <button id="addBtn" >Add</button>
      </form>
      <div id="tabBtns" >
          <button id="pendingBtn" className='tabSelectedBtn' >Pending</button>
          <button id="completedBtn" className='tabBtn' >Completed</button>
      </div>
      <ul id="tasksList">
        
        <TaskList id="pendingList" />
        {/* <TaskList id="completedList" /> */}
      </ul>
    </> } 
  else {pageBody = <h3 style={{marginTop:"15dvh" }} >Select a Quest To View Its Details  </h3>}


  return (
    <section id="mainTask" className="mainDisplay0" >
      <EntryPage setTasks={setTasks} ref={dialogRef} /> 
      {pageBody}

      
    </section>
    
  );
}
