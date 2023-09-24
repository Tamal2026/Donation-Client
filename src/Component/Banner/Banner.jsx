const Banner = () => {
    // Define a CSS object for styling
    const bannerStyle = {
        backgroundImage: 'url("../../../public/Banenerr.jpg")',
        backgroundSize: 'cover', // Adjust this property
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top', // Adjust this property
    };
    

    return (
        <div style={bannerStyle} className="relative">
            <h1 className="font-extrabold text-5xl text-center mt-36 text-white">
                I Grow By Helping People In Need
            </h1>
            <div className="flex items-center justify-center mt-10">
                <input
                    placeholder="Search Here..."
                    className="border border-2-black-600 rounded-tl-lg rounded-bl-lg pr-40 pl-4 py-3"
                    type="text"
                />
                <button className="px-4 py-3 bg-red-500 rounded-tr-lg rounded-br-lg text-white font-semibold">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Banner;
