import {useState} from "react";
import {useNavigate} from "react-router-dom";

function User()
{
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const navigate=useNavigate();

function loginHandler(event)
{
event.preventDefault();

if(
email.trim()==="harini2006@gmail.com" &&
password.trim()==="niriha"
)
{
localStorage.setItem(
"user",
"true"
);

alert("Login Successful");

navigate("/tasks");}
else
{
alert("Invalid Credentials");
}
}

function logout()
{
localStorage.removeItem(
"user"
);

navigate("/user");
}

return(

<div className="container mt-5">

<div
className="card p-4 mx-auto"
style={{
maxWidth:"450px"
}}
>

<h2 className="text-center mb-4">

User Login

</h2>

<form onSubmit={loginHandler}>

<input
type="email"
className="form-control mb-3"
placeholder="Enter Email"
value={email}
onChange={(e)=>
setEmail(e.target.value)
}
/>


<input
type="password"
className="form-control mb-3"
placeholder="Enter Password"
value={password}
onChange={(e)=>
setPassword(e.target.value)
}
/>

<button
className="btn btn-primary w-100"
>

Login

</button>

<button
className=
"btn btn-danger w-100 mt-3"
onClick={logout}
type="button"
>

Logout

</button>

</form>


</div>

</div>

)

}

export default User;