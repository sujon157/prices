
import LineChart from './components/LineChart/LineChart'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Phones from './components/Phones/Phones'

function App() {


  return (
    <div className='bg-black'>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-700'>Vite + React</h1>

      <PriceOptions></PriceOptions>
      <LineChart> </LineChart>
      <Phones></Phones>

    </div>
  )
}


export default App
