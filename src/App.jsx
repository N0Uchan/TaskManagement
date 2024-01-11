import { useRef , useState } from "react";
import EntryPage from "./components/EntryPage";
import SideBar from "./components/SideBar";
import MainTask from "./components/MainTask";
export default function App() {
  const dialog = useRef();
  const [tasks, setTasks] = useState([]);
  const [pageId, setPageId] = useState(null);

  function addClick() {
    dialog.current.show();
  }

  function setPage(id) {
    setPageId(id);
  }

  return (
    <main id="page">
      
      <SideBar setPageid={setPage} tasks={tasks} addClick={addClick} />   

      <MainTask setTasks={setTasks} dialogRef={dialog} pageId={pageId} tasks={tasks} />

      {/* <button onClick={()=>{console.log(tasks,'page:'+pageId)}}>console</button> */}
    </main>
  );
}


