import {Navigate} from "react-router-dom";

function ProtectedRoute(props)
{
const isLoggedIn=
localStorage.getItem("user")==="true";

return(
isLoggedIn
?
props.children
:
<Navigate to="/user"/>
)

}

export default ProtectedRoute;