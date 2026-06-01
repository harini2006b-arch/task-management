import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {useState} from "react";

function CalendarView(props)
{
const[value,setValue]=useState(new Date());

return(

<div className="container mt-4">

<div className="card p-4">

<h2 className="mb-4">Task Calendar</h2>

<Calendar
onChange={setValue}
value={value}/>

<br/>

<h5>Selected Date:
    {value.toDateString()}
</h5>

<hr/>
<h4>Tasks</h4>
{
props.tasks
    .filter(task=>task.dueDate)
    .filter(task=>
     new Date(task.dueDate)
    .toDateString()===value.toDateString()
)
.map(task=>
<div key={task.id} className= "alert alert-primary"> {task.title}</div>
)
}
</div>
</div>
)
}
export default CalendarView;