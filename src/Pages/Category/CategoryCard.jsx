import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

const CategoryCard = ({ category }) => {

    const { id, image, title, description } = category;
    const handleAddToDonation = () => {
        const addedDonationArray = []
        const donationItems = JSON.parse(localStorage.getItem("donation"))

        if (!donationItems) {
            addedDonationArray.push(category);
            localStorage.setItem("donation", JSON.stringify(addedDonationArray));
            Swal.fire({
                title: 'Good Job',
                text: 'Donation Completed',
                icon: 'success',
                confirmButtonText: 'Close'
            })
        }
        else {
            const isExists = donationItems.find(category => category.id === id)
            if (!isExists) {
                addedDonationArray.push(...donationItems, category);
                localStorage.setItem("donation",JSON.stringify(addedDonationArray));
                Swal.fire({
                    title: 'Good Job',
                    text: 'Donation Completed',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            }
            else{
                Swal.fire({
                    title: 'Already Exists',
                    text: 'No Duplicate',
                    icon: 'warning',
                    confirmButtonText: 'Close'
                })
            }
        }
    }
    return (
        <div className='w-[1320px] mx-auto mb-28'>
            <img src={image} className='w-full h-[700px] rounded-lg' alt="" />
            <div className='h-32 bg-[#0B0B0B7F] flex items-center'>
                {/* <div className='bg-[#0B0B0B7F] h-32 bg-opacity-50'> */}
                <button onClick={handleAddToDonation} className='btn'>Donate $290</button>
            </div>
            <h1 className='text-4xl font-bold mb-6'>{title}</h1>
            <p className='text-base font-normal'>{description}</p>
        </div>
    )
}

CategoryCard.propTypes = {
    category: PropTypes.object,
}

export default CategoryCard