import './SideBar.css'; 


export default function SideBar({ addClick , tasks , setPageid ,closeDialog }) {

  

  return (
    <section id="sideBar" >
      <div id="sideBarAddBtn" onClick={addClick}
      //  onMouseEnter={()=>{iconRef.current.play}} 
       >
        
          <strong>+ Quest</strong>

      </div>
      <h2>Quests</h2>
      <ul>
        {tasks.length>0 ? null : <><p>No sub Quests Yet :( </p><br/> Click +Quest to add.</> }
        {tasks.map((task)=>{
          return <li 
                onClick={()=>{
                  setPageid(task.tNo);
                  closeDialog();
                  }} key={task.tNo} >{task.title}</li>
        } )}
      </ul>
    </section>
  );
}

// import Lottie from 'lottie-react';
// import animationData from '../assets/addIcon.json';
// import { useRef } from 'react';
// const iconRef = useRef(null);
// <Lottie  lottieRef={ iconRef }
//                  loop={false} className="" animationData={animationData} />