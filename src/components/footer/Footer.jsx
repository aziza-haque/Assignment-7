import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer footer-horizontal footer-center bg-gray-50 p-30">
  <aside>
    <a className=" text-2xl font-semibold">
       <span className='text-blue-800'> Auction</span><span className="text-yellow-400">Gallery</span>
      </a>

      <div className="flex items-center gap-x-5  justify-center text-gray-500 my-1">
        <a className="cursor-pointer">Bid.</a>
        <a className="cursor-pointer">Win.</a>
        <a className="cursor-pointer">Own.</a>
      </div>

      <div className="flex items-center gap-x-10  justify-center text-gray-500 my-2">
        <a className="cursor-pointer">Home</a>
        <a className="cursor-pointer">Auction</a>
        <a className="cursor-pointer">Categories</a>
        <a className="cursor-pointer">How it works</a>
      </div>

    <p> © 2025AuctionHub {new Date().getFullYear()}. All right reserved</p>
  </aside>
</footer>

        </div>
    );
};

export default Footer;