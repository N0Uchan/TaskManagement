import { useRef } from "react";
import EntryPage from "./components/EntryPage";
import SideBar from "./components/SideBar";
import MainTask from "./components/MainTask";
export default function App() {
  const dialog = useRef();

  function addClick() {
    dialog.current.show();
  }
  return (
    <main id="page">
      

      <SideBar addClick={addClick} />
   

      <MainTask dialogRef={dialog} />

    </main>
  );
}


