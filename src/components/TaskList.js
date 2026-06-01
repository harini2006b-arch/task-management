import {useState} from "react";
import {Link} from "react-router-dom";

function TaskList(props)
{
const [search,setSearch]=useState("");
const [filter,setFilter]=useState("all");

let filteredTasks=props.tasks.filter(
task=>task.title.toLowerCase()
.includes(search.toLowerCase())
)

if(filter==="completed")
{
filteredTasks=filteredTasks.filter(
task=>task.completed===true
)
}

if(filter==="pending")
{
filteredTasks=filteredTasks.filter(
task=>task.completed===false
)
}

return(

<div className="container mt-4">

<div className="row mb-3">

<div className="col-md-6">

<input
className="form-control"
placeholder="Search task..."
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

<div className="col-md-6">

<select
className="form-select"
onChange={(e)=>setFilter(e.target.value)}
>

<option value="all">
All Tasks
</option>

<option value="completed">
Completed
</option>

<option value="pending">
Pending
</option>

</select>

</div>

</div>

{
props.loading ?

<div className="text-center">

<div className="spinner-border text-primary">
</div>

</div>

:

filteredTasks.length===0 ?

<div className="text-center p-5">

<i
className="bi bi-inbox"
style={{
fontSize:"70px"
}}
></i>

<h3 className="mt-3">
No Tasks Found
</h3>

<p className="text-muted">
Try adding a new task
</p>

</div>

:

<table className="table table-hover shadow">

<thead className="table-dark">

<tr>

<th>ID</th>
<th>Task</th>
<th>Status</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{
filteredTasks.map(task=>

<tr key={task.id}>

<td>{task.id}</td>

<td>{task.title}</td>

<td>

{
task.completed ?

<span className="badge bg-success">
Completed
</span>

:

<span className="badge bg-warning">
Pending
</span>

}

</td>

<td>

<Link
to={`/task/${task.id}`}
className="btn btn-info me-2"
>

View

</Link>

<button
className="btn btn-danger"
onClick={()=>props.deleteTask(task.id)}
>

Delete

</button>

</td>

</tr>

)

}

</tbody>

</table>

}

</div>

)

}

export default TaskList;