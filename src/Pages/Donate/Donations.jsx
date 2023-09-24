/* eslint-disable react/prop-types */
import DonateCard from "./DonateCard";


const Donations = ({donations}) => {
  
    return (
        <div >
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    donations?.map(donation => <DonateCard donation={donation} key={donation.id}></DonateCard> )
                }
            </div>
        </div>
    );
};

export default Donations;