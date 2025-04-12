
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'


const bottlesPromise = fetch("../public/bottles.json").then(res => res.json());

function App() {

  return (
    <>
     
      <h1 className='poppins text-4xl font-bold'>Buy Awesome Water Bottle</h1>

      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}>

        </Bottles>
      </Suspense>
     
    </>
  )
}

export default App
