import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { closeSingleTicket, getSingleTicket } from "../features/ticket/ticketSlice";
import NoteModal from "../components/NoteModal";

const SingleTicket = () => {
  const dispatch = useDispatch();
  const { singleTicket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );

  const params = useParams();

  useEffect(() => {
    dispatch(getSingleTicket(params.id));
  }, []);

  const handleClose = (id) => {
    dispatch(closeSingleTicket(id))
  }

  return (
<>
<div className="container p-5">
      <h1 className=" bg-slate-900 text-center text-2xl text-gray-50">
        Your Ticket
      </h1>
      <div className=" caret-indigo-400 border-2 border-cyan-950 p-10 m-10">
        <h1 className=" text-3xl font-bold m-1">
          Product : {singleTicket?.product}
        </h1>
        <h2 className="text-xl font-medium m-1">
          Description : {singleTicket?.description}
        </h2>
        <p className="text-gray-700 m-1 pt-3 border-t-2">
          Ticket Id: {singleTicket?._id}
        </p>
        <p className="text-black m-1 ">
          Date: {new Date(singleTicket?.createdAt).toLocaleDateString("en-IN")}
        </p>
        <p className="text-black m-1 ">
          Time: {new Date(singleTicket?.createdAt).toLocaleTimeString("en-IN")}
        </p>

        <p className="text-black text-lg m-1">
          Status :
          { singleTicket?.status === "open" ? (
            <span className="bg-green-600 m-2 py-1 px-3.5 rounded-lg">{singleTicket?.status}</span>
          ) : singleTicket?.status === "closed" ? (
            <span className="bg-red-600 m-2 py-1 px-3.5 rounded-lg">{singleTicket?.status}</span>
          ) : (
            <span className="bg-indigo-600 m-2 py-1 px-3.5 rounded-lg">{singleTicket?.status}</span>
          )}
          </p>
      </div>
<NoteModal/>
    </div>
<div className="container m-10  ">
{
  singleTicket?.status === "closed" ? (
    <button className="rounded-md bg-red-300 px-3 py-3 text-center font-semibold text-white shadow-md w-full disabled"
onClick={() => handleClose(singleTicket._id)}
>Already Closed</button>
  ) : (
    <button className="rounded-md bg-red-600 px-3 py-3 text-center font-semibold text-white shadow-md w-full"
onClick={() => handleClose(singleTicket._id)}
>Close Ticket</button>
  )
}
</div>

</>
  );
};

export default SingleTicket;
