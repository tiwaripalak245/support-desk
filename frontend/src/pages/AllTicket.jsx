import React, { useDebugValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTicket } from "../features/ticket/ticketSlice";
import Table from "../components/Table";
import { toast } from "react-toastify";

const AllTicket = () => {

  const {tickets, isLoading, isSuccess, isError, message} = useSelector((state) => state.ticket)

const dispatch = useDispatch()
useEffect(() => {
dispatch(getAllTicket())

if (isError || message) {
  toast.error(message)
}

}, [isError, message])

if (isLoading) {
  return(
    <h1>Loading...</h1>
  )
}

  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="xl:w-8/12  xl:mb-0 px-4 mx-auto mt-24 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-1">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  All Tickets
                </h3>
              </div>

            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    S.No
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Products
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Date
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
          {
            tickets.map((ticket, index) => <Table key={ticket._id} ticket = {ticket} index= {index}/>)
          }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllTicket;
