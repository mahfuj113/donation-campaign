import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationCard = ({donation}) => {
    const {id,image,category_name,title,price} = donation
    console.log(donation);
  return (
    <div className='md:flex'>
            <img className='w-full flex-1 lg:w-[220px] h-[200px] rounded-none rounded-l-lg' src={image} alt="" />
        <div className='flex-1'>
            <h1 className='text-sm font-normal'>{category_name}</h1>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='text-base font-semibold'>{price}</p>
            <Link to={`/categories/${id}`}><button className='btn'>View Details</button></Link>
        </div>
    </div>
  )
}

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
}

export default DonationCard