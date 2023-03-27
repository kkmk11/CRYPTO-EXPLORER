import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom';
import firebaseDB from './Firebase';
import Wishcard from './Wishcard';
import axios from 'axios';
import empty from './empty.jpeg'

const Wishlist = ({presentUser}) => {
    const navigate = useNavigate();
    const navigateWish = () => {
        navigate('/wishlist');
    }
    const navigatehome = () => {
        navigate('/home');
    }
    const [data,setData]=React.useState([]);
    const [getData,setGetData]=useState({});
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
            setGetData(details.val());
        })
    },[])
    const deleteHandler=key=>{  
      firebaseDB.child(`${ans}/${key}`).remove(
        err=>{
          if(err){
            console.log(err)
          }
        }
      )
      }
  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-3 pb-2.5 navbar-fixed-top">
        <div className="container">
          <div className="nav-item float-start">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li><svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="gold" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                  </svg></li>&nbsp;&nbsp;
                <li> <h5 className="text-light">My WishList</h5></li>
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
        {
            getData && data.length>0 ?
            <div className='grid-container justify-content-cente'>
            {
            Object.keys(getData).map(key=>data.filter(crypto=>(crypto.name)==(getData[key].cryptoname)).map(index=>
                    <div >
                        <Wishcard
                        emailid={presentUser.email}
                    name={index.name} rank={index.rank} price={index.price}
                    marketCap={index.marketCap} key={index.id} url={index.icon}
                    hour={index.priceChange1h}
                    day={index.priceChange1d}
                    week={index.priceChange1w}
                    />
                    <abbr title="Remove it from Your WishList"><button onClick={()=> deleteHandler(key)} className='btn btn-warning'>Remove</button></abbr>
                    </div>
        
                )
              )
            }
            </div>
            :
            <div className='container'>
              <div className='justify-content-center'>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <img className="rounded img-thumbnail" style={{backgroundColor: 'rgba(245, 245, 245, 0.3)',marginLeft:"500px",marginTop:"15px"}} src={empty} alt="Empty" width="270px" height="110px" />
            </div>
            </div>
        }
    </div>
  )
}

export default Wishlist
