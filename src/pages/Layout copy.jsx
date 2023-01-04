import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout = () => {
  const activeLink = ({isActive}) => {
    return{
     color: isActive ? "#FFFFFF" : "#000000",
     fontWeight: isActive ? "bold" : ""
    };
  };

  let activeClassName = "underline";
  return (
    <>
      <div className="container">
        <header className="app-header">
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><strong>LET's Review</strong></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link light-text" aria-current="page" 
                      to="/home" style={activeLink}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link light-text" aria-current="page" 
                      to="/review" style={activeLink}>
                      Review
                    </NavLink>
                  </li>

                  <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Major
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="TLE.jsx">Home</a></li>
                      <li><a class="dropdown-item" href="#">Menu</a></li>
                      <li><a class="dropdown-item" href="#">Contact Us</a></li>
                      <li><a class="dropdown-item" href="#">About Us</a></li>
                    </ul>
                  </div>

                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Login</button>
                </form>
              </div>
            </div>
          </nav>

        </header>
      
      <Outlet />

      <footer>
        <div className="bg-success">
          <p>Footer</p>
        </div>
      </footer>
      </div> 

    </>
  )
};

export default Layout;