
import { Suspense } from 'react';
import './App.css'
import './index.css'; 
import Countries from './Components/Countries/countries'


const countriesPromise = fetch('https://restcountries.com/v3.1/all').then(res => res.json());
function App() {
  

  return (
    <>
      <h1 className='font-bold text-5xl poppins'>React World On the Go....</h1>


      <Suspense fallback={<h3 className='font-semibold text-3xl poppins'>Loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
