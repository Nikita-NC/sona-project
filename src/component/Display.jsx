import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


const Display = () => {
  return (
    <>
      <div className="m-2 w-[98%] flex justify-between p-2 h-[10%]">
      <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="search by name, ID, bus destination, etc"
            className="p-2 rounded w-[100%] h-10 pr-10"
          />
          <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="pr-10 flex gap-4">
          <IoNotifications size={20} />
          <FaUserCircle size={40} />
          <div className="flex flex-col">
            <p className="font-semibold">User1</p>
            <p className="text-slate-400">counter officer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
