import React, { useState } from 'react';
import { GrFavorite } from "react-icons/gr";

const Item = ({item,handleFavouriteItems}) => {
      const [liked,setLiked]=useState(false)

      
  const handleLikedItem=()=>{
          setLiked(!liked)

  }
    return (
        <div>
        
        <div className="card bg-base-100 w-96 shadow-sm mb-7">
  <figure>
    <img className='w-100 h-100 object-cover'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p className='text-lg'>CurrentBidPrice: {item.currentBidPrice}</p>
    <p className='text-lg'>TimeLeft: {item.timeLeft}</p>
    <p className='text-lg'>BidsCount:{item.bidsCount}</p>
    <div className="card-actions justify-end">
      <button onClick={() => {
    handleFavouriteItems(item, item.currentBidPrice, item.id);
    handleLikedItem();
  }}
       className={`p-2 rounded-full border border-slate-200 hover:bg-slate-50 ${
        liked ? "text-red-500" : "text-slate-600"
      }`} > <GrFavorite  /></button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Item;