/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line react/prop-types
import APPPROCESS from "./AppFunction";
// eslint-disable-next-line no-unused-vars
const TODOITEMS = ({ todoitems, deletbutton }) => {
  return (
    <div>
      {todoitems.map((_items, index) => (
        <APPPROCESS
          key={index}
          date={_items.date}
          work={_items.work}
          delet={deletbutton}
        ></APPPROCESS>
      ))}
    </div>
  );
};
export default TODOITEMS;
