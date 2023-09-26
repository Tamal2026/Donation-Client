const Banner = () => {
    const bannerStyle = {
        backgroundImage: 'url("../../../public/Rectangle 4281.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        position: 'relative',
        height: '600px',
    };

    const overlayStyle = {
        background: 'rgba(255, 255, 255, 0.9)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

   

    return (
        <>
            <div style={bannerStyle}>
                <div style={overlayStyle}></div>
              
            </div>
           <div className="absolute top-28 left-1/4">
           <h1 className="font-extrabold text-5xl text-black text-center mt-36">
                    I Grow By Helping People In Need
                </h1>
                <div className="flex items-center justify-center mt-10">
                    <input
                        placeholder="Search Here..."
                        className="border border-2-black-600 rounded-tl-lg rounded-bl-lg pr-40 pl-4 py-3"
                        type="text"
                    />
                    <button className="px-4 py-3 bg-red-500 rounded-tr-lg text-white rounded-br-lg font-semibold">
                        Search
                    </button>
                </div>
           </div>
        </>
    );
};

export default Banner;
