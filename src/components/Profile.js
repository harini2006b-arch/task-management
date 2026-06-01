function Profile()
{

return(

<div className="container py-5">

<div className="row g-4">

<div className="col-lg-4">

<div className="card p-4 text-center profile-main-card">

<div className="profile-image-container mb-4">

<i className="bi bi-person-circle profile-icon"></i>

<div className="online-status"></div>

</div>

<h2 className="fw-bold">
Harini B
</h2>

<p className="text-light">
User
</p>

</div>

</div>

<div className="col-lg-8">

<div className="card p-4 mb-4">

<h3 className="mb-4">

<i className="bi bi-person-lines-fill me-2"></i>

Profile Information

</h3>

<div className="row g-4">

<div className="col-md-6">

<div className="info-box">

<h6>Full Name</h6>

<p>Harini B</p>

</div>

</div>

<div className="col-md-6">

<div className="info-box">

<h6>Email</h6>

<p>harini2006@gmail.com</p>

</div>

</div>

<div className="col-md-6">

<div className="info-box">

<h6>Role</h6>

<p>User</p>

</div>

</div>

<div className="col-md-6">

<div className="info-box">

<h6>Status</h6>

<p>

<span className="badge bg-success px-3 py-2">

Active

</span>

</p>

</div>

</div>

</div>

</div>

<div className="card p-4 mb-4">

<h3 className="mb-4">

<i className="bi bi-activity me-2"></i>

Recent Activity

</h3>

<div
className="activity-item"
onClick={()=>window.location="/tasks"}
>

<div className="activity-icon bg-success">

<i className="bi bi-check-lg"></i>

</div>

<div>

<h6>Completed Task</h6>


</div>

</div>

<div
className="activity-item"
onClick={()=>window.location="/tasks"}
>

<div className="activity-icon bg-warning">

<i className="bi bi-clock"></i>

</div>

<div>

<h6>Pending Review</h6>

</div>

</div>

<div className="activity-item" onClick={()=>window.location="/tasks"}>

<div className="activity-icon bg-info">

<i className="bi bi-bar-chart"></i>

</div>

<div>

<h6>Analytics Updated</h6>


</div>

</div>

</div>

</div>

</div>

</div>

)

}

export default Profile;