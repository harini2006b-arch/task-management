import TaskChart from "./TaskChart";
import {useNavigate} from "react-router-dom";

function Dashboard(props)
{

const navigate=useNavigate();

function createTask()
{
navigate("/add");
}

function reports()
{
navigate("/tasks");
}

function exportTasks()
{

const data=
JSON.stringify(
props.tasks,
null,
2
);

const blob=
new Blob(
[data],
{
type:"application/json"
}
);

const url=
window.URL.createObjectURL(blob);

const link=document.createElement("a");
link.href=url;
link.download="tasks-report.json";

link.click();
}

const total=props.tasks.length;
const completed=
props.tasks.filter(
t=>t.completed
).length;

const pending=total-completed;

const percentage=total===0
?0
:Math.round(
(completed/total)*100
);

const currentDate=new Date();

return(
<div className="container mt-4">
<div className="row g-4">
<div className="col-md-3">
<div className="card dashboard-card">
<h5>Total Tasks</h5>
<h1>{total}</h1>
</div>
</div>
<div className="col-md-3">
<div className="card dashboard-card">
<h5>Completed</h5>
<h1>{completed}</h1>
</div>
</div>
<div className="col-md-3">
<div className="card dashboard-card">
<h5>Pending</h5>
<h1>{pending}</h1>
</div>
</div>
<div className="col-md-3">
<div className="card dashboard-card">
<h5>Success Rate</h5>
<h1>{percentage}%</h1>
</div>
</div>
</div>
<br/>
<div className="card p-4 shadow">
<h4>Task Progress</h4>
<div className="progress">
<div
className="progress-bar" role="progressbar" style={{width:`${percentage}%`}}>
{percentage}%
</div>
</div>
</div>
<br/>
<div className="card p-4 shadow">
<h4>Recent Activity</h4>
{
props.tasks.slice(0,5)
.map(task=>

<div
className=
"d-flex justify-content-between border-bottom p-2"
key={task.id}>

<span>
{task.title}
</span>

<span>

{
task.completed?

<span className= "badge bg-success">Completed</span>

:

<span className= "badge bg-warning">Pending</span>
}

<div className="card dashboard-card">
<i className="bi bi-list-task fs-1"></i>
<h5>Total Tasks</h5>
<h1>{total}</h1>
</div>
<br/>
<div className="card shadow p-4">
<h4 className="mb-3">Statistics Overview</h4>
<div className="row">
<div className="col-md-4">
<div className="border rounded p-3 text-center">
<h6>Total Tasks</h6>
<h2>{total}</h2>
<small className="text-muted">Tasks available in system</small>
</div>
</div>
<div className="col-md-4">
<div className="border rounded p-3 text-center">
<h6>Completed Ratio</h6>
<h2>
{percentage}%
</h2>
<small className="text-muted">Task completion efficiency</small>
</div>
</div>
<div className="col-md-4">
<div className="border rounded p-3 text-center">
<h6>Pending Ratio</h6>
<h2>
{
100-percentage
}%
</h2>
<small className="text-muted">Remaining workload</small>
</div>
</div>
</div>
</div>
<br/>
<div className="card shadow p-4">
<h4 className="mb-3">Progress Analytics</h4>
<p>Task Completion Progress</p>
<div className="progress mb-4">
<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
style={{width:`${percentage}%`}}>

{percentage}%

</div>
</div>

<div className="row">

<div className="col-md-4">

<div className="text-center">

<h3>{completed}</h3>

<p className="text-success">
Completed Tasks
</p>

</div>

</div>


<div className="col-md-4">

<div className="text-center">

<h3>{pending}</h3>

<p className="text-warning">
Pending Tasks
</p>

</div>

</div>


<div className="col-md-4">

<div className="text-center">

<h3>{total}</h3>

<p className="text-primary">
Total Tasks
</p>

</div>

</div>

</div>
</div>
<br/>

<div className="card shadow p-4">

<h4 className="mb-3">
Live Activity Feed
</h4>

{
props.tasks.slice(0,5).map(task=>

<div
className="d-flex justify-content-between align-items-center border-bottom py-3"
key={task.id}
>

<div>

<h6 className="mb-1">
{task.title}
</h6>

<small className="text-muted">
Task ID : {task.id}
</small>

</div>

<div>

{
task.completed ?

<span className="badge bg-success">
✓ Completed
</span>

:

<span className="badge bg-warning text-dark">
⏳ Pending
</span>

}

</div>

</div>

)
}

</div>
<br/>

<TaskChart tasks={props.tasks}/>
<div className="card p-4 mb-4">
<h4>
<i className="bi bi-clock me-2"></i>Current Time
</h4>
<h2>
{
currentDate.toLocaleTimeString()
}
</h2>
<p>
{
currentDate.toDateString()
}
</p>
</div>
<div className="card p-4 mb-4">
<h4>Quick Actions</h4>
<div className="d-flex gap-3">
<button className="btn btn-success" onClick={createTask}>
    <i className="bi bi-plus-circle me-2"></i>New Task
</button>
<button className="btn btn-warning" onClick={reports}>
    <i className="bi bi-bar-chart me-2"></i>Reports
</button>
<button className="btn btn-info" onClick={exportTasks}>
    <i className="bi bi-download me-2"></i>Export</button>
</div>
</div>
</span>
</div>
)
}
</div>
</div>
)
}
export default Dashboard;