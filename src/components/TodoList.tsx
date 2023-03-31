import AddTask from "./AddTask";
// import TodoListItems from "./TodoListItems";
import { useState } from "react";

import dynamic from 'next/dynamic'
const TodoListItems = dynamic(() => import("./TodoListItems"), {
ssr: false,
});

interface TodoListProps {
  handleSelect: any;
  selectedId: number;
  countTotal: any;
  handleCheckChange: any;
}

const TodoList = function ( { handleSelect, selectedId, countTotal, handleCheckChange } : TodoListProps ) {
  let items = []

  let [currentItems, setCurrentItems] = useState(items);
  let [nextId, setNextId] = useState(1);

  const deleteItem = (id: number) => {
    setCurrentItems(currentItems => currentItems.filter((item) => item.id !== id));
    countTotal(currentItems.filter((item) => item.id !== id));
  };

  const addItem = (name: string, tag: string, id: number, checked: boolean) => {
    setCurrentItems(currentItems => [...currentItems, { name: name, tag: tag, id: nextId, checked: false }]);
    setNextId(nextId + 1);
    countTotal([...currentItems, { name: name, tag: tag, id: nextId, checked: false }]);
  }

  return (
    <div className="container bg-light p-4 mt-4 rounded-3 shadow-lg">
      <h3 className="text-primary">What&apos;s your plan for today?</h3>
      {/* <h5 className="mt-4">Add a new task</h5> */}
      <AddTask handleInput={addItem}/>
      <h5 className="mt-4">Currenly on your plate</h5>
      <TodoListItems items={currentItems} handleDelete={deleteItem} handleSelect={handleSelect} selectedId={selectedId} handleCheckChange={handleCheckChange}/>
    </div>
  )
}

export default TodoList;