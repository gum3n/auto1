import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Pagination = ({ pagesCount, activePage }) => {
  const pages = new Array(pagesCount).fill(0).map((a, i) => i + 1)

  return (
    <ul className='pagination'>
      {activePage > 1 &&
       <li><Link to={'/?page=' + (activePage - 1)}>previous</Link></li>
      }

      {pages.map(page =>
        <li key={page}>
          {page === activePage ?
           <span>{page}</span> :
           <Link to={'/?page=' + page}>{page}</Link>}
        </li>
      )}

      {activePage < pagesCount &&
       <li><Link to={'/?page=' + (activePage + 1)}>next</Link></li>
      }
    </ul>
  )
}

Pagination.propTypes = {
  pagesCount : PropTypes.number.isRequired,
  activePage : PropTypes.number.isRequired,
}

export default Pagination
