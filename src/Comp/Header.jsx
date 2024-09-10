import { useRef } from "react";
import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchingData } from '../Store/defItems';
function Header() {
  const val=useRef();
  const dispatch=useDispatch();
  const naviGate=useNavigate();
  const searchFunc=()=>{
    let key=val.current.value;
    console.log();
    dispatch(searchingData({val:key}));
    naviGate("/search");
    val.current.value="";
  }
    return <>
     <div className={`container ${styles.header}`}>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/features" className="nav-link px-2 text-secondary">Features</Link></li>
          <li><Link to="/faqs"className="nav-link px-2 text-secondary">FAQs</Link></li>
          <li><Link to="/about" className="nav-link px-2 text-secondary">About</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <div className="search-display">
          <input type="search" ref={val} className="form-control form-control-dark" placeholder="Search userId or Tags" aria-label="Search"/>
         <button type="button" class="btn btn-info" onClick={searchFunc}><CiSearch  /></button>
          </div>
        </form>

        <div className="text-end">
          <Link to="/login" ><button type="button" className="btn me-2">Login</button></Link>
          <Link to="/signup" ><button type="button" className="btn btn-warning">Sign-up</button></Link>
        </div>
      </div>
    </div>
    </>
}
export default Header;