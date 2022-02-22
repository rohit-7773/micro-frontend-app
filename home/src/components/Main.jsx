import React from 'react'

const Main = () => {
  const userEmail = window.localStorage.userEmail || "there";
  return (
    <h1>{`Hello ${userEmail}`}</h1>
  )
}

export default Main