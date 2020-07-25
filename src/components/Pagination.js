import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Pagination = ({ pagesCount, activePage }) => {
  const pages = new Array(pagesCount).fill(0).map((a, i) => i + 1)

  return (
    <ul>
      {activePage > 1 &&
       <li><Link to={'/?page=' + (activePage - 1)}>{'<'}</Link></li>
      }

      {pages.map(page =>
        <li key={page}>
          <Link
            to={'/?page=' + page}
            style={{ fontWeight: page === activePage ? 'bold' : 'normal' }}
          >
            {page}
          </Link>
        </li>
      )}

      {activePage < pagesCount &&
       <li><Link to={'/?page=' + (activePage + 1)}>{'>'}</Link></li>
      }
    </ul>
  )
}

Pagination.propTypes = {
  pagesCount : PropTypes.number.isRequired,
  activePage : PropTypes.number.isRequired,
}

export default Pagination
