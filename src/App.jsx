import './App.css'
import Table from './Components/Table/Table'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { GiChessKing } from "react-icons/gi";
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import coverImage from './assets/Banner-min.jpg';
// 

function App() {

  const [product, setproduct] = useState([]);
  const [price, setprice] = useState(0);

  const notify = (data) => toast(<span className='font-semibold text-green-600'>{data.title} <span className='text-black'>has been removed from your favorites 😢</span> </span>);

  const handleaddItems = (data) => {
    const newArray = [...product, data];
    setproduct(newArray);
  }

  const handlePrice = (Price) => {
    const num = parseInt(Price.replace(/[^0-9]/g, ""));
    setprice(price + num);
  }

  const removeItem = (data) => {
    const id = data.id;
    const newArray = product.filter((item) => item.id !== id);
    setproduct(newArray);
    const num = parseInt(data.currentBidPrice.replace(/[^0-9]/g, ""));
    setprice(price - num);
    notify(data);
  }

  return (

    <div>
      <Navbar />
      <div className='flex flex-col justify-center w-full h-[36rem] bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(${coverImage})` }}>
        <h3 className='text-white text-5xl font-semibold ml-[141px]'>Bid on Unique Items from <br /> Around the World</h3>
        <p className='text-white font-light text-2xl mt-[20px] mb-[32px] ml-[141px]'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
        <button className="btn bg-white rounded-full text-lg w-[14rem] ml-[141px]">Explore Auctions</button>
      </div>
      <div className='flex gap-3 justify-between items-start p-[3rem]'>
      <div>
  <Table className="w-[70%]" handleaddItems={handleaddItems} handlePrice={handlePrice} product={product} />
  <div className={`flex items-center justify-center gap-3 rounded-3xl text-xl font-semibold bg-white p-4 ${product.length === 7 ? 'block' : 'hidden'} mt-10`}> <GiChessKing fill='green' size={35} /> Wow! You have hitted the Maximum Bit !!!</div>
</div>


<div className='rounded-3xl bg-white w-[30%]'>
  <div className='flex justify-center items-center gap-2 px-[4rem] py-[1.5rem] border-b-2 border-[#DCE5F3]'>
    <FaRegHeart size={20} /> 
    <p className='font-medium text-3xl'>Favourite Items</p>

  </div>

  <div className={`text-center py-[3rem] px-6 border-b-2 border-[#DCE5F3] ${product.length <= 0 ? 'block' : 'hidden'}`}>
    <h3 className='font-medium text-[1.625rem]'>No favorites yet</h3>
    <p className='font-normal text-base'>Click the heart icon on any item to add it to your favorites</p>
  </div>

  <div>
    {
      product.map((data) => {
        return (
          <div key={data.id} className='flex gap-3 py-4 px-8 border-t-2 border-[#DCE5F3] text-left text-lg'>
            <div>
              <img className='w-[5rem] h-[5rem]' src={data.image} alt="" />
            </div>
            <div className='w-full'>
              <div className='flex justify-between gap-2 items-center w-full'>
                <p>{data.title}</p>
                <button onClick={()=>removeItem(data)}><MdCancel size={20} /></button>
              </div>

              <div className='flex gap-9'>
                <p className='text-lg'>{data.currentBidPrice}</p>
                <p>Bids: {data.bidsCount}</p>
              </div>
            </div>
            
          </div>
        )
      })
    }
  </div>

  <div className='flex justify-between p-[2rem] text-2xl font-medium'>
    <p>Total bids Amount</p>
    <p>$ {price}</p>
  </div>
</div>
<ToastContainer />
      </div>

      <div className='text-center bg-white p-11'>
        <span className="text-[#003EA4] font-medium text-3xl">Auction</span>
        <span className="text-[#FFD337] font-semibold text-3xl">Gallery</span>

        <p><span className='mx-[1.125rem] text-xl'>Bid.</span> <span className='mx-[1.125rem] text-xl'>Win.</span> <span className='mx-[1.125rem] text-xl'>Own.</span></p>

        <ul className="menu menu-horizontal px-1 text-lg">
          <li className="mx-7">
            <a>Home</a>
          </li>
          <li className="mx-7">
            <a>Auctions</a>
          </li>
          <li className="mx-7">
            <a>Categories</a>
          </li>
          <li className="mx-7">
            <a>How to works</a>
          </li>
        </ul>

        <p className='text-lg'>© 2025 AuctionHub. All rights reserved.</p>
      </div>
      </div> 
      
    
  )
}

export default App
