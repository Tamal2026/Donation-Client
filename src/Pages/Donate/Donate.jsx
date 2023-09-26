import { useEffect, useState } from "react";
import DonateShowing from "./DonateShowing";

const Donate = () => {
  const [donates, setDonates] = useState([]);
  const [noData, setNoData] = useState(false);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem("donate"));
    if (donateItem) {
      setDonates(donateItem);
    } else {
      setNoData(true);
    }
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <div>
        {noData ? (
          <p className="h-[80vh] justify-center items-center">No data</p>
        ) : (
          <>
            <div className="flex flex-wrap gap-16 mt-9">
              {showAll ? ( 
                donates.map((donate) => (
                  <DonateShowing key={donate.id} donate={donate} />
                ))
              ) : (
              
                donates.slice(0, 4).map((donate) => (
                  <DonateShowing key={donate.id} donate={donate} />
                ))
              )}
            </div>
            {donates.length >4 && !showAll && ( 
              <button
                className="px-4 py-1 rounded-lg bg-blue-600 text-center text-white"
                onClick={handleShowAll} 
              >
                Show All
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Donate;
