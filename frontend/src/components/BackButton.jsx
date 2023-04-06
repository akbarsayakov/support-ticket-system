import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BackButton = ({ url }) => {
  return (
    <Link to={url} className='btn brn-reverse btn-back'>
      <FaArrowCircleLeft />
      Back
    </Link>
  )
}

export default BackButton
