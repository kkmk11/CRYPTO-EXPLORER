import React from 'react'
import axios from 'axios';
import ImgCard from './ImgCard';
import { auth } from './Firebase';

const Home = ({presentUser}) => {
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
  return (
    <>
          <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-2 pb-1 navbar-fixed-top">
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
              <li><button className='btn btn-dark' onClick={()=>auth.signOut()}>LogOut</button></li>
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
