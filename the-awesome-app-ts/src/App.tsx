import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Message from './components/Message';
import Counter from './components/Counter';
import Login from './components/Login';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import TodoListComponent from './components/TodoListComponent';
//import TodoList from './components/TodoList';


function App() {

  return (
    <div className="container-fluid">
      <Router>
        <nav className="navbar navbar-dark bg-dark">
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
            </ul>
          </div>
        </nav>

        <main>
            <Routes>
              <Route path='/' element={<Message text='Hello React'/>}/>
              <Route path='/counter' element={<Counter initialCount={5}/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/products' element={<ListProducts/>}/>
              <Route path='/products/:id' element={<EditProduct/>}/>
              <Route path='/todo' element={<TodoListComponent/>}/>
            </Routes>
        </main>
      </Router>


    </div>
  )
}
export default App
