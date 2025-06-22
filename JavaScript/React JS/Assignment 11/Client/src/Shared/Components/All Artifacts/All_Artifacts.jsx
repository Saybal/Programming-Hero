import React, { useEffect, useState } from "react";
import Artifact_Card from "./Artifact_Card";
import Swal from "sweetalert2";
import Loading from "../Loading";
import Banner_All from "./Banner_All";

const All_Artifacts = () => {
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [countArtifacts, setcountArtifacts] = useState(0);
  const [itemperPage, setitemperPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const numberofPages = Math.ceil(countArtifacts / itemperPage);

  const pages = [...Array(numberofPages).keys()];

  useEffect(() => {
      document.title = "All Artifacts";
    }, []);

  useEffect(() => {
    
      fetch(`http://localhost:3000/all-artifacts?page=${currentPage}&limit=${itemperPage}`)
        .then((res) => res.json())
        .then((data) => {
          setAllArtifacts(data.Artifacts);
          setcountArtifacts(data.totalArtifactsNumber);
          setLoading(false);
        })
        .catch((error) => {
          Swal({
            text: error.message,
            icon: "error",
            button: {
              text: "Okay",
              closeModal: true,
            },
          });
          setLoading(false);
        });

      setLoading(false);
    
  }, [currentPage, itemperPage]);
  
  const handlePrev = () => {
    if (currentPage > 0) setcurrentPage(currentPage - 1);
  }
  const handleNext = () => {
    if (currentPage < numberofPages - 1) setcurrentPage(currentPage + 1);
  }
  

  return (
    <div className="mx-auto bg-[#ECE7E1] pb-32">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Banner_All />
          <div className="mt-20 max-w-6xl mx-auto">
            {allArtifacts.map((artifact, index) => (
              <div className="px-4 lg:px-0">
                <Artifact_Card key={index} artifact={artifact} />
              </div>
            ))}
            </div>
            
            {/* Page Buttons */}
            <div className="w-full flex justify-center items-center gap-2 normal-font">
              <button onClick={handlePrev} className="text-[#960018] font-bold">Prev</button>
              {
                pages.map(page => (
                  <button key={page} onClick={() => setcurrentPage(page)} className={`btn btn-outline border-[#960018] text-[#960018] hover:text-white hover:bg-[#960018] ${(currentPage === page)? "text-white bg-[#960018]": ""}`}>{page + 1}</button>
                ))
              }
              <button onClick={handleNext} className="text-[#960018] font-bold">Next</button>
            </div>
        </>
      )}
    </div>
  );
};

export default All_Artifacts;
