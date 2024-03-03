/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import todoHead from "./TODOheading";

import TODONAME from "./Compoments/TODOheading";
import TODOWORK from "./Compoments/AppUi";
import TODOITEMS from "./Compoments/items";
import Error from "./Compoments/error";
import { useState } from "react";

function App() {
  let todoitem = [
    {
      date: "10//11//2004",
      work: "Add SomeThing Here..",
    },
    {
      date: "22/11/2023",
      work: "Buy Milk",
    },
  ];

  let [CurrentTodoitem, setTodoitem] = useState([]);
  // let [CurrentTodoitem, setTodoitem] = useState(todoitem);

  const handelNewItem = (itemName, itemDueDate) => {
    console.log(`New item Added:${itemName} Date:${itemDueDate}`);
    const NewToDoitems = [
      ...CurrentTodoitem,
      {
        date: itemDueDate,
        work: itemName,
      },
    ];
    setTodoitem(NewToDoitems);
  };

  const handelDeletButton = (itemName) => {
    // console.log(`Delete Operation performed :${itemName}`);
    const newTodoitems = CurrentTodoitem.filter(
      (item) => item.work !== itemName
    );
    setTodoitem(newTodoitems);
  };
  return (
    <div className=" ml-4 ">
      <TODONAME></TODONAME>

      <TODOWORK onNewItem={handelNewItem}></TODOWORK>
      <Error checklength={CurrentTodoitem}></Error>

      <TODOITEMS
        todoitems={CurrentTodoitem}
        deletbutton={handelDeletButton}
      ></TODOITEMS>
    </div>
  );
}

export default App;
