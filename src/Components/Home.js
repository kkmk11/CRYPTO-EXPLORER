import React,{useState,useRef} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import ImgCard from './ImgCard';
import { auth } from './Firebase';
import firebaseDB from './Firebase';
import { Modal} from 'react-bootstrap';
import emailjs from "@emailjs/browser";

const Home = ({presentUser}) => {
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
    const navigate = useNavigate();
    const [search,setSearch]=React.useState('');
    const [data,setData]=React.useState([]);
    const [getData,setGetData]=React.useState({})
    const handler=e=>{
        setSearch(e.target.value);
    }
    const navigateWish = () => {
      navigate('/wishlist');
    };
    const navigateDiscussions=()=>{
      navigate('/discussions');
    }
    let ans="",s=presentUser.email;
    for(let i=0;i<s.length;i++){
      if(s[i]!='@'){
        ans=ans+s[i];
      }
      else{
        break;
      }
    }
    React.useEffect(()=>{
      axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=1200').then(
          res=>setData(res.data.coins)
      )
      firebaseDB.child(ans).on('value',details=>{
        if(details.val()==null || details.val()==undefined){
          return;
        }
        else{
          setGetData(details.val());
        }
      })
  },[])
  var count=Object.keys(getData).length;
  return (
    <>
          <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-3 pb-2 navbar-fixed-top">
        <div className="container">
          <div className="nav-item float-start">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="white" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                  </svg></li>&nbsp;&nbsp;
                <li> <h5 className="text-light">{presentUser.email}</h5></li>
              </ul>
            </div>
          </div>
          <div className="nav-item float-end">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto px-3">
              <li><button className='btn btn-outline-warning' onClick={navigateWish}>WishList<span className="position-absolute badge rounded-pill bg-danger text-light">
              {count}
  </span></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
  <button  className="btn btn-outline-warning" onClick={handleModalOpen}>Contact Me</button>
                <Modal show={showModal} onHide={handleModalClose} style={{height:"550px"}}>
                  <Modal.Header className='bg-dark text-light'>
                    <Modal.Title>
                      <h4>Hello User &#128516;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button className='btn btn-success' onClick={handleModalClose}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button>
                      </h4>
                    </Modal.Title>
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
                      <textarea name="message" placeholder='Enter the Message here...' cols={55} rows={3}/><br/>
                      <button className='btn btn-success justify-content-center' type="submit">Send</button>
                    </form>
                  </Modal.Body>
                  </p>
                </Modal>
  {/* <li class="nav-item dropdown">
        <button className="nav-link dropdown-toggle btn btn-outline-warning btn-sm text-light"  data-toggle="dropdown" aria-haspopup="true"
             aria-expanded="false">
          Others
        </button>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" onClick={navigateDiscussions}>Discussions</a>
              {/* <Link to="#" className="dropdown-item" onClick={handleModalOpen}>Contact Me</Link>
                <Modal show={showModal} onHide={handleModalClose} style={{height:"550px"}}>
                  <Modal.Header className='bg-dark text-light'>
                    <Modal.Title>
                      <h4>Hello User &#128516;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button className='btn btn-success' onClick={handleModalClose}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button>
                      </h4>
                    </Modal.Title>
                  </Modal.Header>
                  <p className='contact'>
                  <p>&nbsp;&nbsp; Feel Free to Contact me whenever you , </p>
                      <ul>
                        <li>
                          <small>Need help !</small>
                        </li>
                        <li>
                          <small>To Share your ideas or Suggestions to make this website look more User Friendly !</small>
                        </li>
                        <li>
                          <small>And If found any Bug? Let me know !</small>
                        </li>
                      </ul>
                  <Modal.Body>
                    <form ref={form} onSubmit={sendEmail}>
                      <input className='input2' type="text" name="user_name" placeholder='Your Name' /><br/>
                      <input className='input2' type="email" name="user_email" placeholder='Your Email id' /><br/>
                      <textarea name="message" placeholder='Enter the Message here...' cols={55} rows={3}/><br/>
                      <button className='btn btn-success justify-content-center' type="submit">Send</button>
                    </form>
                  </Modal.Body>
                  </p>
                </Modal> 
           <a className="dropdown-item" href="#">Contact</a>
        </div>
      </li> */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button className='btn btn-outline-light' onClick={()=>auth.signOut()}>LogOut</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
    <div className="header">
      <input className='input1' value={search} onChange={handler} placeholder="Search for a Crypto"/>
    </div>
    {
        data.length>0 &&
        <div className='grid-container justify-content-center'>
            {data.filter(crypto =>
            crypto.name.toLowerCase().includes(search.toLowerCase())).map(index=>
                <div >
                    <ImgCard
                    emailid={presentUser.email}
                name={index.name} rank={index.rank} price={index.price}
                marketCap={index.marketCap} key={index.id} url={index.icon}
                />
                </div>

                )}
        </div>
    }
    </>
  )
}

export default Home
