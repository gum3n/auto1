import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Show from './Show.js'
import Edit from './Edit.js'

const PersonalData = ({ merchant }) => {
  const [edit, setEdit] = useState(false)

  if(edit) return <Edit merchant={merchant} setEdit={setEdit} />
  else     return <Show merchant={merchant} setEdit={setEdit} />
}

PersonalData.propTypes = {
  merchant: PropTypes.object.isRequired,
}

export default PersonalData
