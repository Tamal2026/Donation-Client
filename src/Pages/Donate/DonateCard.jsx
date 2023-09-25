/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";


const DonateCard = ({donation}) => {
    const {id,title,category,image,bgColor,titleColor} = donation || {};
    const cardStyle = {
      backgroundColor: bgColor || "#FFFFFF", // Use default color if bgColor is not defined
      color: titleColor || "#000000", // Use default color if titleColor is not defined
    }
  
    return (
        <div className="mt-12">
   
   <Link to={`/info/${id}`}>
             <div style={cardStyle} class="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={image}
      alt="ui/ux review check"
    />
  </div>
  <div class="p-6">
    <h4 class="block font-bold font-sans text-md leading-snug tracking-normal text-blue-gray-900 antialiased">
    {donation.category}
    </h4>
    <p style={cardStyle} class="mt-3 block font-sans text-2xl font-semibold leading-relaxed text-gray-700 antialiased">
    {donation.title}
    </p>
  </div>

</div>
</Link>
        </div>
    );
};

export default DonateCard;