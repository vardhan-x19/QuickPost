import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
function SideBar({setItems,item}) {
    return <>
    <div className={`d-flex flex-column flex-shrink-0 p-3 bg-light sidebar ${styles.sidebar}`}style={{width:"20vw"}}>
    <a xlinkHref="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className={styles.quickpost}>QuickPost</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" >
      <Link to="/" className={`nav-link`} aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li >
        <Link to="/create-post" className={`nav-link `}>
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          AddPost
        </Link>
      </li>
      <li >
        <Link to="/liked-post" className={`nav-link `}>
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Liked
        </Link>
      </li>
      <li >
        <Link to="/saved" className={`nav-link `}>
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          SavedPost
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" >
        <li><a className="dropdown-item">New project...</a></li>
        <li><a className="dropdown-item">Settings</a></li>
        <li><a className="dropdown-item">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </>
}
export default SideBar;