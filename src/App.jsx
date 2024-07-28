import "./App.css";
import Display from "./component/Display";
import Graph from "./component/Graph";
import Sidebar from "./component/Sidebar";
import TicketOverview from "./component/TicketOverview";

function App() {
  return (
    <>
      <div className=" bg-slate-200 ">
        <div className=" flex">
        <Sidebar />
        <div className="flex flex-col w-full">
        <Display/>
        <TicketOverview/>
        <Graph/>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
