/* eslint-disable react/prop-types */


const DonateShowing = ({donate}) => {
  const {category,image,title,price,titleColor,bgColor} = donate || {};

  const cardStyle = {
    backgroundColor: bgColor,
    color: titleColor
  }
    return (
        <div>
            <div style={cardStyle}  className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 style={cardStyle} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
     {category}
    </h6>
    <h4 style={cardStyle} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
   {title}
    </h4>
    <p style={cardStyle} className="mb-8 block font-sans text-base font-bold leading-relaxed text-gray-700 antialiased">
     ${price}
    </p>
    <a className="inline-block" href="#">
      <button  style={{...cardStyle,color:'white'}}
        className=" items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-md font-bold uppercase text-white l hover:bg-pink-500/10"
        type="button"
      >
      view details

          
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default DonateShowing;