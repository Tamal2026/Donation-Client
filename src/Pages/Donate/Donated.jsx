/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonation from "./SingleDonation";




// import SingleDonation from "./SingleDonation";

const Donated = () => {
    const [donation,setdonation] = useState()
const {id} = useParams();

const donations = useLoaderData();
console.log(donations);

useEffect(()=>{
const findDonation = donations.find(donation => donation.id ==id)
setdonation(findDonation)
},[donations,id]);
console.log(donation);
    return (
        <div >
         <SingleDonation donation={donation}></SingleDonation>

        </div>
    );
};

export default Donated;