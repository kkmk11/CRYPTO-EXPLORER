import React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import ImgCard from './ImgCard';
import { auth } from './Firebase';

const Home = ({presentUser}) => {
    const navigate = useNavigate();
    const [search,setSearch]=React.useState('');
    const [data,setData]=React.useState([]);
    const handler=e=>{
        setSearch(e.target.value);
    }
    React.useEffect(()=>{
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=1200').then(
            res=>setData(res.data.coins)
        )
    },[])
    const navigateWish = () => {
      navigate('/wishlist');
    };
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
              <li><button className='btn btn-outline-warning' onClick={navigateWish}>WishList<span className="position-absolute badge rounded-pill bg-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-postcard-heart-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm6 2.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622ZM2 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
</svg>
  </span></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
              <li><button className='btn btn-outline-light' onClick={()=>auth.signOut()}>LogOut</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
    <div className="header">
      <input value={search} onChange={handler} placeholder="Search for a Crypto"/>
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
