
const Banner = () => {
    return (
        <div>
          <h1 className="font-extrabold text-5xl text-center mt-36">I Grow By Helping People In Need</h1>
           <div className="flex items-center justify-center mt-10">
           <input placeholder="Search Here..." className="border border-2-black-600 rounded-tl-lg rounded-bl-lg pr-40 pl-4 py-3" type="text" /> 
            <button className="px-4 py-3 bg-red-500 rounded-tr-lg rounded-br-lg text-white font-semibold">Search</button>
           </div>
        </div>
    );
};

export default Banner;