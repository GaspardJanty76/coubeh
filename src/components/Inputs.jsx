import React from 'react'

export default function Inputs({placeholder, type, value}) {
  return (
    <div>
        <input
        value={value}
        type={type}
        placeholder={placeholder}
        />
    </div>
  )
}
