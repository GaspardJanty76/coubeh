import React, { useEffect, useState} from 'react'

export default function Timer() {

    const [time, setTime] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setTime(prevTime => prevTime + 1)
        }, 1000)
    }, {})

  return (
    <div>
        <h2>Temps écouley : {time} secondes</h2>
    </div>
  )
}
