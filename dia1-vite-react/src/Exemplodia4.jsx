import './App.css'
import { useState } from 'react'

export default function Exemplodia4(){
    
    const [count, setCount] = useState(0)

    const [valueInput, setValueInput] = useState('')
    const onChangeInput = (event) => {
        setValueInput(event.target.value)
    }
    
    // let count = 0

    const add = () => {
        setCount(count + 1)
        console.log(count)
        // count = count + 1
    }


    return (
        <div className="App">
            <h1>Samuel Lopes</h1>
            <h3>{count}</h3>
            <button onClick={add}>Incrementar</button>
            <div>
                <input type="text"  onChange={onChangeInput}/>
                <h4>{valueInput}</h4>
            </div>
        </div>
    )
}