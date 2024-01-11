import './EntryPage.css';
import { forwardRef , useImperativeHandle, useRef  } from 'react';

const EntryPage = forwardRef(function EntryPage({},ref) {

  const dialog=useRef();

  useImperativeHandle(ref,()=>({
    show(){
      dialog.current.show();
    }
  }));

  return (

    <dialog ref={dialog} id="entryPage" >
      <section id="entryForm" className="" >
        <h2>Task Details</h2>
        <input id="entryTitle" type="text" placeholder="Add title" />
        <textarea id="entryDescr" type="text" placeholder="Add description" />
        <input id="entryDate" type="date" placeholder="Due Date : dd.mm.yyyy" />
        <form id="entryButtons" method="dialog">
            <button type="submit">Save</button>
            <button type="button">Clear</button>
            <button id="entryCloseBtn" method="dialog">X</button>
        </form>

      </section>
    </dialog>
  );
});

export default EntryPage;