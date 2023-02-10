import React,{useState} from 'react'
import firebaseDB from './Firebase';

const ImgCard = (props) => {
  const [crypto,setCrypto]=useState({
    cryptoname:props.name,
  })
  const submitHandler=async(e)=>{
    e.preventDefault();
    let res="",s=props.emailid;
    for(let i=0;i<s.length;i++){
      if(s[i]!='@'){
        res=res+s[i];
      }
      else{
        break;
      }
    }
    var dataAdded=await firebaseDB.child(res).push(
      crypto,
      err=>{
        if(err){
          console.log(err);
        }
        else{
          window.alert(crypto.cryptoname+ " has been added into Your Wishlist");
        }
      }
    )
  }
  return (
    <>
    <img  width={64} height={64} src={props.url} alt={props.name} />
    <b><p className='text-warning'>{props.name}</p></b>
    <p>Rank : {props.rank}</p>
    <p>Price in $ : {props.price}</p>
    <p>Price in ₹ : {props.price*81.58}</p>
    <p>Market Cap : {props.marketCap}</p>
    <abbr title="Add it to Your WishList"><button onClick={submitHandler} className='btn btn-warning'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-postcard-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm6 2.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622ZM2 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
</svg></button></abbr>
    </>
  )
}

export default ImgCard
