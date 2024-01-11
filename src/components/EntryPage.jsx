import './EntryPage.css';
import { forwardRef , useImperativeHandle, useRef } from 'react';
let taskCount=1;

const EntryPage = forwardRef(function EntryPage({setTasks},ref) {
  const dialog=useRef();
  const entryTitle = useRef();
  const entryDescr = useRef();
  const entryDate = useRef();
  

  useImperativeHandle(ref,()=>({
    show(){
      dialog.current.show();
    }
  }));

  function handleSubmit(){
    const title = entryTitle.current.value;
    const descr = entryDescr.current.value;
    const date = entryDate.current.value;
    const tNo = taskCount;
    const task = {tNo,title,descr,date};
    setTasks((prevTask)=>{
      const newTask=[...prevTask, {...task} ] ;
      return newTask;
    });
    taskCount++;
    dialog.current.close();
  }
  return (

    <dialog ref={dialog} id="entryPage" >
      <section id="entryForm" className="" >
        <h2>Task Details</h2>
        <input 
          id="entryTitle" ref={entryTitle}
          type="text" 
          placeholder="Add title" />
        <textarea 
        id="entryDescr"  ref={entryDescr}
        type="text" 
        placeholder="Add description" />
        <input 
          id="entryDate"  ref={entryDate}
          type="date" 
          placeholder="Due Date : dd.mm.yyyy" />
        <form id="entryButtons" method="dialog">
            <button type="submit" onClick={handleSubmit} >Save</button>
            <button type="button">Clear</button>
            <button id="entryCloseBtn" method="dialog">X</button>
        </form>

      </section>
    </dialog>
  );
});

export default EntryPage;