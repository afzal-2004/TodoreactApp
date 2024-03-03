/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { MdDelete } from "react-icons/md";
function APPPROCESS({ work, date, delet }) {
  return (
    <div className="   flex  text-xl  md:text-3xl         items-centern w-[90%]  mt-[5%] md:mt-[0.3%] m-3">
      <div className="  md:w-[32%] w-[40%]  flex justify-center items-center">
        {work}
      </div>

      <div className=" md:w-[32%] w-[40%]  flex justify-center items-center">
        {date}
      </div>

      <button
        className="    md:w-[32%] w-[40%]  justify-center  items-center  rounded-xl  h-full md:ml-[7%]"
        onClick={() => delet(work)}
      >
        <MdDelete className="text-3xl" />
      </button>
    </div>
  );
}
export default APPPROCESS;
