import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination({ pagesCount, activePage}) {
  const pages = new Array(pagesCount).fill(0).map((a, i) => i + 1)

  return (
    <ul>
      {pages.map(page => (
        <li key={page}>
          <Link
            to={'/?page=' + (page)}
            style={{ fontWeight: page === activePage ? 'bold' : 'normal' }}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  )
}
