import React from 'react'
import { useDispatch } from 'react-redux'
import { createNotes } from '../features/notes/noteSlice'
import { useParams } from 'react-router-dom'

const NoteItem = ({modalToggle, note}) => {

  const dispatch = useDispatch()
  const params = useParams()
  const saveNote = () => {
    dispatch(createNotes(params.id))
  }
  return (
    <div>
    <div
      className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40 "
      onClick={modalToggle}
    ></div>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50  p-4 md:p-5">
      <button
        type="button"
        className="absolute border-red-600 top-3 end-2.5 text-slate-700 bg-slate-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={modalToggle}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <div className="text-start">
        <h3 className="mb-5  text-lg font-normal text-gray-500 dark:text-gray-400">
            {note.text}
        </h3>
        <h4 className=" text-lg font-normal text-gray-500 dark:text-gray-400">
          From: {note._id}
        </h4>
        <p className="mb-5  text-lg font-normal text-gray-500 dark:text-gray-400">
          Ticket Created: {new Date(note.createdAt).toLocaleDateString("en-IN")}
        </p>
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          onClick={saveNote}
        >
          Save Notes
        </button>
        <button
          type="button"
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={modalToggle}
        >
          No, cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default NoteItem
