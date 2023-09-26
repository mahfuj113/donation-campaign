import PropTypes from 'prop-types'
import Swal from 'sweetalert2'

const CategoryCard = ({ category }) => {

    const { id, image, title, description, text_bg } = category;
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
                localStorage.setItem("donation", JSON.stringify(addedDonationArray));
                Swal.fire({
                    title: 'Good Job',
                    text: 'Donation Completed',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            }
            else {
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
        <div className='lg:w-[1320px] h-[700px] relative mx-auto'>
            <img src={image} className='w-full h-[700px] rounded-lg' alt="" />
            <div className='h-32 w-full absolute bottom-0 bg-[#0B0B0B7F] flex items-center'>
                <button style={{ backgroundColor: `${text_bg}` }} onClick={handleAddToDonation} className='bg-[#FF444A] ml-9 px-6 py-4 text-[#FFF] text-xl font-semibold rounded'>Donate $290</button>
            </div>
            <h1 className='text-4xl font-bold mb-6 mt-14'>{title}</h1>
            <p className='text-base font-normal pb-28'>{description}</p>
        </div>
    )
}

CategoryCard.propTypes = {
    category: PropTypes.object,
}

export default CategoryCard