import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Developer name="Antar" lan="C++"></Developer>
      <Developer name="Jantar" lan="Python"></Developer>
      <Developer name="Montar" lan="Java"></Developer>
      <Person></Person>
    </>
    
  )
}

function Person()
{
  return (
    <p>I am a person</p>
  )
}

function Developer(pro)
{
  return (
    <div style={
      {
        border: '2px solid white ',
        borderRadius: '20px',
        marginBottom: '5px'
      }
    }>
      <h3>Developer: {pro.name}</h3>
      <p>Language: {pro.lan}</p>
    </div>
  )
}

export default App
