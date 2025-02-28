import { MdDashboard } from "react-icons/md";
import { FaTicketSimple } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-[15%] h-screen p-2 flex flex-col gap-2  lg:flex">
      <div className="bg-white h-full rounded flex flex-col justify-between">
        <div>
          <div className="h-[10%] mt-2 flex justify-center">
            <img
              className="w-[100px]"
              src="https://th.bing.com/th/id/OIP.YVgFF-m55W2u_x8ICkmgowHaFk?w=220&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="#"
            />
          </div>
          <div className="mt-5 items-center pl-3 cursor-pointer">
            <div className="flex gap-3 mb-2">
              <MdDashboard />
              <h1>Dashboard</h1>
            </div>
            <div className="flex gap-3 mb-2">
              <FaTicketSimple size={30} />
              <select className="gap-3 bg-blue-200" id="dropdown" name="options">
                <option value="">
                  Ticket
                </option>
                <option value="option1">Ticket overview</option>
                <option value="option2">Book New Ticket</option>
                <option value="option2">Validate Ticket</option>
              </select>
            </div>
            <div className="flex gap-3 mb-2">
              <FaBus />
              <h1>Buses</h1>
            </div>
            <div className="flex gap-3 mb-2">
              <FaPerson />
              <h1>Drivers</h1>
            </div>
            <div className="flex gap-3 mb-2">
              <IoPerson />
              <h1>Customers</h1>
            </div>
            <div className="flex gap-3 mb-2">
              <MdPayment />
              <h1>Payment and Report</h1>
            </div>
            <div className="flex gap-3 mb-2">
              <MdDiscount />
              <h1>Discounts</h1>
            </div>
            <div className="flex gap-3 mb-2">
              <IoIosSettings />
              <h1>Setting</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mb-2 p-3 cursor-pointer text-red-500">
          <FiLogOut />
          <h1>Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
