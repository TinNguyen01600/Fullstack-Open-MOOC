import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
            <h1>Give feedback</h1>
            <div>
                <button onClick={() => setGood(good+1)}>good</button>
                <button onClick={() => setNeutral(neutral+1)}>neutral</button>
                <button onClick={() => setBad(bad+1)}>bad</button>
            </div>
            <h2>Statistics</h2>
            <div>Good {good}</div>
            <div>Neutral {neutral}</div>
            <div>Bad {bad}</div>
        </>
    )
}

export default App
