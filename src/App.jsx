import { useRef , useState } from "react";
import EntryPage from "./components/EntryPage";
import SideBar from "./components/SideBar";
import MainTask from "./components/MainTask";
export default function App() {
  const dialog = useRef();
  const [tasks, setTasks] = useState([]);
  const [subTasks, setSubTasks] = useState([[],[],[],[]]);
  const [pageId, setPageId] = useState(null);

  function addClick() {
    dialog.current.open();
  }
  function closeDialog(){
    dialog.current.close();
  }

  function setPage(id) {
    setPageId(id);
  }

  return (
    <main id="page">
      
      <SideBar setPageid={setPage} tasks={tasks} addClick={addClick} closeDialog={closeDialog} />   

      <MainTask 
          subTasks={subTasks} setSubTasks={setSubTasks}
          setTasks={setTasks} tasks={tasks}
          dialogRef={dialog} pageId={pageId}  />

      {/* <button onClick={()=>{console.log(subTasks);}}>console</button> */}
    </main>
  );
}


