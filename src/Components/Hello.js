import React,{useState,useRef} from 'react'
import logo from './logo.jpg'
import video from './video.mp4'
import { Link } from 'react-router-dom'
import { Modal} from 'react-bootstrap';
import emailjs from "@emailjs/browser";

const Hello = () => {
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
        "service_9qa8bxg",
        "template_1n5ibqf",
        form.current,
        "DVJqTGNmaU58-639g"
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
            <li><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="gold" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
              </svg></li>&nbsp;&nbsp;
            <li> <h5 className="text-light">Crypto Explorer &nbsp;<small>v4.0</small></h5></li>
          </ul>
        </div>
      </div>
      <div className="nav-item float-end">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
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
<div className="centered"><font face="Verdana"size={4} color="white">Welcome To Crypto Explorer,</font><br /><font face="Times New Roman" size={5} color="white">This is a Rank and Price tracker that monitors and Provide information<br />  about the Current details of different digital currencies and tokens.<br/><br/>This have the details of more than 1100+ Coins and Tokens.<br/>You can also add your Most Needed cryptos or tokens into your WishList.</font></div>
    <a href="https://maheshkumarkottakota.netlify.app/" target="_blank"><button className="but1"><small>Developer Info</small></button></a>
</div>
{/* <footer className='overlay' style={{position:"absolute",bottom:"0",width:"94%",height:"70px"}}>
  <div className='float-end'>
      <button className='btn btn-primary' style={{borderRadius:"40%"}}>Help!</button>
  </div>
</footer> */}
</div>
  )
}

export default Hello
