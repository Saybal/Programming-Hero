import Counter from './counter';
import './App.css'
import Users from './users';
import { Suspense } from 'react';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())


function App() {

  const handleClick = () =>
  {
    alert('Button Clicked!')
    console.log('Button Clicked!')
  }

  const addfive = (num) =>
  {
    alert(`Button Clicked ${num + 5}`)
  }
  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetch={fetchUsers}></Users>
      </Suspense>
      <Counter></Counter>
      <button onClick={handleClick}>CLick Me</button>
      <button onClick={()=>alert("Clicked!!")}>CLick Me</button>
      <button onClick={()=>addfive(10)}>CLick Me for add</button>
     
    </>
  )
}

export default App
