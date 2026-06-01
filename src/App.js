import logo from './logo.svg';
import './App.css'
import axios from "axios";
import {useState,useEffect} from "react";
import Header from "./components/Header";

function App()
{
const [tasks,setTasks]=useState([]);
const [loading,setLoading]=useState(true);
const [theme,setTheme]=useState("purple");
useEffect(()=>{
getTasks()
},[])

async function getTasks()
{
try{
const res=await axios.get(
'https://jsonplaceholder.typicode.com/users/1/todos'
);

setTasks(res.data.slice(0,15))
setLoading(false)
}
catch(error)
{
console.log(error)
}
}

async function saveTask(task)
{
const res=await axios.post(
'https://jsonplaceholder.typicode.com/todos',
task
)

setTasks([
...tasks,
{
...task,
id:tasks.length+1
}
])

}

async function deleteTask(id)
{
await axios.delete(
`https://jsonplaceholder.typicode.com/todos/${id}`
)

setTasks(
tasks.filter(t=>t.id!==id)
)
}

async function updateTask(task)
{
await axios.put(
`https://jsonplaceholder.typicode.com/todos/${task.id}`,
task
)

setTasks(
tasks.map(
t=>t.id===task.id?task:t
)
)
}

document.body.className=theme;


return(

<Header
tasks={tasks}
saveTask={saveTask}
deleteTask={deleteTask}
updateTask={updateTask}
loading={loading}
theme={theme}
setTheme={setTheme}
/>

)

}

export default App;

