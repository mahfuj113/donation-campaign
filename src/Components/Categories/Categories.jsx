import PropTypes from 'prop-types'
import CategoriesCard from './CategoriesCard'

const Categories = ({categories}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 mb-44'>
        {
            categories.map(category => <CategoriesCard key={category.id} category={category}></CategoriesCard>)
        }
    </div>
  )
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default Categories