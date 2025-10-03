
import { useState } from 'react'
import './App.css'
import Activities from './components/activities/Activities'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { GrFavorite } from "react-icons/gr";
import { ToastContainer, Bounce ,toast} from "react-toastify";
import { CiCircleRemove } from "react-icons/ci";


function App() {

  const [favourite,setFavourite]=useState([])
  const [total,setTotal]=useState(0)




  const handleFavouriteItems=(item,price)=>{
    toast('Favourite item is added', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    setFavourite([...favourite,item])
    HandleTotal(price)

  }


  const HandleTotal=(price)=>{
    const newTotal=total+price;
    setTotal(newTotal)
   //console.log(total)
  }



  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='m-20 '>
      <h1 className='text-3xl font-semibold pb-2'>Active Auction</h1>
      <p>Discover and bid on extraordinary items</p>
      </div>

      <div className="main-container mx-20 flex">

        {/* {items conatainer} */}

        <div className="left-container w-[70%]">
          <Activities handleFavouriteItems={handleFavouriteItems}></Activities>

        </div>


        {/* {favourite container} */}


        <div className="right-container w-[30%]">

<div className="card card-dash bg-base-100 w-96 h-auto shadow-2xl text-center items-center">
  <div className="">
   
    <h2 className="text-2xl font-bold border-b pb-2  flex items-center gap-2 pt-3">
  <GrFavorite  />
  Favourite Items
</h2>
  <div className=''>
  {total==0 && (
    <>
      <h4 className="text-lg font-semibold pt-10">No Favourite Items</h4>
      <p className="pb-20">
        Click the heart icon on any item <br /> to add it to your favorites
      </p>
    </>
  )}
    
    {
      favourite.map(fav=><div  className="border flex gap-3 text-sm m-5 p-3 rounded">
    <h2 className="font-semibold">{fav.title}</h2>
    <p> CurrentBidPrice: ${fav.currentBidPrice}</p>
    <p> BidCount: {fav.bidsCount}</p>
      <button ><CiCircleRemove size={25} /> </button>
</div>)
    }
    
  </div >
    <h3 className=' border-t text-2xl font-semibold pt-2'>Total bid amount: <span className='justify-end'> $ {total}</span></h3>
  </div>
</div>
        </div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
      </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
