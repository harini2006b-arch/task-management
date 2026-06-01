import {useParams,useNavigate}
from "react-router-dom";

function TaskDetails(props)
{

const {id}=useParams();

const navigate=
useNavigate();

const task=props.tasks.find(t=>t.id===parseInt(id))

return(

<div className="container mt-5">

<div className="card p-4">

<h2>Task Details</h2>

<p>ID : {task?.id}</p>

<p>Title :{task?.title}</p>

<p>Status :
{
task?.completed?
"Completed":
"Pending"
}

</p>

<button
className=
"btn btn-secondary"
onClick={()=>
navigate(-1)
}
>

Back

</button>

</div>

</div>

)

}

export default TaskDetails