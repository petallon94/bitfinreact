import React from "react"

function Profiletest({ user }) {
  const { memailid, mpw, mnick } = user || {}
  return (
    <>
      <h1>Profile</h1>
      <dt>Email</dt>
      <dd>{memailid}</dd>
      <dt>Password</dt>
      <dd>{mpw}</dd>
      <dt>Name</dt>
      <dd>{mnick}</dd>
    </>
  )
}

export default Profiletest