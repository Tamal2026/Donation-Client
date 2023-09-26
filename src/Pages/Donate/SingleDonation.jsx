/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */


// eslint-disable-next-line react/prop-types
import swal from "sweetalert";
const SingleDonation = ({donation}) => {
    const {id,category,image,description,price,titleColor} = donation || {};
    const handleAddToDonate = () => {
      const donateItem = JSON.parse(localStorage.getItem("donate")) || [];
      const exists = donateItem.find((item) => item.id === id);
    
      if (!exists) {
        donateItem.push(donation);
        localStorage.setItem("donate", JSON.stringify(donateItem));
        swal("Good job!", "You clicked the button!", "success");
      } else {
        swal("Sorry!", "You Already Donated this!", "error");
      }
    };
    

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
    <button onClick={handleAddToDonate} style={cardStyle} className="px-3 py-1 rounded-lg text-white absolute bottom-96 left-56 " >Donate:{price}</button>
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