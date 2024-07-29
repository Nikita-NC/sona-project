import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Display = () => {
  return (
    <>
      <div className="m-2 w-full flex flex-wrap justify-between p-2 h-auto">
        <div className="relative w-full sm:max-w-lg mb-2 sm:mb-0">
          <input
            type="text"
            placeholder="search by name, ID, bus destination, etc"
            className="p-2 rounded w-full h-10 pr-10"
            style={{width:"100%"}}
          />
          <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
          <IoNotifications size={20} />
          <FaUserCircle size={40} />
          <div className="flex flex-col">
            <p className="font-semibold text-sm sm:text-base">User1</p>
            <p className="text-slate-400 text-xs sm:text-sm">counter officer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
