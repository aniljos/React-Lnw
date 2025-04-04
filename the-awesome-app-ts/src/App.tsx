import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Message from './components/Message';
import Counter from './components/Counter';

//import Login from './components/Login';

import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import TodoListComponent from './components/TodoListComponent';
import Appbar from './components/Appbar';
import Breadcrumbs from './components/Breadcrumbs';
import React from 'react';
//import TodoList from './components/TodoList';

const Login = React.lazy(() => import('./components/Login'));

function App() {

  return (
    <div className="container-fluid">
      <Router basename='/react-vite/'>
        
        <Appbar/>
        <Breadcrumbs/>

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
