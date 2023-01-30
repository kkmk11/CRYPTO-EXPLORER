import React from 'react'

const ImgCard = (props) => {
  return (
    <>
    <img  width={64} height={64} src={props.url} alt={props.name} />
    <b><p className='text-warning'>{props.name}</p></b>
    <p>Rank : {props.rank}</p>
    <p>Price in $ : {props.price}</p>
    <p>Price in ₹ : {props.price*81.54}</p>
    <p>Market Cap : {props.marketCap}</p>
    </>
  )
}

export default ImgCard
