import React from 'react'
import {useNavigate} from 'react-router-dom';


const Discussion = () => {
    const navigate = useNavigate();
    const navigatehome = () => {
        navigate('/home');
    }
    return (
      <div>
        <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-3 pb-2.5 navbar-fixed-top">
        <div className="container">
          <div className="nav-item float-start">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="white" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                  </svg></li>&nbsp;&nbsp;
                <li> <h5 className="text-light">Discussions</h5></li>
              </ul>
            </div>
          </div>
          <div className="nav-item float-end">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto px-3">
              <li><button className='btn btn-outline-light text-left' onClick={navigatehome}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
</svg>&nbsp;Back</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
      </div>
    )
}

export default Discussion
