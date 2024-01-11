import './SideBar.css';

export default function SideBar({addClick}) {



  return (
    <section id="sideBar" >
      <button onClick={addClick} ><strong>+ Quest</strong></button> 
      <h2>Quests</h2>
      <ul>
        <li>Quest app</li>
        <li>Quest 2</li>
        <li>Quest 3</li>
      </ul>
    </section>
  );
}
