import React, {useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1)
    };

    const handleDecrement = () => {
        setCount(count-1)
    };

  return (
    <div>
        <h2>Compteur : {count}</h2>
        <button onClick={handleIncrement}>Augmenter</button>
        <button onClick={handleDecrement}>Dimminuer</button>
    </div>
  )
}
