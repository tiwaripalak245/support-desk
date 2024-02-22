import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../features/notes/noteSlice";
import { useParams } from "react-router-dom";
import NoteItem from "./NoteItem";

const NoteModal = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { notes } = useSelector((state) => state.note);
  const [modalVisible, SetModalVisible] = useState(false);

  const modalToggle = () => {
    SetModalVisible(!modalVisible);
  };

  useEffect(() => {
    dispatch(getNotes(params.id));
  }, []);

  return (
    <>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={modalToggle}
      >
        Add Note +
      </button>

      {modalVisible && notes.map((note) => <NoteItem key={note._id} note= {note} modalToggle={modalToggle} />)}
    </>
  );
};

export default NoteModal;

