import "./App.css";
import Display from "./component/Display";
import Graph from "./component/Graph";
import RecentTicket from "./component/RecentTicket";
import Sidebar from "./component/Sidebar";
import TicketOverview from "./component/TicketOverview";

function App() {
  return (
    <>
      <div className=" bg-slate-200 ">
        <div className=" flex h-screen ">
          <Sidebar />
          <div className="flex flex-col w-full overflow-y-auto">
            <Display />
            <TicketOverview />
            <Graph />
            <RecentTicket />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
