import { isPropertySignature } from "typescript";
import { MouseEvent } from "react";
// import { TodoListItem } from "./TodoListItem"

import dynamic from 'next/dynamic'
const TodoListItem = dynamic(() => import("./TodoListItem"), {
ssr: false,
});

interface AllItemsProps {
  items: {}[];
  handleDelete: any;
  handleSelect: any;
  selectedId: number;
  handleCheckChange: any;
}

let TodoListItems = function( {items, handleDelete, handleSelect, selectedId, handleCheckChange} : AllItemsProps ) {

  if (items.length === 0) {
    return (
      <div className="todo-list-items">
        <p>You haven&apos;t planned anything for today. Add a task above to start!</p>
      </div>
    );
  } else {
    return (
    <>
      <ul className="list-group mt-3">
        {items.map((item, index) =>
          <TodoListItem 
            name={item.name} 
            tag={item.tag} 
            id={item.id} 
            checked={item.checked}
            handleDelete={() => handleDelete(item.id)}
            handleSelect={() => handleSelect(item.name, item.tag, item.id)}
            selectedId={selectedId}
            handleCheckChange={() => handleCheckChange(item)}
            key={item.id}
          />)}
      </ul>
    </>)}
}

export default TodoListItems;