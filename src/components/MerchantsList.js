import React from 'react'
import { connect } from 'react-redux'
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

  return { merchants, showPagination, pagesCount, activePage }
}

const MarchentsList = (props) => {
  return (
    <React.Fragment>
      <ol>
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
    </React.Fragment>
  )
}

export default connect(mapStateToProps)(MarchentsList)
