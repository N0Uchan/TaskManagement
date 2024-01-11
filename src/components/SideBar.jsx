import './SideBar.css';

export default function SideBar({ addClick , tasks , setPageid }) {



  return (
    <section id="sideBar" >
      <button onClick={addClick} ><strong>+ Quest</strong></button> 
      <h2>Quests</h2>
      <ul>
        {tasks.length>0 ? null : <><p>No Quests Yet :( </p><br/> Click +Quest to add.</> }
        { tasks.map((task)=>{
          return <li onClick={()=>setPageid(task.tNo)} key={task.tNo} >{task.title}</li>
        } )}
      </ul>
    </section>
  );
}
