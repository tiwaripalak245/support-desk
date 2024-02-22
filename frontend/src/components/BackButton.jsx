import React from 'react'
import '../Styles/BackButton.css'
import { Link } from 'react-router-dom'

const BackButton = ({location}) => {
  return (
<button className='back'>
<Link to={location}> Back
</Link>
</button>
  )
}

export default BackButton
 