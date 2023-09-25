import PropTypes from 'prop-types'

const CategoryCard = ({category}) => {
    console.log(category);
    // const {id} = category;
  return (
    <div>CategoryCard</div>
  )
}

CategoryCard.propTypes = {
    category: PropTypes.object,
}

export default CategoryCard