/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Donated = () => {
    // eslint-disable-next-line no-unused-vars
    const [phone,setphone] = useState()
    const {id} = useParams();
const donations = useLoaderData();


useEffect(()=>{
// eslint-disable-next-line no-unused-vars
const findDonation = donations.find(donation => phone.id === id)
console.log(findDonation)
},[id,donations]);

    return (
        <div>
            <div>Phone</div>
        </div>
    );
};

export default Donated;