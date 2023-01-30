import React,{useState} from 'react'
import {auth} from './Firebase'
import video from './video.mp4'
import { Link } from 'react-router-dom'

const Login = () => {
  const [data,setData]=useState({
    email:"",
    password:"",
  })
  const {email,password}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const LogIn=e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(user=>console.log(user)
    ).catch(err=>console.log(err));
  }
      return (
        <div>
          <video className='videoTag' autoPlay loop muted>
              <source src={video} type="video/mp4" />
          </video>
          <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-2 pb-1 navbar-fixed-top">
        <div className="container">
          <div className="nav-item float-start">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="white" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                  </svg></li>&nbsp;&nbsp;
                <li> <h5 className="text-light">Crypto Explorer</h5></li>
              </ul>
            </div>
          </div>
          <div className="nav-item float-end">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto px-3">
              <li><h5><Link to="/" className="nav-item nav-link btn btn-dark">Home</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><h5><Link to="/home" className="nav-item nav-link btn btn-dark">Login</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><h5><Link to="/signup" className="nav-item nav-link btn btn-dark">Sign up</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <div className="container ">
    <br /><br /><br />
    <div className="row px-3 justify-content-center">
        <div className="card col-sm-4 bg-l rounded" style={{ backgroundColor: "aliceblue" ,height:"380px"}} >
        <center >
          <br/>
              <h4 align="center">Login Form</h4>
            <form>
            <input style={{border:"1px solid black"}} type="text" placeholder='Email id' value={email} name='email' onChange={changeHandler}/><br/>
            <input autoComplete='off' style={{border:"1px solid black"}} type="text" placeholder='Password' value={password} name='password' onChange={changeHandler}/><br/><br/><br/>
            <button onClick={LogIn} className='btn btn-dark'>Login</button>
        </form>
        </center>
      </div>
    </div>
  </div>
        </div>
      )
}

export default Login
