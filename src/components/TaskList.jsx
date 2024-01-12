import './TaskList.css';


export default function TaskList({ id , subTasks , taskIndex }) {


    var list = undefined;
    const pageSubTasks = [...subTasks[taskIndex]];
    if(pageSubTasks.length>0){

        list = pageSubTasks.map((task,index)=>{
            return <div key={index} className="subTask" >
                        <h6 className='subName' >{task.subT}</h6>
                        <div id="tasklistBtnsDiv">
                            <div id="doneBtn"  />
                            <div id="delBtn" />
                        </div>
                    </div>
        })
    }else{
        // console.log('no subTasks');
        list = <>
        <p style={{maxWidth:'fit-content',margin:'5dvh auto'}} >No subQuests Yet :( </p>
        <br/>
        <p style={{maxWidth:'fit-content',margin:'-2dvh auto'}} >Click Add to add.</p> 
    </>
    }
    return (
        <ul id={id} > 
            {/* <button onClick={()=>{console.log(pageSubTasks)}} ></button> */}
            {list}
         </ul>
    )
}
                