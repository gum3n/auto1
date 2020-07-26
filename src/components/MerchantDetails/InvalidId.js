import React from 'react'
import { Link } from 'react-router-dom'
import GoBack from './../GoBack.js'

export default function InvalidId() {
  return (
    <>
      <p><strong>Invalid merchant id</strong></p>
      <GoBack />
    </>
  )
}
