import React, { useContext } from "react";
import Header1 from "./header1/header";
import Home from "./home/home";
import Login from "./login/login";
import Header from "./navbar/header";
import Setting from "./setting/setting";
import Settings from "./settings/settings";
import Single from "./single/single";
import Write from "./write/write";
import Posts from "./posts/posts";

import { Context } from "./context";

import {
	BrowserRouter as Router,
	Routes,
  Switch,
	Route,
	Link,
  BrowserRouter
} from 'react-router-dom';
import Register from "./register/register";


function App() {

  const {user} = useContext(Context);

  return (

    
    
    <BrowserRouter>
      <Header/>
      
      

      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element =  { user ? <Home/>:<Login/>}></Route>
        <Route path="/register" element =  {<Register/>}></Route>
        <Route path="/write" element = {user ? <Write/>: <Home/>}></Route>
        <Route path="/posts" element = {<Posts/>}></Route>
        <Route path="/settings" element = {user ? <Settings/>:<Home/>}> </Route>
        <Route path="/header1" element = {<Header1/>}></Route>
        <Route path="/post/:postId" element = {<Single/>}></Route>

        

      </Routes>
    
    </BrowserRouter>
    // <Routerr

    //   <Header/>

    //    <Switch>
         
    //   <Route exact path = "/">
    //        <Home/>
    //      </Route>
    //      <Route path = "/login">
    //        <Login/>
    //      </Route>
    //      <Route path = "/posts">
    //        <Posts/>
    //      </Route>
    //      <Route path = "/header1">
    //         <Header1/>
    //      </Route>
        
         
    //      <Route path = "/single">
    //         <Single/>
    //      </Route>
    //      <Route path = "/settings">
    //         <Settings/>
    //      </Route>
    //      <Route path = "/write">
    //         <Write/>
    //      </Route>

    //    </Switch>
    // </Router>
  );
}

export default App;
