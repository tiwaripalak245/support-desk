import React, { useState } from "react";
import BackButton from "./BackButton";
import { useDispatch, useSelector } from "react-redux";
import { generateTicket } from "../features/ticket/ticketSlice";
import { useNavigate } from "react-router-dom";

const Ticket = ({location}) => {

  const { user} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    product: "",
    description: ""
  })

  const {product, description} = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(generateTicket(formData))
  navigate('/ticket/all-tickets')
}
  return (
    <div className="flex flex-col items-center justify-center h-screen light">
      <BackButton location={'/login'}/>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Raise Your Ticket
        </h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            required
            value={user.name}
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            required
value={user.email}
onChange={handleChange}
          />
          <select
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="product"
            required
            name="product" value={product} onChange={handleChange}

          >
            <option value="iphone">iPhone</option>
            <option value="ipad">iPad </option>
            <option value="ipod">ipod </option>
            <option value="watch">watch </option>
            <option value="macbook">Macbook </option>
            
          </select>
          <textarea
            placeholder="Describe Your Issue"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-4 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            required
            name="description" value={description} onChange={handleChange}

          >
          </textarea>

          <button
            className="bg-gradient-to-r from-indigo-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Raise Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ticket;
