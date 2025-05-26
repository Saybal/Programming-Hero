import React from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router"; // use `react-router-dom` instead of `react-router`

const AppCard = ({ app }) => {
  // const { setData } = useContext(AuthContext); // useContext, not `use`

  const navigate = useNavigate();
  const handleClick = (appData) => {
    const data = localStorage.getItem("AppData");
    if (data) {
      localStorage.removeItem("AppData");
    }
    localStorage.setItem("AppData", JSON.stringify(appData));
    navigate("/about");
  };

  return (
    <div
      // to="/about"
      onClick={() => handleClick(app)}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 15%, transparent), url(${app.banner})`,
      }}
      className="card flex bg-base-100 bg-cover bg-center w-full h-[13rem] sm:h-[14rem] md:w-[22rem] md:h-[15rem] lg:w-[28rem] lg:h-[16rem] rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="card-body flex flex-col justify-end p-4">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-50 font-bold card-title">
          {app.name}
        </h2>

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-3 items-center">
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full border border-white"
              src={app.thumbnail}
              alt={`${app.name} icon`}
            />
            <div>
              <p className="text-xs sm:text-sm md:text-base text-amber-50 font-medium">
                {app.subtitle}
              </p>
              <div className="flex gap-2 text-base-content text-xs sm:text-xs mt-1">
                <p>{app.rating || "N/A"} ⭐⭐</p>
                <span>|</span>
                <p>{app.downloads || "N/A"} ⬇️</p>
              </div>
            </div>
          </div>
          <button className="btn btn-success btn-sm md:btn-md">Install</button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
