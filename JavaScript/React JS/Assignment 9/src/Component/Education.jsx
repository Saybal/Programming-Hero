import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import Slider from "./Slider";


const Education = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Education Apps | App Store";
}, []);

  useEffect(() => {
    fetch("education.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-full max-w-[92%] mx-auto">
      <div className="w-full mt-5 sm:mt-2 md:3">
        <Slider data={data} />
      </div>

      <div className="w-full text-base-content text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-4 md:my-8 px-4">
        Transform Your Learning <br /> Journey with <br />the  Best Education <br /> Apps
      </div>

      <div className="w-full grid [@media(max-width:768px)]:grid-cols-1 lg:grid-cols-3 [@media(max-width:1024px)]:grid-cols-2 gap-4">
        {data.map((app) => {
          return <AppCard key={app.id} app={app} />;
        })}
      </div>
    </div>
  );
};

export default Education;
