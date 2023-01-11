import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Layout = () => {
  const activeLink = ({isActive}) => {
    return{
     color: isActive ? "#FFFFFF" : "#000000",
     fontWeight: isActive ? "bold" : ""
    };
  }; 

  // let activeClassName = "underline";
  return (
    <>
      <div className="container-fluid">
        <header className="app-header">
          
          <nav className="navbar navbar-expand-lg navbar-light" id="head">
            <div className="container-fluid">
              <a className="nuku navbar-brand text-light">
                <img id="logo" src="./img/logo.png" alt="Ichiraku Logo" />
                Ichiraku
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item pe-5">
                    <NavLink className="nav-link light-text linkheader" aria-current="page" 
                      to="/home" style={activeLink}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item pe-5">
                    <NavLink className="nav-link light-text linkheader" aria-current="page" 
                      to="/menu" style={activeLink}>
                      Menu
                    </NavLink>
                  </li>
                  <li className="nav-item pe-5">
                    <NavLink className="nav-link light-text linkheader" aria-current="page" 
                      to="/contact" style={activeLink}>
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item pe-5">
                    <NavLink className="nav-link light-text linkheader" aria-current="page" 
                      to="/about" style={activeLink}>
                      About
                    </NavLink>
                  </li>

                </ul>

                  <button className="btn text-white" data-bs-toggle="modal" data-bs-target="#signin"
                  style={{backgroundColor: "rgb(0, 0, 0)"}}>Login</button>
              </div>
            </div>
          </nav>

          <div className="modal fade" id="signin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Login</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                  <div className="modal-body">
                    
                  <form>
                    <div className="mx-5">
                      <div className="col mb-2">
                        <label htmlFor="validationDefault01" className="form-label mb-0">Email</label>
                        <input type="email" className="form-control" id="validationDefault01" required />
                      </div>
                     
                      <div className="col mb-2">
                        <label htmlFor="inputPassword" className="form-label mb-0">Password</label>
                        <input type="password" className="form-control" id="in" required />
                      </div>
                     
                      <div className="col-12">
                        <button className="btn btn-primary btn-lg" type="submit">Submit form</button>
                      </div>
                    </div>
                  </form>


                  </div>
              </div>
            </div>
          </div> 
        </header>
      
        <Outlet />

        {/* <!-- Messenger plug-in --> */}

        <footer>
        {/* <MessengerCustomerChat
          pageId="101578034933707"
          appId="554916839866912"
        /> */}
          <div className="pt-3 pb-1" style={{backgroundColor: "rgb(255,1,1)"}}>
          </div>
          
          <div className="text-light" style={{backgroundColor: "rgb(18,18,18)"}}>

            <div className="col-12 pt-4 text-light">
              <center>
                <a className="navbar-brand ms-2">
                  <img id="footerlogo" src="img/logo.png" alt="Ichiraku Logo" />
                </a>
              </center>
              <p align="center" id="nuku" style={{fontSize: "150%"}}>
                ICHIRAKU
              </p>
            </div>

            <center className="mb-2"><i className="fa-brands fa-square-facebook fa-lg me-5"></i>
              <i className="fa-brands fa-square-instagram fa-lg me-5"></i>
              <i className="fa-brands fa-square-twitter fa-lg me-5"></i>
              <i className="fa-brands fa-tiktok fa-lg"></i>
            </center>
        
            <hr />

            <center className="pt-4 pb-5">
              <Link className="me-5 footerName" to='/location'>Location</Link>
              <Link className="me-5 footerName" to='/rates'>Rates</Link>
              <Link className="me-5 footerName" to='/mode'>Mode of Payment</Link>
              <Link className="me-5 footerName" to='/menu'>Menu</Link>
              <Link className="me-5 footerName" to='/team'>Our Team</Link>
              <Link className="me-5 footerName" to='/contact'>Contact Us</Link>
            </center>

          </div>

          <div className="pt-3 pb-1" style={{backgroundColor: "rgb(0, 0, 0)"}}>
            <p className="text-light" align="center">©2022 Copyright: Ichiraku</p>
          </div>
        </footer>
      
      </div> 
    </>
  )
};

export default Layout;