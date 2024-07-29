import { MdAirlineSeatReclineNormal } from "react-icons/md";

const TicketOverview = () => {
  return (
    <>
      <h1 className="font-bold text-left p-2">Ticket Overview</h1>
      <div className="p-2 h-auto bg-white rounded mr-2 w-full sm:w-[97%]">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/4 p-4 flex items-center justify-center gap-3">
            <div className="flex justify-center text-blue-600">
              <MdAirlineSeatReclineNormal className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <p className="font-semibold text-xl sm:text-3xl">Total Seats</p>
              <p className="text-2xl sm:text-4xl">
                15000 <span className="text-sm text-slate-600">seats</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 p-2 ml-auto w-full sm:w-auto">
            <div className="bg-orange-100 p-4 rounded font-semibold flex-1 sm:flex-none">
              <div className="flex justify-center text-orange-600">
                <MdAirlineSeatReclineNormal className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="text-center">Booked Seats</p>
              <p className="text-center text-orange-600 font-bold text-lg sm:text-xl">
                32<span className="text-sm text-slate-600 font-semibold"> seats</span>
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded flex-1 sm:flex-none">
              <div className="flex justify-center text-green-600">
                <MdAirlineSeatReclineNormal className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="text-center">Available Seats</p>
              <p className="text-center text-green-600 font-bold text-lg sm:text-xl">
                15<span className="text-sm text-slate-600 font-semibold"> seats</span>
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded flex-1 sm:flex-none">
              <div className="flex justify-center text-red-600">
                <MdAirlineSeatReclineNormal className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="text-center">Confirmed Seats</p>
              <p className="text-center text-red-600 font-bold text-lg sm:text-xl">
                12<span className="text-sm text-slate-600 font-semibold"> seats</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketOverview;
