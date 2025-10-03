import React from 'react';

const Banner = () => {
    return (
        <div className='banner bg-no-repeat w-full h-[700px] bg-center bg-cover'>
           <div className='px-20 pt-50'>
            <h1 className='text-4xl font-bold py-5 text-white'>Bid on Unique Items from <br /> Around the World</h1>
            <p className='py-5 text-lg text-gray-50'>Discover rare collectibles, luxury goods, and vintage <br />
            treasures in our curated auctions</p>
            <button className="btn px-10 rounded-4xl bg-white ">Explore Auction</button>
            </div> 
            
        </div>
    );
};

export default Banner;