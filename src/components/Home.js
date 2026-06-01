import Dashboard from "./Dashboard";
import {useNavigate} from "react-router-dom";
function Home(props)
{
    const navigate = useNavigate();
return(

<div className="container-fluid px-5 py-5">

<div className="row align-items-start">

<div className="col-lg-5 mb-4">

<div className="hero-section">

<h1 className="display-4 fw-bold text-white mb-4">

Manage Your Tasks
Like a Pro 
<p></p>
</h1>

<p
className="text-light mb-4"
style={{
fontSize:"20px",
lineHeight:"35px"
}}
>

"Turn your goals into completed tasks."</p>

<button
className="btn btn-light btn-lg px-4"
onClick={() => navigate("/user")}
>

Get Started

</button>

<div className="hero-image mt-5 text-center">

<img
src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
alt="learning dashboard"
className="img-fluid floating-img"
/>

</div>

</div>

</div>

<div className="col-lg-7">

<Dashboard tasks={props.tasks}/>

</div>

</div>

</div>

)
}

export default Home;