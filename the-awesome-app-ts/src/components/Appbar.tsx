import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppThemeContext } from "../context/AppThemeContext";

function Appbar(){

    const themeContext = useContext(AppThemeContext);
    const mode = themeContext.mode;

    function switchTheme(){
        themeContext.setMode(themeContext.mode === 'dark'? 'light': 'dark');
        //console.log("themeContext.mode",  themeContext.mode) 
    }

    return (
        <nav className={`navbar navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React-Vite</a>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">Todo</Link>
              </li>
              <li>
                <button className="btn btn-warning" onClick={switchTheme}>Switch Theme</button>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Appbar;