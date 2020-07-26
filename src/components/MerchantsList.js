import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Loading from './Loading.js'
import MerchantListItem from './MerchantListItem.js'
import Pagination from './Pagination.js'

const mapStateToProps = (state, ownProps) => {
  // Support pagination
  // TODO for clarity this should be a separate function
  let merchants = state.merchants
  const merchantsPerPage = 10   // TODO some config file for sutff like that?
  const pagesCount = Math.ceil(merchants.length / merchantsPerPage)
  const showPagination = pagesCount > 1
  let activePage = 1

  if(showPagination) {
    const searchParams = new URLSearchParams(ownProps.location.search)

    if(searchParams.has('page'))
      activePage = Math.min(pagesCount, Math.max(1, +searchParams.get('page')))

    const start = (activePage - 1) * merchantsPerPage
    const end = Math.min(start + merchantsPerPage, merchants.length)
    merchants = merchants.slice(start, end)
  }

  return {
    pending: state.pending.includes('MERCHANTS_LIST'),
    merchants,
    showPagination,
    pagesCount,
    activePage
  }
}

const MarchentsList = (props) => {
  if(props.pending) return <Loading />

  return (
    <>
      <Link className='add-merchant' to='/add'>Add Merchant</Link>

      <ol className='merchants-list'>
        {props.merchants.map(merchant =>
          <MerchantListItem
            key={merchant.id}
            id={merchant.id}
            hasPremium={merchant.hasPremium}
            avatarUrl={merchant.avatarUrl}
            firstname={merchant.firstname}
            lastname={merchant.lastname}
          />
        )}
      </ol>

      {props.showPagination &&
       <Pagination
         pagesCount={props.pagesCount}
         activePage={props.activePage}
       />
      }
    </>
)
}

MarchentsList.propTypes = {
  showPagination : PropTypes.bool.isRequired,
  pagesCount     : PropTypes.number.isRequired,
  activePage     : PropTypes.number.isRequired,

  merchants : PropTypes.arrayOf(PropTypes.shape({
    id         : PropTypes.string.isRequired,
    hasPremium : PropTypes.bool.isRequired,
    avatarUrl  : PropTypes.string.isRequired,
    firstname  : PropTypes.string.isRequired,
    lastname   : PropTypes.string.isRequired,
  })).isRequired
}

export default connect(mapStateToProps)(MarchentsList)
