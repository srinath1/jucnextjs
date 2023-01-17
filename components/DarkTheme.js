import React from 'react'

const DarkTheme = () => {
  return (
    <style jsx global>
    {`
    :root{
    --background-color:black;
    --text-color:white;
    --text-color:yellow;
}`}</style>
  )
}

export default DarkTheme