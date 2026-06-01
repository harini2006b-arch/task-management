import axios from "axios";
import {useState} from "react";
function TaskForm(props)
{
const [title,setTitle]=useState("");
const [aiReply,setAiReply]=useState("");
const [loadingAI,setLoadingAI]=useState(false);

function saveTask(event)
{
event.preventDefault();
const task={
    title:title,
    completed:false
};

props.saveTask(task);
setTitle("");
setAiReply("");
}

async function getAISuggestion()
{

try{
setLoadingAI(true);

const res = await axios.post(
"http://localhost:5000/ai-suggestion",
{
    task:title
}
);

setAiReply(res.data.reply);
setLoadingAI(false);

}
catch(error){
console.log(error);
setLoadingAI(false);
alert("AI Server Error");
}
}

return(
<div className="container mt-4">
<div className="card p-4">
<h2 className="mb-4">Add Smart Task</h2>

<form onSubmit={saveTask}>
<input
className="form-control mb-4"
type="text"
placeholder="Enter your task..."
value={title}
onChange={(e)=>
setTitle(e.target.value)
}/>

<div className="d-flex gap-3">
<button type="button" className="liquid-btn" onClick={getAISuggestion} > <span>Ask AI </span> </button>
<button className="btn btn-primary">Create Task</button>
</div>
{
loadingAI &&

<div className="mt-4 text-center">
<div className="spinner-border text-warning">
</div>
</div>
}

{
aiReply &&
<div className="alert alert-info mt-4">
<h5>AI Assistant</h5>

<pre
style={{
whiteSpace:"pre-wrap",
fontFamily:"inherit",
marginBottom:"0"
}}>
{aiReply}
</pre>
</div>
}
</form>
</div>
</div>
)
}
export default TaskForm;