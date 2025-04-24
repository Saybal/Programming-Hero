import { Link, NavLink } from 'react-router';
import { FaRegRegistered } from "react-icons/fa6";
import Lawyerdetails from './Lawyerdetails';

const LawyerCard = ({ lawyer }) => {

    
    return (
        <div className="max-w-lg flex gap-6 items-center p-4 border border-[#C4C4C499] rounded-xl shadow-sm space-x-4 bg-white">
          {/* Profile Placeholder */}
          <img src={lawyer.image} className="w-40 h-40 rounded-md" />
    
          {/* Info Section */}
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                {lawyer.availability}
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                {lawyer.experience}
              </span>
            </div>
    
                <h2 className="text-2xl font-semibold">{lawyer.name}</h2>
                <p className="text-lg text-gray-600">{lawyer.specialization}</p>
            <p className="text-lg text-gray-500 flex gap-1 items-center">
              <span className="mr-1"><FaRegRegistered className="mt-0.5" /></span> License No: {lawyer.license_no}
            </p>
    
          <NavLink to={`/details/${lawyer.id}`}>
            <button className="mt-3 px-4 py-1 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 text-lg">
              View Details
            </button>
          </NavLink>
          </div>
        </div>
      );
  };
  
  export default LawyerCard;