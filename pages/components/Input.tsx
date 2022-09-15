import React from 'react'

type InputProps = {
    props: any;
}

export default function Input(props: InputProps){
  return (
    <input {...props}
    className="outline-none border-gray-300  border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
    />
  )
}
