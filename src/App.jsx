import { useState } from 'react'
import samosa from './assets/samosa.png'

function App() {
const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white'>
      <h2 className='text-4xl pb-6'>Samosa Selector</h2>
      <p className='text-2xl'>Count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)} className='pt-10 pb-10'>
        <img src={samosa} alt="btn_pic" />
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
      <div className='flex gap-8 pt-20'>
        <div className='border p-8 text-center rounded-2xl'>
          <h3>Double Stuffed</h3>
          <p>2x per click</p>
          <button type="button" onClick={() => setCount(count + 10)} className="bg-gray-500 p-1 rounded-full mt-3">
            10 samosas
          </button>
        </div>
        <div className='border p-8 text-center rounded-2xl'>
          <h3>Party Pack</h3>
          <p>5x per click</p>
          <button type="button" onClick={() => setCount(count + 100)} className="bg-gray-500 p-1 rounded-full mt-3">
            100 samosas
          </button>
        </div>
        <div className='border p-8 text-center rounded-2xl'>
          <h3>Full Feast</h3>
          <p>10x per click</p>
          <button type="button" onClick={() => setCount(count + 1000)} className="bg-gray-500 p-1 rounded-full mt-3">
            1000 samosas
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
