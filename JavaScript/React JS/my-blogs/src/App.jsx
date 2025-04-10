
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'



function App() {

  const [bookmarked, setbookmarked] = useState([]);
  const [time, settime] = useState(0);

  const handleBookmarks = (blog) =>
  {
    const newArray = [...bookmarked, blog];
    setbookmarked(newArray);
  }

  const markedasRead = (Time, id) =>
  {
    settime(time + Time)
    const remainingbookmarks = bookmarked.filter((mark) => mark.id !== id);
    setbookmarked(remainingbookmarks);
  }
 

  return (
    <>
      <Navbar></Navbar>
     
      <div className='flex'>
        <div className='w-[80%]'>
          <Blogs handleBookmarks={handleBookmarks} markedasRead={markedasRead}></Blogs>
        </div>
        <div className='w-[20%]'>
          <h1>Reading Time: {time}</h1>
          <h1>Bookmark Count: {bookmarked.length}</h1>

          <div className={`bg-gray-200 rounded-2xl p-5 ${bookmarked.length > 0 ? 'block' : 'hidden'}`}>
            {
              bookmarked.map((marked) => <p className='mb-2' key={marked.id} >{marked.title}</p>)
            }
          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
