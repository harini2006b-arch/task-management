import {BrowserRouter,Routes,Route,Link}
from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskDetails from "./TaskDetails";
import Footer from "./Footer";
import User from "./User";
import ProtectedRoute from "./ProtectedRoute";
import CalendarView from "./CalendarView";
import Profile from "./Profile";

function Header(props)
{

const isLoggedIn =localStorage.getItem("user")==="true";

return(

<BrowserRouter>

<nav className="navbar navbar-expand-lg custom-navbar px-4">

<div className="container-fluid">

<Link className="navbar-brand fw-bold" to="/">

<i className="bi bi-grid-1x2-fill me-2"></i>

TaskManager

</Link>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">

<span className="navbar-toggler-icon"></span>

</button>

<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav ms-auto align-items-center">

<li className="nav-item">

<Link className="nav-link" to="/">Home</Link>

</li>

<li className="nav-item">

<Link className="nav-link" to="/about">About</Link>

</li>

{
isLoggedIn &&
<>

<li className="nav-item">

<Link className="nav-link" to="/tasks">Tasks</Link>

</li>

<li className="nav-item">

<Link className="nav-link" to="/add">Add Task</Link>

</li>

<li className="nav-item">

<Link className="nav-link" to="/calendar">Calendar</Link>

</li>

<li className="nav-item">

<Link className="nav-link" to="/profile">Profile</Link>

</li>

</>

}

{
!isLoggedIn &&

<li className="nav-item ms-3">

<Link className="btn btn-light" to="/user">Login</Link>

</li>

}

{
isLoggedIn &&

<li className="nav-item dropdown ms-3">

<button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Mode</button>

<ul className="dropdown-menu dropdown-menu-end">

<li>

<button className="dropdown-item" onClick={()=>props.setTheme("purple")}>🟣 Purple</button>

</li>

<li>

<button className="dropdown-item" onClick={()=>props.setTheme("blue")}>🔵 Blue</button>

</li>

<li>

<button className="dropdown-item" onClick={()=>props.setTheme("dark")}>🌙 Dark</button>

</li>

<li>

<button className="dropdown-item" onClick={()=>props.setTheme("light")}>☀ Light</button>

</li>

</ul>

</li>

}

{
isLoggedIn &&

<li className="nav-item ms-3">

<button className="btn btn-danger" onClick={()=>{
    localStorage.removeItem("user");
    window.location="/user";
}}>

Logout

</button>

</li>

}

</ul>

</div>

</div>

</nav>

<Routes>

<Route path="/" element={<Home tasks={props.tasks}/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/user" element={<User/>}/>

<Route path="/tasks" element={

<ProtectedRoute>

<TaskList
tasks={props.tasks}
deleteTask={props.deleteTask}
updateTask={props.updateTask}
loading={props.loading}
/>

</ProtectedRoute>

}
/>

<Route path="/add"element={
    <ProtectedRoute>

<TaskForm
saveTask={props.saveTask}
/>
    </ProtectedRoute>

}
/>

<Route path="/calendar" element={<ProtectedRoute><CalendarView tasks={props.tasks}/></ProtectedRoute>

}
/>

<Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>

<Route path="/task/:id" element={<TaskDetails tasks={props.tasks}/>}/>

</Routes>
<Footer/>
</BrowserRouter>
)
}
export default Header;