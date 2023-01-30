import React from 'react'
import logo from './logo.jpg'
import video from './video.mp4'
import { Link } from 'react-router-dom'

const Hello = () => {
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
          <ul className="navbar-nav">
            <li><h5><Link to="/" className="nav-item nav-link btn btn-dark">Home</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li><h5><Link to="/home" className="nav-item nav-link btn btn-dark">Login</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li><h5><Link to="/signup" className="nav-item nav-link btn btn-dark">Sign up</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
<div className="container">
  <br /><br /><br /><br /><br />
  <div className="row px-3 ">
    <div className="col-sm-3 overlay">
      <div className="card">
        <img className="card-img-overlay rounded img-thumbnail" style={{backgroundColor: 'rgba(245, 245, 245, 0.3)'}} src={logo} alt="Crypto Explorer" width="287px" height="295px" />
      </div>
    </div>
  </div>
</div>
<div className='overlay'>
<div className="centered"><font face="Verdana"size={4} color="white">Welcome To Crypto Explorer,</font><br /><font face="Times New Roman" size={6} color="white">This is a Rank and Price tracker that monitors  and <br />  Provide information about the Current details of different digital currencies and tokens.<br/>This have the details of more than 1100+ Coins and Tokens.</font></div>
    <a href="https://maheshkumarkottakota.netlify.app/" target="_blank"><button className="but1"><small>Developer Info</small></button></a>
</div>
</div>
  )
}

export default Hello
