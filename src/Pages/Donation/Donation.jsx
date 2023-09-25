import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem("donation"))
        if (donationItems) {
            setDonation(donationItems)
        }
        else {
            setNoFound("No Fata Found")
        }
    }, [])
    return (
        <div>
            {
                noFound && <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            }
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mx-[140px] items-center">
                {
                    isShow ? donation.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>) : (
                        donation.slice(0,4).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    )
                }
            </div>
            <div className=" mt-10 mb-36">
                {
                    donation.length >= 4 && (
                        <div className={isShow ? "hidden" : "text-center"}>
                            <button onClick={() => setIsShow(!isShow)} className="bg-[#009444] text-[#FFF] rounded-lg px-7 py-3">Show All</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Donation;