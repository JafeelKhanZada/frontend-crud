import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Table from "./components/table";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "./store/action";
import AddEditPopup from "./components/add-edit";
function App() {
  // Hooks
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // Variables
  const state = useSelector((state) => state?.edit);
  // Effects
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  useEffect(() => {
    if (state) {
      setOpen(true);
    }
  }, [state]);
  return (
    <div className="w-full h-screen flex justify-center bg-gray-100 bg-opacity-50">
      <AddEditPopup open={open} setOpen={setOpen} />
      <div className="w-full p-20">
        <Header setOpen={setOpen} />
        <Table />
      </div>
    </div>
  );
}

export default App;
