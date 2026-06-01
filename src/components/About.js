import "./About.css";
function About()
{
return(
<div className="container py-5 about-container">
<div className="purple-bubble"></div>
<div className="card about-card">
<div className="row align-items-center">
<div className="col-lg-6">
<h1 className="fw-bold mb-4">About Task Manager</h1>
<p className="mb-4">
Smart Task Dashboard is a modern productivity
management system designed to simplify task
organization, team collaboration and workflow
tracking through an interactive dashboard interface.
</p>
<p className="mb-4">
The platform provides real-time analytics,
task monitoring, progress visualization and
secure management features to improve
efficiency and productivity for users.
</p>
<div className="row text-center mt-4">
<div className="col-4">
<h2 className="fw-bold text-warning">15+</h2>
<p>Tasks</p>
</div>
<div className="col-4">
<h2 className="fw-bold text-info">99%</h2>
<p>Efficiency</p>
</div>
<div className="col-4">
<h2 className="fw-bold text-success">24/7</h2>
<p>Tracking</p>
</div>
</div>
</div>
<div className="col-lg-6 text-center">
<img
src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
alt="about dashboard"
className="img-fluid about-img"
/>
</div>
</div>
<hr className="my-5"/>
<div className="row text-center">
<div className="col-md-3 mb-4">
<div className="feature-box">
<i className="bi bi-kanban fs-1"></i>
<h5 className="mt-3">Task Management</h5>
</div>
</div>
<div className="col-md-3 mb-4">
<div className="feature-box">
<i className="bi bi-bar-chart-line fs-1"></i>
<h5 className="mt-3">Analytics</h5>
</div>
</div>
<div className="col-md-3 mb-4">
<div className="feature-box">
<i className="bi bi-calendar-check fs-1"></i>
<h5 className="mt-3">Scheduling</h5>
</div>
</div>
<div className="col-md-3 mb-4">
<div className="feature-box">
<i className="bi bi-shield-lock fs-1"></i>
<h5 className="mt-3">Secure Access</h5>
</div>
</div>
</div>
</div>
</div>
)
}
export default About;