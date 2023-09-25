import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    const { id,image, title, category_name, category_bg, card_bg, text_bg } = category;
    const cardStyle = {
        backgroudColor: `${card_bg}`,
        textColor: `${text_bg}`,
    }
    console.log(cardStyle);
    return (
        <Link to={`/categories/${id}`}>
            <div>
                <img src={image} alt="" />
                <div style={{backgroundColor:`${card_bg}`}} className='pl-4 pt-4 rounded-b-lg'>
                    <h2 style={{backgroundColor: `${category_bg}`, color:`${text_bg}`}} className='text-sm font-medium px-[10px] py-1 w-[80px] rounded mb-2'>{category_name}</h2>
                    <p style={{color:`${text_bg}`}} className='text-xl font-semibold pb-4'>{title}</p>
                </div>
            </div>
        </Link>
    )
}

CategoriesCard.propTypes = {
    category: PropTypes.object.isRequired,
}

export default CategoriesCard