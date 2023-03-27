import React,{useState,useRef} from 'react'
import {auth} from './Firebase'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Modal} from 'react-bootstrap';
import emailjs from "@emailjs/browser";

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen=()=>{
    setShowModal(true);
  }

  const handleModalClose=()=>{
    setShowModal(false);
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_api",
        "template_api",
        form.current,
        "user_api"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.alert("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate('/signup');
  };
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
    auth.signInWithEmailAndPassword(email,password).then(user=>navigate('/home')
    ).catch(err=>{
      console.log(err);
      window.alert("Please Enter the correct Credentials");
    });
  }
  const [passwordType, setPasswordType] = useState("password");
  const showPassword =(e)=>{
    e.preventDefault();
    if(passwordType==="password")
    {
     setPasswordType("text")
    }
    else{
      setPasswordType("password")
    }
  }
      return (
        <div>
          <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-2 pb-1 navbar-fixed-top">
        <div className="container">
          <div className="nav-item">
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
            <li><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="gold" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
              </svg></li>&nbsp;&nbsp;
            <li> <h5 className="text-light">Crypto Explorer &nbsp;<small>v4.0</small></h5></li>
          </ul>
            </div>
          </div>
          <div className="nav-item float-end">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto px-3">
              <li><h5><Link to="/" className="nav-item nav-link btn btn-dark">Home</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><h5><Link to="/home" className="nav-item nav-link btn btn-dark">Login</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><h5><Link to="/signup" className="nav-item nav-link btn btn-dark">Sign up</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><h5> 
              <Link to="#" className="nav-item nav-link btn btn-dark" onClick={handleModalOpen}>Contact Me</Link>
                <Modal show={showModal} onHide={handleModalClose} style={{height:"550px"}}>
                <Modal.Header className='bg-dark text-light'>
                    <Modal.Title>
                      <h4>Hello User &#128516;
                      </h4>
                    </Modal.Title>
                    <button className='btn btn-success float-end' onClick={handleModalClose}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button>
                  </Modal.Header>
                  <p className='contact'>
                  <p>&nbsp;&nbsp; Feel Free to Contact me whenever you , </p>
                      <ul>
                        <li>
                          <small>Need help !</small>
                        </li>
                        <li>
                          <small>If you have any ideas or suggestions to share, you are Appreciated !</small>
                        </li>
                        <li>
                          <small>And if you found any Bug? Let me know !</small>
                        </li>
                      </ul>
                  <Modal.Body>
                    <form ref={form} onSubmit={sendEmail}>
                      <input className='input2' type="text" name="user_name" placeholder='Your Name' /><br/>
                      <input className='input2' type="email" name="user_email" placeholder='Your Email id' /><br/>
                      <textarea name="message" placeholder='Enter the Message here...' cols={55} rows={5}/><br/>
                      <button className='btn btn-success justify-content-center' type="submit">Send</button>
                    </form>
                  </Modal.Body>
                  </p>
                </Modal>
            </h5></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <div className="container ">
    <br /><br /><br />
    <div className="row px-3 justify-content-center">
    <div className="col-sm-4 rounded" >
    <section className='login' id='login'>
  <div className='head'>
  <h3 className='company'>Login</h3>
  </div>
  <div className='form'>
    <form>
    <input  type="text" className='text' placeholder='Email id' value={email} name='email' onChange={changeHandler}/><br/><br/>
    <input autoComplete='off' type={passwordType} className='password' placeholder='Password' value={password} name='password' onChange={changeHandler}/>&nbsp;&nbsp;&nbsp;
    <button className="btn btn-sm btn-outline-light"  onClick={showPassword}>
      { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
    </button>
    <br/><br/>
    <div className='justify-content-center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={LogIn} className='btn btn-outline-light'>Login</button><br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Don't have an Account? <a className='text-light' href="#"  onClick={navigateSignUp}>SignUp</a></small><span></span>
    </div>
    </form>
  </div>
</section>
</div>
    </div>
  </div>
        </div>
      )
}

export default Login
