// import { useState } from "react";
import { recentSearch } from "../assets/data";
import "./Style.css";
import { CiSearch } from "react-icons/ci";
import { IoPrintOutline } from "react-icons/io5";
import { CiExport } from "react-icons/ci";

const RecentTicket = () => {
//   const [color, setColor] = useState("green");
  return (
    <>
      <div className="mt-4 mr-6">
        <h2
          style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "10px" }}
        >
          Recent Tickets
        </h2>
        <div className="searchTicket">
          <div className="search">
            <input type="date" />

            <div className="searchbox">
              <CiSearch
                className="transform translate mx-2"
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <input
                type="text"
                placeholder="Search customer or ticket Number"
              />
            </div>
          </div>

          <div className="export">
          <button type="submit" className="button1"><CiExport />Export</button>
          <button type="submit" className="button1"><IoPrintOutline />print</button>
          </div>
        </div>

        <div className="recentTickets">
          <div className="tabeldata">
            <table style={{ border: "none" }}>
              <thead>
                <tr style={{ height: "60px", border: "0 2px dotted black" }}>
                  <th className="px-7">Passenger Name</th>
                  <th className="px-4">Phone No</th>
                  <th className="px-4">Seat No</th>
                  <th className="px-4">Ticket No</th>
                  <th className="px-4">Payment Status</th>
                  <th className="px-4">Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {recentSearch.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    style={{
                      height: "50px",
                      borderBottom: "2px dashed black",
                      borderTop: "2px dashed black",
                    }}
                  >
                    <td className="px-7 py-2 border">
                      <input type="checkbox" className="px-2" /> {item.Name}
                    </td>
                    <td className="px-4 py-2 border">{item.Phone}</td>
                    <td className="px-4 py-2 border">{item.Seat_No}</td>
                    <td className="px-4 py-2 border">{item.Ticket_No}</td>
                    <td
                      className="px-4 py-2 border"
                      style={{
                        color:
                          item.Payment_Status === "Success" ? "green" : "red",
                      }}
                    >
                      {item.Payment_Status}
                    </td>
                    <td className="px-4 py-2 border">{item.Payment_Method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentTicket;
