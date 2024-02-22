import React from "react";
import { Link } from "react-router-dom";

const Table = ({ ticket, index }) => {
  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {index + 1}
      </th>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {ticket.product}
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        {new Date(ticket.createdAt).toLocaleDateString("en-us")}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <div className="center relative inline-block select-none whitespace-nowrap rounded-lg py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
          <div className="mt-px">
            { ticket?.status === "open" ? (
            <span className="bg-green-600 m-2 py-1 px-3.5 rounded-lg">{ticket?.status}</span>
          ) : ticket?.status === "closed" ? (
            <span className="bg-red-600 m-2 py-1 px-3.5 rounded-lg">{ticket?.status}</span>
          ) : (
            <span className="bg-indigo-600 m-2 py-1 px-3.5 rounded-lg">{ticket?.status}</span>
          )}
          </div>
        </div>
      </td>
      <td>
        <button className="bg-slate-700 hover:bg-blue text-white font-semibold hover:text-black py-2 px-4 border border-blue hover:border-black rounded mr-2">
          <Link to={`/ticket/${ticket._id}`}>View</Link>
        </button>
      </td>
    </tr>
  );
};

export default Table;
