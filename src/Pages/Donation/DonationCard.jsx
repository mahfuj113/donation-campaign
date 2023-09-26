import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonationCard = ({donation}) => {
    const {id,image,category_name,title,price,category_bg,card_bg,text_bg} = donation;
  return (
    <div className='md:flex'>
            <img className='w-full flex-1 lg:w-[220px] h-[200px] rounded-none rounded-l-lg' src={image} alt="" />
        <div className='flex-1 rounded-r-lg pl-6' style={{backgroundColor:`${card_bg}`}}>
            <h1 style={{color:`${text_bg}`, backgroundColor:`${category_bg}`}} className='text-sm font-normal px-[10px] py-1 w-[80px] rounded mb-2 md:mt-6'>{category_name}</h1>
            <h1 className='text-2xl font-semibold mb-2'>{title}</h1>
            <p style={{color:`${text_bg}`}} className='text-base font-semibold mb-5'>{price}</p>
            <Link to={`/categories/${id}`}><button style={{backgroundColor:`${text_bg}`}} className='px-4 py-2 rounded text-[#FFF] '>View Details</button></Link>
        </div>
    </div>
  )
}

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
}

export default DonationCard