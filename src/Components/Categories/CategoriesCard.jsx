import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    const { id,image, title, category_name, category_bg, card_bg, text_bg } = category;
    return (
        <Link to={`/categories/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-sm font-medium">{category_name}</h2>
                    <p className='text-xl font-semibold bg-[${card_bg}]'>{title}</p>
                </div>
            </div>
        </Link>
    )
}

CategoriesCard.propTypes = {
    category: PropTypes.object.isRequired,
}

export default CategoriesCard