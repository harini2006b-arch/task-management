import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend
}
from "chart.js";

import {Pie} from "react-chartjs-2";

ChartJS.register(
ArcElement,
Tooltip,
Legend
);

function TaskChart(props)
{

const completed=
props.tasks.filter(
task=>task.completed
).length;

const pending=
props.tasks.length-completed;

const data={

labels:[
"Completed",
"Pending"
],

datasets:[
{
label:"Tasks",

data:[
completed,
pending
],

backgroundColor:[
"#1b8855",
"#f4c539"
],

borderWidth:1

}
]

};

return(

<div className="card p-4 shadow">

<h4 className="mb-4">
Task Analytics
</h4>

<Pie data={data}/>

</div>

)

}

export default TaskChart;