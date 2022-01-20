import React,{Fragment} from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"
import MainNavigation from './components/MainNavigation/MainNavigation';
import AllBlogs from './components/pages/AllBlogs';
import NewBlog from './components/pages/NewBlog';
import ShowBlog from './components/pages/ShowBlog';
import EditBlog from './components/pages/EditBlog';
function App() {
  return (
    <Fragment>
      <MainNavigation/>
        <main>
          <Routes>
              <Route path="/"  element ={<AllBlogs/>}/>
              <Route path ="/new" element ={<NewBlog/>}/>
              <Route path ="/blogs/:id" element ={<ShowBlog/>}/>
              <Route path ="/blogs/:id/update" element ={<EditBlog/>}/>
          </Routes>
        </main>   
    </Fragment>
  );
}

export default App;
