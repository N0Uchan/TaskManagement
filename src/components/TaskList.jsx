import './TaskList.css';
export default function TaskList({ id }) {
    return (
        <ul id={id} >
            {/* map lists */}
            <div className="subTask" >
                <h6 className='subName' >Task 1</h6>
                <div id="doneBtn" />
                <div id="delBtn" />
            </div>
            <div className="subTask" >
                <h6 className='subName' >Task 2</h6>
                <div id="doneBtn" />
                <div id="delBtn" />
            </div>
            
            
         </ul>
    )
}