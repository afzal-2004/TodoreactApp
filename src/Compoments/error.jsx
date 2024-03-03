/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react/prop-types, no-unused-vars
const Error = ({ checklength }) => {
  return checklength.length == 0 ? (
    <>
      <h1
        className="  text-4xl text-center sm:text-9xl  mt-9 
      sm:mt-14 text-red-800 "
      >
        Enjoy your day...
      </h1>
    </>
  ) : null;
};
export default Error;
