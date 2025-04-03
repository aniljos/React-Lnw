import Link from "next/link";

function Appbar(){
    return (
        <nav className={`navbar navbar-dark bg-dark`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React-Nextjs</a>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/todo">Todo</Link>
              </li>
              
            </ul>
          </div>
        </nav>
    )
}

export default Appbar;