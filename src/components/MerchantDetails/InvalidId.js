import React from 'react'
import { Link } from 'react-router-dom'

export default function InvalidId() {
  return (
    <>
      <p><strong>Invalid merchant id</strong></p>
      <Link to="/">Go Back</Link>
    </>
  )
}
