import React from 'react';

const Navbar = () => {
    return (
        <div>
  <div className="navbar bg-base-100 shadow-sm px-20">
    <div className="flex-1 flex items-center gap-x-6">
      <a className=" text-2xl font-semibold">
        <span className='text-blue-800'> Auction</span><span className="text-yellow-400">Gallery</span>
      </a>

      <div className="flex items-center gap-x-10 ml-80 justify-center">
        <a className="cursor-pointer">Home</a>
        <a className="cursor-pointer">Auction</a>
        <a className="cursor-pointer">Categories</a>
        <a className="cursor-pointer">How it works</a>
      </div>
    </div>

    <div className="flex-none flex items-center gap-x-4">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0
                 0a2 2 0 100 4 2 2 0 000-4zm-8
                 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
        >
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Navbar;