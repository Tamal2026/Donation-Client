/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */


// eslint-disable-next-line react/prop-types
const SingleDonation = ({donation}) => {
    const {category,image,description,price,titleColor} = donation || {};
    const cardStyle = {
        backgroundColor: titleColor || "#FFFFFF",
        
      }

    return (
    <>
    <div>

  
     
        <div className="mt-8 pl-52">

            <div classNameName= " relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div classNameName="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img style={{height:'650px',width:'1200px'}}
      src={image}
      alt="ui/ux review check"
    />
    <button style={cardStyle} className="px-3 py-1 rounded-lg text-white absolute bottom-48 left-56 " >Donate:{price}</button>
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased ">
    {category}
    </h4>
   <div>
    <p className="w-[1200px] pt-5">{description}</p>
   </div>
  </div>
  
</div>
        </div>
        </div>
        </>
    );
};

export default SingleDonation;