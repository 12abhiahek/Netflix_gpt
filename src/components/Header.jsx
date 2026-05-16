import React from 'react';
import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="absolute top-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-20">
      
//       <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
//             alt="Netflix Logo" className="h-8 md:h-12" 
//         />

//       {/* Right Section */}
//       <div className="flex items-center gap-3 md:gap-5">
        
//         {/* Language Dropdown */}
//         <select className="bg-black/60 text-white border border-gray-300 px-2 py-1 md:px-3 md:py-1 rounded text-sm">
//           <option>English</option>
//           <option>हिन्दी</option>
//         </select>

//         {/* Sign In Button */}
//         <button
//           onClick={() => navigate("/login")}
//           className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm font-semibold"
//         >
//           Sign In
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Header;




const Header = ({ onSignInClick }) => {
  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-6 md:px-12 py-4 z-20 bg-gradient-to-b from-black/70 to-transparent">
      
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            alt="Netflix Logo" className="h-8 md:h-12" 
        />

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <select className="bg-black/60 text-white border border-gray-300 px-2 py-1 rounded">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        <button
          onClick={onSignInClick}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;