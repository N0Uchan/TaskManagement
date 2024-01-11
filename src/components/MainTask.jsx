import './MainTask.css';
import TaskList from './TaskList';

export default function MainTask() {
  return (
    <section id="mainTask" className="mainDisplay0" >
      <div>
        <h2>Task Name</h2>
        <h5>Due Date :</h5>
      </div>
      
      <p>Task Description lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>      

      <h3>Tasks</h3>
      <form id="tasksForm">
        <input type="text" placeholder="Task Name..." />
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
      
    </section>
    
  );
}
