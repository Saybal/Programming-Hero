
import './App.css'
import { add as Add , diff as Diff , mult , divide as div } from './utiliti/Math/Math'

function App() {

  const sum = Add(2,4);
  const diff = Diff(12, 7);
  const product = mult(3, 5);
  const quotient = div(10, 2);

      console.log(sum, diff, product, quotient);
      
  return (
    <>
      <h1>Vite + React</h1>

      
    </>
  )
}

export default App
