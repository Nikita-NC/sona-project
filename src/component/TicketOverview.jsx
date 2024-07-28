import { MdAirlineSeatReclineNormal } from "react-icons/md";

const TicketOverview = () => {
  return (
    <>
      <h1 className="font-bold text-left p-2">Ticket Overview</h1>
      <div className="p-2 h-[25%] bg-white rounded mr-2 w-[98%]">
        <div className="flex  p-2   ">
          <div className="w-1/4 p-4 flex items-center justify-center gap-3">
            <div className=" flex justify-center text-blue-600">
              <MdAirlineSeatReclineNormal size={50} />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-3xl">Total Seats</p>
              <p className="text-4xl">15000 <span className="text-sm text-slate-600">seats</span></p>
            </div>
          </div>
          <div className="flex gap-2 p-2 ml-auto">
            <div className="bg-orange-100 p-4 rounded font-semibold">
              <div className=" flex justify-center text-orange-600">
                <MdAirlineSeatReclineNormal size={30} />
              </div>
              Booked Seats
              <p className="text-center text-orange-600 font-bold text-xl">
                32<span className="text-sm text-slate-600 font-semibold">seats</span>
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <div className=" flex justify-center text-green-600">
                <MdAirlineSeatReclineNormal size={30} />
              </div>
              Available Seats
              <p className="text-center text-green-600 font-bold text-xl">
                15<span className="text-sm text-slate-600 font-semibold">seats</span>
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded">
              <div className=" flex justify-center text-red-600">
                <MdAirlineSeatReclineNormal size={30} />
              </div>
              Confirmed Seats
              <p className="text-center text-red-600 font-bold text-xl">
                12<span className="text-sm text-slate-600 font-semibold">seats</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketOverview;
