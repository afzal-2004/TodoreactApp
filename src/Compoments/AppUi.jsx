/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdAddCircle } from "react-icons/md";
import { useState, useRef } from "react";

function TODOWORK({ onNewItem }) {
  const [todoname, setTodoname] = useState("");

  const [dueDate, setdueDate] = useState("");
  const noOfUpdates = useRef(0);

  const FindTOdo = (event) => {
    setTodoname(event.target.value);
    noOfUpdates.current += 1;
  };

  const FindDueDate = (event) => {
    setdueDate(event.target.value);
    console.log(`No Of uupdates is ${noOfUpdates.current}`);
  };
  const handelAddButtonClicked = () => {
    onNewItem(todoname, dueDate);
    setdueDate("");
    setTodoname("");
  };

  return (
    <div className="  m-3 grid  md:grid-cols-3  w-[90%]">
      <input
        className=" sm:text-3xl  text-[18px] mt-7   border-4  p-2 border-black m-[5%] "
        type="text"
        value={todoname}
        placeholder="Enter ToDo Here.."
        onChange={FindTOdo}
      />

      <input
        className=" sm:text-3xl text-[18px]  mt-7   border-4  border-black   p-2 m-[5%] "
        type="Date"
        value={dueDate}
        onChange={FindDueDate}
      />
      {/* <center> */}
      <button
        className="  md:w-[20%]      flex  justify-center  items-center  rounded-xl h-full "
        onClick={() => handelAddButtonClicked()}
      >
        <MdAddCircle className=" text-4xl" />
      </button>
      {/* </center> */}
    </div>
  );
}
export default TODOWORK;
