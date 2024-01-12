import './EntryPage.css';
import { forwardRef , useImperativeHandle, useRef , useState  } from 'react';
let taskCount=1;


const EntryPage = forwardRef(function EntryPage({setTasks},ref) {
  const dialog=useRef();
  const entryTitle = useRef();
  const entryDescr = useRef();
  const entryDate = useRef();
  const errMsg=useRef();
  const errorMsg = <p id="errorMsg" ref={errMsg} className='' ></p>

  useImperativeHandle(ref,()=>({
    show(){
      dialog.current.show();
    }
  }));

  function handleSubmit(event){
    event.preventDefault();
    const title = entryTitle.current.value;
    const descr = entryDescr.current.value;
    const date = entryDate.current.value;
    const tNo = taskCount;
    const task = {tNo,title,descr,date};

    if(title===''){
      errMsg.current.textContent= 'Please enter a Title.'
      errMsg.current.className="vibrate";
      entryTitle.current.className="invalidField";
      setTimeout(()=>{errMsg.current.className=""},200)
      setTimeout(()=>{entryTitle.current.className=""},200)
      console.log(errorMsg)
    }
    else if(descr===''){
      errMsg.current.textContent= 'Please enter a Description.'
      errMsg.current.className="vibrate";
      entryDescr.current.className="invalidField";
      setTimeout(()=>{errMsg.current.className=""},200)
      setTimeout(()=>{entryDescr.current.className=""},200)
    }
    else if(date===''){
      errMsg.current.textContent= 'Please enter a Date.'
      errMsg.current.className="vibrate";
      entryDate.current.className="invalidField";
      setTimeout(()=>{errMsg.current.className=""},200)
      setTimeout(()=>{entryDate.current.className=""},200)      
    }
    else{
    setTasks((prevTask)=>{
      const newTask=[...prevTask, {...task} ] ;
      return newTask;
    });
    taskCount++;
    dialog.current.close();
  }}

  function handleClear(event){
    event.preventDefault();
    entryTitle.current.value='';
    entryDescr.current.value='';
    entryDate.current.value='';
  }

  return (

    <dialog ref={dialog} id="entryPage" >
      <section id="entryForm" className="" >
        <h2>Task Details</h2>

        <input 
          id="entryTitle" ref={entryTitle}
          type="text" 
          placeholder="Add title" 
          required
          />

        <textarea 
        id="entryDescr"  ref={entryDescr}
        type="text" 
        placeholder="Add description" 
        required
        />

        <input 
          id="entryDate"  ref={entryDate}
          type="date" 
          placeholder="Due Date : dd.mm.yyyy"
          required 
          />

        <form id="entryButtons" method="dialog">
            <button type="submit" onClick={handleSubmit} >Save</button>
            <button type="button" onClick={handleClear} >Clear</button>
            <button id="entryCloseBtn" method="dialog">X</button>
        </form>
        {errorMsg}
      </section>
    </dialog>
  );
});

export default EntryPage;